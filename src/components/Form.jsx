import React, { useState } from 'react'

const Form = ({onAddItems}) => {
  const[Description,setDescription] = useState("");
  const[quantity,setQuantity] = useState(1);
 
  
  function handleSubmit(e)
  {
    e.preventDefault();
    if(!Description) return;
     const newItems = { Description, quantity, packed: false, id: Date.now() };
     console.log(newItems);
     onAddItems(newItems)
     setDescription("");
     setQuantity(1);
  }
 
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What you need for this 😎 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <option value={i + 1} key={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="items..."
        value={Description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
}

export default Form
