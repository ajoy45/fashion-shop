import React from 'react';
import useProduct from '../Hooks/useProduct';
import ShirtDetails from '../ShirtDetails/ShirtDetails';

const Review = () => {
    const [shirts,setShirt]=useProduct()
    // console.log(shirt)
    // useEffect(()=>{
    //     fetch('fackData.json')
    //     .then(res=>res.json())
    //     .then(data=>setShirt(data))
    // },[])
    return (
        <div>
            <h1 className='uppercase pt-4 text-4xl font-bold font-mono text-center text-lime-600'>here is review of product!!</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-5 pl-10 '>
            {
                shirts.map(shirt=><ShirtDetails
                key={shirt.id}
                shirt={shirt}
                ></ShirtDetails>)
            }
            </div>
            
        </div>
    );
};

export default Review;