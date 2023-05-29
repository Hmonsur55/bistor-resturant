import { useForm } from "react-hook-form";
import "./Login.css";
import loginImg from "../../assets/others/loginbg.png";
import bg from "../../assets/menu/menu-bg.png";

import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
const Login = () => {
    const {signIn} =useContext(authContext)
     const [success, setSuccess] = useState("");
     const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(true);
  const capthaRef = useRef(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
      console.log(data);
      const { email, password } = data;
      signIn(email, password)
          .then(result => {
              const logUser = result.user;
              setSuccess('You have successfully login')
          })
          .catch(error => {
          setError(error.message)
      })

  };

  //   console.log(watch("example"));

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
    const handleCapthca = () => {
        const user_captcha_value = capthaRef.current.value;
        console.log(user_captcha_value)
        if (validateCaptcha(user_captcha_value) == true) {
         setDisabled(false);
        } else {
          setDisabled(true)
        }
  };
  return (
    <section
      className="h-screen flex items-center"
      style={{
        backgroundImage: `url("${bg})`,
      }}
    >
      <Helmet>
        <title>Bistro | Login </title>
      </Helmet>
      <div className="w-7/12 mx-auto grid md:grid-cols-2 justify-center items-center bg bg-gray-200 shadow-lg p-10">
        <div>
          <img className="w-[300px]" src={loginImg} alt="" />
        </div>
        <div>
          <div>
            <h3 className="text-center text-4xl mb-5">Login </h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block mt-[-10px] text-black">Name</label>
              <input placeholder="Type here" {...register("name")} />
            </div>

            <input
              placeholder="Email"
              type="email"
              {...register("email", { required: true })}
            />
            <div>
              <LoadCanvasTemplate />
              <input
                ref={capthaRef}
                type="text"
                placeholder="Type above text"
              />
              <input
                onClick={handleCapthca}
                type="checkbox"
                checked="checked"
                className="checkbox"
              />
            </div>
            <input
              placeholder="password"
              type="password"
              {...register("password", { required: true })}
            />

            {errors.exampleRequired && <p>This field is required</p>}

            <input
              className="btn btn-accent"
              disabled={disabled}
              value="Sign in"
              type="submit"
            />
          </form>
          <p className="text-red">{success}</p>
          <p className="text-success">{error}</p>
          <p>
            Do not Have Account <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
