import "macro-css";
import axios from "axios";

import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios
      .get("https://66aa9b5e636a4840d7c8263f.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });

    axios
      .get("https://66aa9b5e636a4840d7c8263f.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  function onOpen() {
    setIsOpen(!isOpen);
  }

  function onAddToCart(item) {
    axios
      .post("https://66aa9b5e636a4840d7c8263f.mockapi.io/cart", item)
      .then((res) => {
        console.log(res.data);
        setCartItems((prev) => [...prev, res.data]);
      });
  }

  function onRemoveFromCart(id) {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      axios.delete(
        `https://66aa9b5e636a4840d7c8263f.mockapi.io/cart/${item.prodID}`,
      );
      setCartItems((prev) => prev.filter((el) => el.id !== id));
    }
  }

  function onChangeSearchInput(event) {
    setSearchValue(event.target.value);
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
          <h1>
            {searchValue
              ? `Your search results for "${searchValue}"`
              : "All sneakers"}
          </h1>
          <div className="search-block d-flex">
            <img width={18} height={18} src="/img/search.svg" alt="search" />
            <input
              onChange={onChangeSearchInput}
              value={searchValue}
              placeholder="Search..."
            />
            {searchValue && (
              <button onClick={() => setSearchValue("")} className="close-btn">
                <img
                  width={20}
                  height={20}
                  src="/img/delete.svg"
                  alt="remove"
                />
              </button>
            )}
          </div>
        </div>
        <div className="cards d-flex flex-wrap">
          {items &&
            items
              .filter((item) => item.name.toLowerCase().includes(searchValue))
              .map((item) => (
                <Card
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  img={item.img}
                  price={item.price}
                  cartItems={cartItems}
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
