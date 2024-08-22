import logo from '../navbar/image.png';
import React from "react";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/');
    };

    return (
        <div className="bg-black text-white flex items-center justify-between px-5 py-2 fixed w-full top-0 z-50">
            <button onClick={handleHome}>
                <img src={logo} alt="error" className="h-[100px] w-[100px]" />
            </button>
            <h1 className="m-0 text-[40px] bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-pink-500">
                Indian Institute of Technology Indore
            </h1>
            <div className="flex space-x-2">
                
            </div>
        </div>
    );
}

export default Navbar;
