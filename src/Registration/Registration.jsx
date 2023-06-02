import regImg from '../assets/others/loginbg.png'
import { useForm } from "react-hook-form";
import { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from "sweetalert2";
const Registration = () => {
    const  [success, setSuccess] =useState('')
    const  [error, setError] =useState('')
  const { createUser, updateProfileUser } = useContext(authContext);
  const navigate = useNavigate();
  
     const {
       register,
       handleSubmit,
       watch,
       formState: { errors },
     } = useForm();
     const onSubmit = (data) => {
         console.log(data);
         const { email, password } = data
         
         createUser(email, password)
             .then(result => {
               const logUser = result.user;
               updateProfileUser(data.name, data.photo)
                 .then(() => {
                   const userDetails = { name: data.name, email:data.email}
                   fetch(`http://localhost:5000/users`, {
                     method: 'POST',
                     headers: {
                       'content-type' : 'application/json'
                     },
                     body : JSON.stringify(userDetails)
                   })
                     .then(res => res.json())
                     .then(data => {
                       if (data.insertedId) {
                         Swal.fire("User Has been Create Successfully");
                       }
                       navigate("/");
                     });
                 })
                 .catch((error) => {
                   console.log(error)
                 });
               
              //  navigate(from, { replace: true });
             }).catch(error => {
             setError(error)
         }).catch()
         
    };
    

    return (
      <section className="h-screen flex items-center">
        <Helmet>
          <title>Bistro | Register</title>
        </Helmet>
        <div className="w-7/12 mx-auto grid md:grid-cols-2 justify-center items-center bg bg-gray-200 shadow-lg p-10">
          <div>
            <img className="w-[300px]" src={regImg} alt="" />
          </div>
          <div>
            <div>
              <h3 className="text-center text-4xl mb-5">Register </h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  placeholder="Type here"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red">This field is required</span>
                )}
              </div>
              <div>
                <input
                  placeholder="Photo Url"
                  {...register("photo", { required: true })}
                />
                {errors.photo && (
                  <span className="text-red">Photo Url is required</span>
                )}
              </div>

              <input
                placeholder="Email"
                type="email"
                {...register("email", { required: true })}
              />
              <div>
                {errors.password?.type === "required" && (
                  <p role="alert">First name is required</p>
                )}
                {errors.password?.type === "pattern" && (
                  <p role="alert">Atleast one Upercase and lowercase</p>
                )}
                <input
                  placeholder="password"
                  type="password"
                  {...register("password", {
                    required: true,
                    pattern: /[A-Z][a-z]/,
                  })}
                />
              </div>

              <input className="btn btn-accent" value="Sign in" type="submit" />
            </form>
            <p className="text-red">{error}</p>
            <p className="text-success">{success}</p>
            <p>
              Already Have an Account <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </section>
    );
};

export default Registration;