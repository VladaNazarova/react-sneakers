export default function Header({ onOpen }) {
  return (
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
          <button onClick={onOpen}>
            <img width={18} height={18} src="/img/cart.svg" alt="cart" />
          </button>
          <span>100 £</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
}
