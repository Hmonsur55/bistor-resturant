import featuresimg from "../../../assets/home/featured.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import "../../Home/Features/Features.css";

const Features = () => {
  return (
    <section className="feature-img bg-fixed  my-[60px] pt-12 text-white">
      <div className="max-w-screen-xl mx-auto">
        <SectionTitle
          subheading={"Check it out"}
          heading={"From Our Menu"}
        ></SectionTitle>
        <div className="flex max-sm:flex-col items-center pb-16">
          <div>
            <img src={featuresimg} alt="" />
          </div>
          <div className="ml-8 space-y-2">
            <p>March 20, 2023</p>
            <h3>Where Can I get Some?</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
              esse corporis dignissimos, hic architecto illum similique sequi,
              facere obcaecati dolores doloribus animi porro incidunt a officia
              perspiciatis at blanditiis expedita.
            </p>
            <button className="btn btn-outline border-0 border-b-4">Order Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
