import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchWord, setSearchWord] = useState("rtr")

 function handleSearch (){
setSearchWord(searchWord)
 }
 const newFilteredArray = items.filter((item)=>item).find((item)=>item===searchWord)
console.log(newFilteredArray)

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter 
      onCategoryChange={handleCategoryChange} 
      onTypeSearch={handleSearch} 
      />
      <ul className="Items">
      {/* {itemsToDisplay.map((item) => ( */}
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
