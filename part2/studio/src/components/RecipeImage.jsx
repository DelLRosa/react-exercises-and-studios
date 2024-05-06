import recipedata from "./recipe.json"

function RecipeImage() {
let recipeImage= recipedata.map((data) => (
  <div key= {data.recipeImage}>
    <img src={data.recipeImage} className="recipeImage" />
  </div>
));

   return (
    <div>{recipeImage}</div>
   );
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 