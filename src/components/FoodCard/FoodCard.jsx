import { useContext } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";
import {  useLocation, useNavigate, } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const {_id, image, name, price, recipe } = item;
  const { user } = useContext(authContext);
  const [,refetch] = useCart();
  const navigate = useNavigate()
  const location = useLocation()
  const handleFoodCard = item => {
    const foodCart = {menuId :_id, name, price, image, email: user.email }
    if (user && user.email) {
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(foodCart),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your order has been added",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
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
          navigate('/login', {state: {from: location}})
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