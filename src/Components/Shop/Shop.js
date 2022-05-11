import React from 'react';
import useProduct from '../Hooks/useProduct';

const Shop = () => {
    const[shirts,setShirt]=useProduct();
    return (
        <>
        <div className='grid grid-cols-1 md:grid-cols-3 mt-4 gap-y-8 gap-x-8 mr-40'>
        {
               shirts.map(shirt=><div className=' bg-red-700 w-80 ml-40  pl-24 pt-10 '>
                   
                   <img className='w-24  pr-1' src={shirt.product}alt=''></img>
                   <h1 className='text-2xl'>price:${shirt.price}</h1>
                   
                  
               </div>)
           }
        </div>
           
        </>
    );
};

export default Shop;