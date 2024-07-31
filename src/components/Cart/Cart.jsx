export default function Cart({ onOpen, cartItems }) {
  return (
    <div className="overlay">
      <div className="drawer d-flex flex-column">
        <h2 className="d-flex align-center justify-between pb-20">
          Bag
          <button className="close-btn" onClick={onOpen}>
            <img src="/img/delete.svg" alt="remove" />
          </button>
        </h2>
        <div className="cart-items">
          {cartItems &&
            cartItems.map((item) => (
              <div
                key={item.id}
                className="cart-item d-flex align-center justify-between mb-20"
              >
                <img
                  width={70}
                  height={70}
                  className="ml-10 mr-15"
                  src={item.img}
                  alt={item.name}
                />
                <div className="mr-20">
                  <p className="mt-5 mb-5">{item.name}</p>
                  <b>{item.price} £</b>
                </div>
                <button className="close-btn">
                  <img src="/img/delete.svg" alt="remove" />
                </button>
              </div>
            ))}
        </div>
        <ul className="total-block">
          <li className="d-flex">
            <span>Total:</span>
            <div></div>
            <b>1000 £</b>
          </li>
          <li className="d-flex">
            <span>VAT:</span>
            <div></div>
            <b>200 £</b>
          </li>
        </ul>
        <button className="checkout-button d-flex justify-center align-center">
          <span>Checkout</span>
          <img src="/img/arrow.svg" alt="arrow" />
        </button>
      </div>
    </div>
  );
}
