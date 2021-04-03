import React from "react";
import "./Cart.css";

const Cart = props => {
  const cart = props.cart;
//   console.log("cart player", cart);
  const total = cart.reduce((total, player) => total + Number(player.salary), 0);

  return (
    <div className='cart-container'>
      <h2>World Best 11 Players </h2>
      {cart.map(player => (
        <li>{player.name}</li>
      ))}
      <div>
        <h4>Total Transfer Fee:{total}</h4>
      </div>
    </div>
  );
};

export default Cart;
