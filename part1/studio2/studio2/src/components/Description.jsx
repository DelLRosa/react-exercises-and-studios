import styles from './Description.module.css';

import React from 'react';

function RecipeAuthor(){
    let authorLink = "https://www.instagram.com/workweeklunch/";
    let authorPhoto = "https://workweeklunch.com/wp-content/uploads/2021/05/Talia-Koren-Workweek-Lunch-1.png";
    let authorName = "Talia Koren";
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Blog name</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render(){
        return (
            <div> 
   <div>
      <h1>Strawberrry Salad</h1>
      <p>A nice salad for springtime!!</p>
   </div>
   <RecipeAuthor />
</div>
        );
    }
}

export default RecipeDescription;