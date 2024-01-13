import React, { useEffect, useState } from "react";
import ShoppingCart from "./shoppingCart";
import axios from "axios";
import { UilSearch } from "@iconscout/react-unicons";
import { Form } from "react-bootstrap";
const Products = () => {
  const [productData, setProductData] = useState([]);
  const [catData, setCatData] = useState([]);
  const [data, setData] = useState([]);
  const [selectCat, setSelectCat] = useState("Choose Category");

  // all products get
  const getProducts = async () => {
    const data = await axios.get("https://dummyjson.com/products");
    setProductData(data.data.products);
  };
  // all category get
  const getCategory = async () => {
    const data = await axios.get("https://dummyjson.com/products/categories");
    setCatData(data.data);
  };
  // get data according to select
  const chooseCategory = async () => {
    const data = await axios.get(
      `https://dummyjson.com/products/category/${selectCat}`
    );
    setProductData(data.data.products);
  };

  useEffect(() => {
    getCategory();
    getProducts();
  }, []);

  return (
    <>
      <h1 className="mt-10 mb-2 text-center capitalize text-4xl">
        PRODUCT LIST
      </h1>
      <hr className="w-1/5 mx-auto"></hr>

      <div className="flex relative ml-36">
        {/* <Dropdown className="mr-40" >
          <Dropdown.Toggle variant="success" id="dropdown-basic" >
            
            {selectCat}
          </Dropdown.Toggle>

          <Dropdown.Menu  className="h-[16rem] w-[12rem] overflow-auto bg-gray-800 text-white ">
            {
                catData.map((categoryData)=>{
                    return(
                        <Dropdown.Item value={selectCat} onChange={(e)=>setSelectCat(e.target.value)}  className="bg-gray-800 "  href="">{categoryData}</Dropdown.Item>
                    )
                })
            }
          </Dropdown.Menu>
        </Dropdown> */}
        <Form>
          <Form.Label
            className="bg-amber-300 py-1 px-8 rounded-lg "
            for="category"
          >
            Choose a Category
          </Form.Label>
          <Form.Group className="">
            <Form.Select
              id="category"
              value={selectCat}
              onChange={(e) => setSelectCat(e.target.value)}
              // defaultValue="Choose Category"
            >
              {catData.map((item, index) => {
                return (
                  <option key={index} className=" bg-gray-800 text-white ">
                    <option
                      value={item.category_id}
                      onChange={(e) => setSelectCat(e.target.value)}
                    >
                      {item}
                    </option>
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group>
        </Form>
        <UilSearch
          className="mt-11 mr-[30px] -mb-[10px] ml-2 hover:text-green-500"
          onClick={chooseCategory}
        />
      </div>
      <section className="py-4 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
        <div className="row justify-content-center h-fit">
          {productData?.map((item, index) => {
            return (
              <ShoppingCart
                id={item.id}
                images={item.images}
                title={item.title}
                price={item.price}
                description={item.description}
                discountPercentage={item.discountPercentage}
                rating={item.rating}
                brand={item.brand}
                category={item.category}
                thumbnail={item.thumbnail}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Products;
