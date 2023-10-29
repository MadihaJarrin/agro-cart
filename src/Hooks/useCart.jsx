import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "react-query";

const useCart = () => {

    const { user, loading } = useContext(AuthContext);

    // const token = localStorage.getItem('access-token');

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`
                // , {
                //     headers: {
                //         authorization: `bearer ${token}`
                //     }
                // }
            )
            // console.log('res from axios', res)
            return res.json();
        },
    })
    return [cart, refetch]

};

export default useCart;