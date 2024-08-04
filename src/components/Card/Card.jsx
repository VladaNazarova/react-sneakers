import { useEffect, useState } from "react";
import styles from "./Card.module.scss";

export default function Card({
  id,
  name,
  img,
  price,
  cartItems,
  onAddToCart,
  onRemoveFromCart,
}) {
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const isItemInCart = cartItems.some((item) => item.id === id);
    setIsAdded(isItemInCart);
  }, [cartItems, id]);

  function onAdd() {
    if (isAdded) {
      onRemoveFromCart(id);
    } else {
      onAddToCart({ id, name, img, price });
    }

    setIsAdded(!isAdded);
  }

  return (
    <div className={styles.card}>
      <div>
        <button>
          <img src="/img/heart.svg" alt="add to favourites" />
        </button>
      </div>
      <img width={133} height={112} src={img} alt={name} />
      <h5>{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price: </span>
          <b>{price} £</b>
        </div>
        <button onClick={onAdd} className="button">
          {isAdded ? (
            <img src="/img/check.svg" alt="Added" />
          ) : (
            <img src="/img/add.svg" alt="Add" />
          )}
        </button>
      </div>
    </div>
  );
}
