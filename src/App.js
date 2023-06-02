import "./App.css";
import { Header } from "./common/Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Pages } from "./pages/Pages";
import Data from "./components/Data";
import { useState } from "react";
import { Cart } from "./common/Cart/Cart";
import Sdata from "./components/shop/Sdata";
import { Footer } from "./common/Footer/Footer";

function App() {
  
  const { productItems } = Data;
  
  const {shopItems} = Sdata;

  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
  
    const productExit = cartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {

      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };


  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);

    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {

      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };
  return (
    <div className="App">
      <Router>
        <Header cartItem={cartItem} />
        <Routes>
          <Route
            path="/"
            element={
              <Pages productItems={productItems} addToCart={addToCart} shopItems={shopItems}/>
            }
          ></Route>
          <Route
            path="/cart"
            element={<Cart cartItem={cartItem} addToCart={addToCart}  decreaseQty={decreaseQty} />}
          />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
