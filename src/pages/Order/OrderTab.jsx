
import FoodCard from '../../components/FoodCard/FoodCard';

const OrderTab = ({items}) => {
    return (
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-3 gap-10 py-16">
        {items.map((item) => (
          <FoodCard key={item._id} item={item}></FoodCard>
        ))}
      </div>
    );
};

export default OrderTab;