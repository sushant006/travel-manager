import React from 'react'

const Stats = ({items}) => {
  if(!items.length)
  return(
<p className="stats">
  <em>Start adding some item to your packing list 🚀</em>
</p>
);
  const numItems = items.length;
  const numPacked = items.filter((item)=>item.packed).length;
  const percentage = Math.round((numPacked/numItems)*100)
  return (
    <footer className='stats'>
        <em>You already have {numItems} items in your list, You have already packed {numPacked} ({percentage}%)</em>
    </footer>
  )
}

export default Stats
