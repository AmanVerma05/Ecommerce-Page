import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [catData, setCatData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCat, setIsOpenCat] = useState(false);
  const [newCat, setNewCat] = useState("smartphones")
  const [selectCat, setSelectCat] = useState(newCat)

  const getCategory = async () => {
    const data = await axios.get("https://dummyjson.com/products/categories");
    setCatData(data.data);
  };
  const selectCategory = async () => {
    const data = await axios.get(`https://dummyjson.com/products/category/${newCat}`);
    setSelectCat(data.data.products);
  };

  useEffect(() => {
    getCategory()
    selectCategory()
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleNavbars = () => {
    setIsOpenCat(!isOpenCat);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };
// useEffect(()=>{
//     if(isOpen==false)
//     setIsOpenCat(false)
// })
  return (
    <nav className="bg-gray-800 p-4 top-0 sticky z-20">
      <div className="container mx-auto flex items-center gap-40">
        <div className="text-white font-bold text-xl">BrickFolio Ecommerce</div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleNavbar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden lg:flex left-0 space-x-28">
        <Link to="/" className="text-white hover:bg-cyan-400 px-5 py-1 rounded-lg">
                Home
          </Link>

          <div className="relative group mt-1">
            <Link
              className="text-white  hover:bg-cyan-400 px-5 py-1 rounded-lg"
              //   onMouseEnter={toggleNavbars}
              onClick={toggleNavbars}
              //   onMouseLeave={closeNavbar}
            >
              Category
            </Link>
            {isOpenCat && (
              <div className="absolute h-[16rem] w-[12rem] left-0 mt-3 space-y-4 bg-gray-800 text-white p-2 rounded-md overflow-auto z-10">
                {catData.map((categoryData) => {
                  return (
                    <>
                      <span
                        href="#"
                        className="block cursor-pointer hover:bg-white hover:text-black px-4 py-0"
                        onClick={(e)=>setNewCat(e.target.value)}
                      >
                        {categoryData}
                      </span>
                    </>
                  );
                })}
              </div>
            )}
          </div>
          <Link to="/products" className="text-white hover:bg-cyan-400 px-5 py-1 rounded-lg">
                Products
          </Link>
          
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-gray-800">
            <div className="flex flex-col space-y-4 p-4">
              <Link to="/" className="text-white hover:bg-cyan-400 px-5 py-1 rounded-lg">
                Home
          </Link>
              <div className="relative group">
              <Link
              className="text-white  hover:bg-cyan-400 px-5 py-1 rounded-lg"
              //   onMouseEnter={toggleNavbars}
              onClick={toggleNavbars}
              //   onMouseLeave={closeNavbar}
            >
              Category
            </Link>
                {isOpenCat && (
                  <div className="absolute h-[10rem] w-full left-0 mt-3 space-y-4 bg-gray-800 text-white p-2 rounded-md overflow-auto">
                    {catData.map((categoryData) => {
                      return (
                        <>
                          <span
                            
                            href="#"
                            className="block hover:bg-white hover:text-black px-4 py-0"
                          >
                            {categoryData}
                          </span>
                        </>
                      );
                    })}
                  </div>
                )}
              </div>
              <Link to="/products" className="text-white hover:bg-cyan-400 px-5 py-1 rounded-lg">
                Products
          </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
