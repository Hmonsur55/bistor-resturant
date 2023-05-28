
import { Link } from 'react-router-dom';
import Cover from '../SharePage/Cover/Cover';
import ItemsCard from '../SharePage/PopularItems/ItemsCard';

const CategoryMenu = ({items, img, title}) => {
    return (
      <div>
        {title && <Cover img={img} title={title}></Cover>}
        <div className=" py-8 max-w-screen-xl mx-auto  grid md:grid-cols-2 gap-10 sm: px-5">
          {items.map((item) => (
            <ItemsCard key={item._id} item={item}></ItemsCard>
          ))}
        </div>
        <div className="card-actions justify-center py-3">
          <Link to={`/order/${title}`}>
            <button className=" text-yellow-500 btn btn-outline border-0 border-b-4">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    );
};

export default CategoryMenu;