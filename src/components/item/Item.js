import React, { useState } from "react";

const Item = (props) => {
  const { item, idx } = props;

  return (
    <tr className='cursor-pointer hover:bg-gray-200' key={idx}>
      <td className="pl-2">{item.name}</td>
      <td className="text-center">${item.price}</td>
      <td className="text-center">{item.quantity}</td>
      <td className="text-right pr-2">${item.total}</td>
    </tr>
  )
};

export default Item;

