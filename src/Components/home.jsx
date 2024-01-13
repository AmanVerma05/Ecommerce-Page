import React, { useEffect, useState } from "react";
import imageShopping from "../../src/images/black-friday-elements-assortment.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="relative ">
        <div className="absolute p-5 ">
          <h1 className="  font-extrabold font-serif lg:text-7xl hover:text-red-700">
            BIG SALE !!
          </h1>
          <h1 className="  font-extrabold font-serif lg:text-7xl text-white hover:text-lime-500">
            BIG SALE !!
          </h1>
          <div className="p-5">
            <h2 className="font-serif lg:text-2xl font-bold text-orange-950 tracking-widest      ">
              Don't Miss The Deal!
            </h2>
            <h1 className="font-serif lg:text-6xl text-blue-800 font-semibold ">
              <i>ITS TIME TO</i>
            </h1>
            <h1 className="font-serif lg:text-7xl font-semibold ">
              <i>
                <b>SAVE MORE</b>
              </i>
            </h1>
          </div>
          <Link to="/products">
            <button className="rounded-xl font-serif font-bold hover:bg-green-500 lg:text-2xl text-white py-2 px-5  bg-amber-700">
              EXPLORE
            </button>
          </Link>
        </div>

        <img className="w-full h-[40rem] mt-0" src={imageShopping} />
      </div>
    </>
  );
};

export default Home;
