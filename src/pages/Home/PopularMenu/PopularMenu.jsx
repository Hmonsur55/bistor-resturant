import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import ItemsCard from '../../SharePage/PopularItems/ItemsCard';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(
                  (items) => items.category === "popular"
                );
              setMenu(popularItems);
            })
    }, [])
    
    console.log(menu)
    return (
      <section className="max-w-screen-xl mx-auto mb-6">
        <SectionTitle
          subheading={"Check it out"}
          heading={"Popular Menu"}
        ></SectionTitle>
        <div className='grid grid-cols-2 gap-10'>
          {menu.map((item) => (
            <ItemsCard key={item._id} item={item}></ItemsCard>
          ))}
        </div>
      </section>
    );
};

export default PopularMenu