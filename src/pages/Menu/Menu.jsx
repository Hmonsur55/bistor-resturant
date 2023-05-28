import { Helmet} from "react-helmet-async";
import Cover from "../SharePage/Cover/Cover";
import coverimg from "../../assets/menu/banner3.jpg";
// import PopularMenu from "../Home/PopularMenu/PopularMenu";
import useMenu from "../../hooks/useMenu";
import CategoryMenu from "./CategoryMenu";
import desimg from '../../assets/menu/dessert-bg.jpeg'
import pizzaimg from '../../assets/menu/pizza-bg.jpg'
import saladimg from '../../assets/menu/salad-bg.jpg'
import soupimg from '../../assets/menu/soup-bg.jpg'
import SectionTitle from "../../components/SectionTitle/SectionTitle";
const Menu = () => {
  const [menu] = useMenu();
  // const popular = menu.filter((items) => items.category === "popular");
  const salad = menu.filter((items) => items.category === "salad");
  const dessert = menu.filter((items) => items.category === "dessert");
  const pizza = menu.filter((items) => items.category === "pizza");
  const soup = menu.filter((items) => items.category === "soup");
  const offered = menu.filter((items) => items.category === "offered");
  const drinks = menu.filter((items) => items.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover img={coverimg} title="Our Menu"></Cover>
      {/* main cover */}
      <div className="max-w-screen-xl mx-auto">
        <SectionTitle
          subheading={"Don,T Miss"}
          heading={"today,s offered"}
        ></SectionTitle>
      </div>
      <CategoryMenu items={offered}></CategoryMenu>
      <CategoryMenu
        items={dessert}
        img={desimg}
        title={"dessert"}
      ></CategoryMenu>
      <CategoryMenu items={pizza} img={pizzaimg} title={"pizza"}></CategoryMenu>
      <CategoryMenu items={salad} img={saladimg} title={"salad"}></CategoryMenu>
      <CategoryMenu items={soup} img={soupimg} title={"soup"}></CategoryMenu>
    </div>
  );
};

export default Menu;
