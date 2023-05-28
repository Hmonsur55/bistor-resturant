

const FoodCard = ({ item }) => {
    const { image, name, price, recipe } = item;
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
            <button className=" text-yellow-500 btn btn-outline border-0 border-b-4">Order Now</button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;