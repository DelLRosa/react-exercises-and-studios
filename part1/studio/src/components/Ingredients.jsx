import styles from './Ingredients.module.css';

export default function RecipeIngredients(){
    let ingredients = ["3 Leeks", "12oz chicken Thighs", "6oz spring mix", "1.5c sliced strawberries", "1c feta cheese", "1c honey balsamic vinaigrette"]
    return (
        <div>
   <h3>Recipe Ingredients</h3>
   <ul className = {styles.ingredientList}>
      <li>{ingredients[0]}</li>
      <li>{ingredients[1]}</li>
      <li>{ingredients[2]}</li>
      <li>{ingredients[3]}</li>
      <li>{ingredients[4]}</li>
      <li>{ingredients[5]}</li>
   </ul>
</div>
    );
}