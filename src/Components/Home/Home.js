import React from 'react';
import img from '../../11_prev_ui.png'
import useProduct from '../Hooks/useProduct';
import ItemReview from '../ItemReview/ItemReview';
import { useNavigate } from "react-router-dom";
const Home = () => {
    const [shirts, setShirt] = useProduct();
    const items = shirts.slice(0, 3);
    let navigate = useNavigate();
    const handelToReview=()=>{
        const path='/review';
        navigate(path)
    }
    return (
        <main>
            <header>
                <div className='flex items-center justify-center pl-4 '>
                    <div className='max-w-screen-sm	'>
                        <h1 className='text-4xl font-bold text-blue-500 uppercase'>Your <span className='text-amber-400'>Favourite Fashion</span>  Shirt</h1>
                        <h1 className='text-4xl font-bold text-lime-600 pt-2 mb-4 uppercase'>You Must Choose Style</h1>
                        <p className='text-2xl mb-4'>Writing product descriptions for your T-shirt dropshipping business can be really annoying.  They’re only a couple of sentences long and seem like they should be really easy to create, but they can have a dramatic effect on your sales.</p>
                        <button className='border-2 border-amber-500 border-solid rounded-lg bg-lime-500 p-2 uppercase text-xl font-bold text-white'>Shop Now</button>
                    </div>
                    <div>
                        <img className='w-full' src={img} alt=''></img>
                    </div>
                </div>
            </header>
            <section>
                <h1 className='text-6xl text-center p-6 uppercase mb-6 font-mono text-lime-600 font-bold'>review of product</h1>
                <div className='grid grid-cols-1 md:grid-cols-3'>
                    {
                        items.map(item => <ItemReview
                            key={item.id}
                            item={item}
                        ></ItemReview>)
                    }
                </div>
                <div className='text-center'>
                    <button onClick={handelToReview} className='border-2 mt-3 mb-3 bg-lime-700 p-4 uppercase rounded-lg text-white text-xl'>go to review</button>
                </div>



            </section>
        </main>



    );
};

export default Home;