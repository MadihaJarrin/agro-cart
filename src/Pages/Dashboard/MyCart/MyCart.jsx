import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";

const MyCart = () => {
    const [cart, refetch] = useCart();
    console.log(cart);
    // how does reduce work!!!
    const total = cart.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            {/* <Helmet>
            <title>Groovestyle | My Cart</title>
        </Helmet> */}
            <div className="uppercase font-semibold h-16 flex justify-evenly items-center gap-10 text-yellow-500 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 p-10" >
                <h3 className="text-3xl text-blue-600">Total Items: {cart.length}</h3>
                <h3 className="text-3xl text-blue-600">Total Price: ${total.toFixed(2)}</h3>
                <Link to="/dashboard/payment">
                    <button className="btn btn-warning btn-sm bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-red-300">
                        PAY Please
                    </button>
                </Link>
            </div>
            <div className="divider"></div>


            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="bg-red-500 text-white">
                        <tr>
                            <th>Serial </th>
                            <th>Products</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item._id}>
                                <td>  {index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td className="">${item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;