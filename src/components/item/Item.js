import React from "react";

const Item = (props) => {
  const { item, idx } = props;

  return (
    <tr key={idx}>
      <td className="pl-2">{item.name}</td>
      <td className="text-center">${item.price}</td>
      <td className="text-center">{item.quantity}</td>
      <td className="text-right pr-2">${item.total}</td>
    </tr>
  )
};

export default Item;

