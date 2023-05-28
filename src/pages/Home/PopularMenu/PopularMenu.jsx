import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import ItemsCard from '../../SharePage/PopularItems/ItemsCard';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter((items) => items.category === "popular");

    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(
    //               (items) => items.category === "popular"
    //             );
    //           setMenu(popularItems);
    //         })
    // }, [])
    
    console.log(menu)
    return (
      <section className="max-w-screen-xl mx-auto mb-6">
        <SectionTitle
          subheading={"Check it out"}
          heading={"Popular Menu"}
        ></SectionTitle>
        <div className='grid md:grid-cols-2 gap-10 sm: px-5'>
          {popular.map((item) => (
            <ItemsCard key={item._id} item={item}></ItemsCard>
          ))}
        </div>
      </section>
    );
};

export default PopularMenu