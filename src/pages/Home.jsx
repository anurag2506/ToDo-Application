import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import React from "react";

const Home = () => {
  const navigate = useNavigate();
  const handleToDoApp = () => {
    navigate('/todo');
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center pt-16">
        <button 
          onClick={handleToDoApp} 
          className="bg-blue-500 border-2 border-white rounded text-white text-lg px-4 py-2 hover:bg-blue-700 transition"
        >
          Your ToDo App
        </button>
      </div>
    </div>
  );
};

export default Home;
