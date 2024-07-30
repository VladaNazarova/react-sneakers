import "macro-css";

function App() {
  return (
    <div className="wrapper clear">
      <div style={{ display: "none" }} className="overlay">
        <div className="drawer d-flex flex-column">
          <h2 className="d-flex align-center justify-between pb-20">
            Bag
            <button className="close-btn">
              <img src="/img/delete.svg" alt="remove" />
            </button>
          </h2>
          <div className="cart-items">
            <div className="cart-item d-flex align-center justify-between mb-20">
              <img
                width={70}
                height={70}
                className="ml-10 mr-15"
                src="/img/sneakers/1.jpg"
                alt="sneakers"
              />
              <div className="mr-20">
                <p className="mt-5 mb-5">Nike Blazer Mid Suede</p>
                <b>199 £</b>
              </div>
              <button className="close-btn">
                <img src="/img/delete.svg" alt="remove" />
              </button>
            </div>
            <div className="cart-item d-flex align-center justify-between mb-20">
              <img
                width={70}
                height={70}
                className="ml-10 mr-15"
                src="/img/sneakers/1.jpg"
                alt="sneakers"
              />
              <div className="mr-20">
                <p className="mt-5 mb-5">Nike Blazer Mid Suede</p>
                <b>199 £</b>
              </div>
              <button className="close-btn">
                <img src="/img/delete.svg" alt="remove" />
              </button>
            </div>
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

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.svg" alt="logo" />
          <div className="header-info">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">#1 sneakers store</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" alt="cart" />
            <span>100 £</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="user" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img width={18} height={18} src="/img/search.svg" alt="search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex">
          <div className="card">
            <div className="favoutite">
              <button className="favourite-button">
                <img src="/img/heart.svg" alt="add to favourites" />
              </button>
            </div>
            <img
              width={133}
              height={112}
              src="/img/sneakers/1.jpg"
              alt="sneakers"
            />
            <h5>Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price: </span>
                <b>199 £</b>
              </div>
              <button className="button">
                <img src="/img/add.svg" alt="add" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favoutite">
              <button className="favourite-button">
                <img src="/img/heart.svg" alt="add to favourites" />
              </button>
            </div>
            <img
              width={133}
              height={112}
              src="/img/sneakers/2.jpg"
              alt="sneakers"
            />
            <h5>Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price: </span>
                <b>199 £</b>
              </div>
              <button className="button">
                <img src="/img/add.svg" alt="add" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favoutite">
              <button className="favourite-button">
                <img src="/img/heart.svg" alt="add to favourites" />
              </button>
            </div>
            <img
              width={133}
              height={112}
              src="/img/sneakers/3.jpg"
              alt="sneakers"
            />
            <h5>Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price: </span>
                <b>199 £</b>
              </div>
              <button className="button">
                <img src="/img/add.svg" alt="add" />
              </button>
            </div>
          </div>
          <div className="card">
            <div className="favoutite">
              <button className="favourite-button">
                <img src="/img/heart.svg" alt="add to favourites" />
              </button>
            </div>
            <img
              width={133}
              height={112}
              src="/img/sneakers/4.jpg"
              alt="sneakers"
            />
            <h5>Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Price: </span>
                <b>199 £</b>
              </div>
              <button className="button">
                <img src="/img/add.svg" alt="add" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
