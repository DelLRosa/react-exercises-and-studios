import recipedata from "./recipe.json"

function IngredientList() {
  const ingredientList = recipedata.map((data) => {
    return (
      <div>
        <h3>Ingredients</h3>
        <ul>
          {data.ingredients.map((item,index) => {
            return (<li key = {index}> {item} </li>)
          })}
        </ul>

      </div>

    )

  });

   return ingredientList
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 