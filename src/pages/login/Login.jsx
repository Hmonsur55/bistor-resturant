import { useForm } from "react-hook-form";
import "./Login.css";
import loginImg from "../../assets/others/loginbg.png";
import bg from "../../assets/menu/menu-bg.png";
const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example")); // you can watch individual input by pa

  return (
    <section
      className="h-screen flex items-center"
      style={{
        backgroundImage: `url("${bg})`,
      }}
    >
      <div className="w-7/12 mx-auto grid md:grid-cols-2 justify-center items-center bg bg-gray-200 shadow-lg p-10">
        <div>
          <img className="w-[300px]" src={loginImg} alt="" />
        </div>
        <div>
          <div>
            <h3 className="text-center text-4xl mb-5">Login </h3>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Name" {...register("name")} />

            <input
              placeholder="Email"
              type="email"
              {...register("email", { required: true })}
            />
            <input
              placeholder="password"
              type="password"
              {...register("password", { required: true })}
            />

            {errors.exampleRequired && <p>This field is required</p>}

            <input value="Sign in" type="submit" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
