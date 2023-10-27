import { Link, useNavigate } from "react-router-dom";
import signup from '../../../assets/Authentication/signup1.png'
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();


    const onSubmit = async (data) => {
        try {
            const result = await createUser(data.email, data.password);
            const loggedUser = result.user;
            console.log(loggedUser);

            await updateUserProfile(data.name, data.photoURL);

            const saveUser = { name: data.name, email: data.email };
            const response = await fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
            });

            const responseData = await response.json();

            if (responseData.insertedID) {
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Account created successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            }
        } catch (error) {
            console.error(error);
            // Handle errors here
        }
    };


    // const onSubmit = data => {

    //     console.log(data);
    //     createUser(data.email, data.password)
    //         .then(result => {
    //             const loggedUser = result.user;
    //             console.log(loggedUser);

    //             updateUserProfile(data.name, data.photoURL)

    //                 .then(() => {
    //                     const saveUser = { name: data.name, email: data.email } //get user name & email
    //                     fetch('http://localhost:5000/users', {
    //                         method: 'POST',
    //                         headers: {
    //                             'content-type': 'application/json'
    //                         },
    //                         body: JSON.stringify(saveUser)

    //                     })
    //                         .then(res => res.json())
    //                         .then(data => {
    //                             if (data.insertedID) {

    //                                 reset();
    //                                 Swal.fire({
    //                                     position: 'top-end',
    //                                     icon: 'success',
    //                                     title: 'Account created successfully.',
    //                                     showConfirmButton: false,
    //                                     timer: 1500
    //                                 });
    //                                 navigate('/');
    //                             }
    //                         })


    //                     // console.log("user profile info updated")

    //                 }

    //                 )
    //                 .catch(error => console.log(error))
    //         });
    // };

    return (
        <>
            {/* <Helmet>
            <title>Groovestyle | Sign Up</title>
        </Helmet> */}
            <div className="hero min-h-scree pb-10 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-violet-400 to-90%">
                <div>
                    <h1 className='font-sarif text-7xl font-extrabold text-white text-center m-20 uppercase '>Sign-up Now</h1>

                    <div className="hero-content flexe">
                        <div className="text-center lg:text-left">
                            <img className='' src={signup} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name"  {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                                    {errors.name && <span className="text-red-600">Name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                    {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className="text-red-600">Email is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password"  {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })}
                                        placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Sign Up" />
                                </div>
                            </form>
                            <p className='text-center mb-5 text-xl'><small>Already resistered?<Link to="/login" className='text-blue-700'>Log in from here </Link></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;