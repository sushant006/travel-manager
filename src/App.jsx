import React from 'react'
import Logo from './components/Logo'
import Form from './components/Form'
import PackingList from './components/PackingList'
import Stats from './components/Stats'
import { useState } from 'react'
const App = () => {
   const [Items, setItems] = useState([]);
  //  const numItems = Items.length();
   function handleAddItem(item) {
     setItems((Items) => [...Items, item]);
   }
   function handleDeleteItem(id){
    setItems(Items=>(Items.filter(item => item.id!==id)))
   }
   function handleToggleItems(id){
    setItems((Items)=>Items.map((item)=>item.id === id?{...item, packed: !item.packed}:item))
   }
   function handleClearList(){
    const confirmed = window.confirm('Are you sure you want to clear the list')
    if(confirmed) setItems([]);
   }
  return (
    <div className="app">
      <Logo></Logo>
      <Form onAddItems={handleAddItem}></Form>
      <PackingList items={Items} onDeleteItem={handleDeleteItem} onToggleItems  = {handleToggleItems} onClearList = {handleClearList}></PackingList>
      <Stats items = {Items}></Stats>
    </div>
  );
}

export default App

