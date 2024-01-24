import React, { useState } from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(true);

  function handleATCClick() {
    setIsInCart((isInCart) => isInCart = !isInCart)
  };

  const appClass = isInCart ? "Add to Cart" : "in-cart";

  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleATCClick} className="add">{appClass}</button>
    </li>
  );
}

export default Item;
