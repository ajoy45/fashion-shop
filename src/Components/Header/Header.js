import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../download-removebg-preview.png'
import CustomLink from '../CustomLink/CustomLink';
const Header = () => {
    return (
        <div className='flex items-center justify-between bg-teal-300 ' >
            <Link to='/home'>
                <img className='w-24 mb-3 ml-8 hidden md:block' src={img} alt="" />
            </Link>
            <div className='pr-8 flex p-4 bg-teal-300 '>
                <CustomLink className='font-bold text-2xl mr-4 text-white' to="/">Home</CustomLink>
                <CustomLink className='font-bold text-2xl mr-4 text-white' to="/dashboard">Dashboard</CustomLink>
                <CustomLink className='font-bold text-2xl mr-4 text-white' to="/review">Review</CustomLink>
                <CustomLink className='font-bold text-2xl mr-4 text-white' to="/shop">Shop</CustomLink>
                <CustomLink className='font-bold text-2xl mr-4 text-white' to='/about'>About</CustomLink>
                <CustomLink className='font-bold text-2xl mr-4 text-white' to='/contact'>Contact</CustomLink>
            </div>

        </div>
    );
};

export default Header;