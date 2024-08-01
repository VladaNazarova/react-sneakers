import "macro-css";

import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("https://66aa9b5e636a4840d7c8263f.mockapi.io/items")
      .then((res) => res.json())
      .then((json) => setItems(json));
  }, []);

  function onOpen() {
    setIsOpen(!isOpen);
  }

  function onAddToCart(item) {
    setCartItems((prev) => [...prev, item]);
  }

  function onRemoveFromCart(id) {
    setCartItems((prev) => prev.filter((el) => el.id !== id));
  }

  return (
    <div className="wrapper clear">
      {isOpen && (
        <Cart
          onOpen={onOpen}
          cartItems={cartItems}
          onRemoveFromCart={onRemoveFromCart}
        />
      )}
      <Header onOpen={onOpen} />
      <div className="content p-50">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img width={18} height={18} src="/img/search.svg" alt="search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="cards d-flex flex-wrap">
          {items &&
            items.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                name={item.name}
                img={item.img}
                price={item.price}
                onAddToCart={onAddToCart}
                onRemoveFromCart={onRemoveFromCart}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
