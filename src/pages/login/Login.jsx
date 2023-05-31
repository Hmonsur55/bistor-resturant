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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
const Login = () => {
    const { signIn, googleSignIn } = useContext(authContext);
     const [success, setSuccess] = useState("");
     const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
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
              console.log(logUser)
            Swal.fire("User Login Successfully");
            navigate(from, { replace: true });
          })
          .catch(error => {
          setError(error.message)
      })

  };

  //   console.log(watch("example"));

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
    const handleCapthca = (e) => {
        const user_captcha_value = e.target.value;
        console.log(user_captcha_value)
        if (validateCaptcha(user_captcha_value) == true) {
         setDisabled(false);
        } else {
          setDisabled(true)
        }
  };

  const googleLogin = () => {
    googleSignIn()
      .then((result) => {
        const looginUser = result.user;
         navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error);
      });
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
            {/* <div>
              <label className="block mt-[-10px] text-black">Name</label>
              <input placeholder="Type here" {...register("name")} />
            </div> */}

            <input
              placeholder="Email"
              type="email"
              {...register("email", { required: true })}
            />
            <div>
              <LoadCanvasTemplate />
              <input
                onBlur={handleCapthca}
                type="text"
                placeholder="Type above text"
              />
              <input type="checkbox" checked="checked" className="checkbox" />
            </div>
            <input
              placeholder="password"
              type="password"
              {...register("password", { required: true })}
            />

            {errors.exampleRequired && <p>This field is required</p>}

            <input
              className="btn btn-accent"
              disabled={false}
              value="Sign in"
              type="submit"
            />
          </form>
          <p className="text-red">{success}</p>
          <p className="text-success">{error}</p>
          <p>
            Do not Have Account <Link to="/register">Register</Link>
          </p>
          <button onClick={googleLogin} className="btn btn-accent">
            google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
