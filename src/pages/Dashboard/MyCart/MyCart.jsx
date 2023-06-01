import { Helmet } from "react-helmet-async";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = (item) => {
   Swal.fire({
     title: "Are you sure?",
     text: "You won't be able to revert this!",
     icon: "warning",
     showCancelButton: true,
     confirmButtonColor: "#3085d6",
     cancelButtonColor: "#d33",
     confirmButtonText: "Yes, delete it!",
   }).then((result) => {
     if (result.isConfirmed) {
       fetch(`http://localhost:5000/carts/${item}`, {
         method: 'DELETE',
       })
         .then(res => res.json())
         .then(data => {
           if (data.deletedCount > 0) {
             refetch()
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
           }
         });
     }
   });
    
  }
  return (
    <div className="w-full px-10">
      <Helmet>
        <title>Bistro | Login </title>
      </Helmet>
      <div className="flex justify-evenly items-center text-bold my-5 text-2xl uppercase">
        <h1>my Cart {cart.length}</h1>
        <h1>Total Price {total}</h1>
        <button className="btn btn-sm bg-[#D1A054] border-0">Pay</button>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-8/12 mx-auto">
          <thead>
            <tr>
              <th>#</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost text-white  bg-red-600"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
