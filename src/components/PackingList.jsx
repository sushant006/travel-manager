import React from 'react'
import Item from './Item'
import { useState } from 'react';
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
const PackingList = ({items,onDeleteItem,onToggleItems,onClearList}) => {
  
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            key={item.id}
            onToggleItems={onToggleItems}
          ></Item>
        ))}
      </ul>
      <div className="actions">
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}

export default PackingList
