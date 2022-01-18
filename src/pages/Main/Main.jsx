import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProductItems from "../ProductItems/ProductItems";
import ScrollToTop from "../../ScrollToTop/ScrollToTop";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import OverlayContainer from "../Overlay/Overlay.jsx";
import { MainContainer } from "./Main-styles";
import Detail from "../Detail/Detail";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [menuClicked, setMenuClicked] = useState(false);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  const handleMenuClicked = () => {
    setMenuClicked(() => !menuClicked);
  };
  return (
    <>
      {menuClicked ? (
        <OverlayContainer
          handleMenuClicked={handleMenuClicked}
          menuClicked={menuClicked}
        />
      ) : (
        <MainContainer>
          <Navbar handleMenuClicked={handleMenuClicked} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/products"
              element={
                <ProductItems
                  products={products}
                  handleMenuClicked={handleMenuClicked}
                />
              }
            />
            <Route
              path="/products/:id"
              element={<Detail products={products} />}
            />
            <Route
              path="/shopping-cart"
              element={<ShoppingCart />}
              handleMenuClicked={handleMenuClicked}
            />
          </Routes>
          <ScrollToTop />
        </MainContainer>
      )}
    </>
  );
};

export default Main;
