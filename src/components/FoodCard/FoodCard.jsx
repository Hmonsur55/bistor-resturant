import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import {  useNavigate, } from "react-router-dom";
import Swal from "sweetalert2";

const FoodCard = ({ item }) => {
  const { image, name, price, recipe } = item;
  const { user } = useContext(authContext);
 const navigate = useNavigate()
  const handleFoodCard = item => {
    if (user) {
      fetch('')
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
    } else {
      Swal.fire({
        title: "Please Login to order the food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login')
        }
      });
   }
  }

    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
                <h2 className="card-title">{ name}!</h2>
                <p>{ recipe}</p>
          <div className="card-actions justify-center">
            <button onClick={()=>handleFoodCard(item)} className=" text-yellow-500 btn btn-outline border-0 border-b-4">Order Now</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;