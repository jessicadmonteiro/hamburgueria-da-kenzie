import { useState } from "react";
import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Hedear/index.jsx";
import ProductsList from "./components/ProductsList";
import Conteiner from "./styles/container.js";
import GlobalStyle from "./styles/global";
import Cart from "./components/Cart/index.jsx";
import React from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  function addItemToCart({ id, img, name, category, price }) {
    const objectItem = { id, img, name, category, price };

    let arr = cart.find((element) => element.id === objectItem.id);

    if (arr === undefined) {
      setCart([...cart, objectItem])
    } else {
      <ToastContainer />
      toast("🍔 Já possui este item no carrinho!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }

  function removeFromCart(itemId) {
    const filterItem = cart.filter((item) => item.id !== itemId);
    setCart(filterItem);
  }

  function Total(total) {
    const value = total
      .map((item) => item.price)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return value;
  }

  const productsFilter = products.filter(
    (item) =>
      item.name.toLowerCase().startsWith(search.toLowerCase()) ||
      item.category.toLowerCase().startsWith(search.toLowerCase())
  );

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <GlobalStyle />
      <Header search={search} setSearch={setSearch} />
      <Conteiner>
        <ProductsList
          productsFilter={productsFilter}
          setProducts={setProducts}
          search={search}
          addItemToCart={addItemToCart}
          setSearch={setSearch}
        />
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          Total={Total(cart)}
          setCart={setCart}
        />
      </Conteiner>
    </>
  );
}

export default App;
