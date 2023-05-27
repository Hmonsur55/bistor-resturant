const ItemsCard = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="flex  space-x-5 ">
      <img
        style={{ borderRadius: "0px 200px 200px 200px" }}
        className="w-[105px] "
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase text-xl">{name} --------- </h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500"> ${price}</p>
    </div>
  );
};

export default ItemsCard;
