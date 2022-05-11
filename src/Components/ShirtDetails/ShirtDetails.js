import React from 'react';

const ShirtDetails = ({shirt}) => {
    const{image,name,comment,ratting}=shirt;
    return (
        <div className='max-w-7xl mx-auto bg-gray-400 mr-3 text-center'>
            <img className='w-24 ml-36 mt-2 pr-1 rounded-full' src={image}alt=''></img>
            <h1 className='text-2xl font-bold text-emerald-700'>{name}</h1>
            <p className='text-xl font-bold text-emerald-700'>Comment:{comment}</p>
            <small className='text-xl'>Ratting:{ratting}</small>
        </div>
    );
};

export default ShirtDetails;