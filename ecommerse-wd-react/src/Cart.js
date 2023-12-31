import React from 'react';

export function Cart({ cartItem }) {
  return (
    <div>
      {cartItem.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </div>
  );
}
