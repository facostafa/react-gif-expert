import { useState } from "react"
import { AddCategory,GifGrid } from "./components/";
export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Naruto']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);

  }
    //3hF3s83D25IBtITdzN2uobqGiZQNQAwA
  return (
    <>
      <h2>GifExpertApp</h2>


      <AddCategory
        onNewCategory={event => onAddCategory(event)}
      />


      {
        categories.map((category) => (
          <GifGrid
            key={category}
            category={category}
          />
        ))
      }


    </>
  )
}