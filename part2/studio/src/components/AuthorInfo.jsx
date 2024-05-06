import recipedata from "./recipe.json"
import styling from "./styling.css"


function AuthorInfo() {
   const recipeAuthor = recipedata.map((data)=> {
    return (
      <div key = {data.author}>
        {data.author}
      </div>
    )
   });

   const recipeAuthorImage = recipedata.map((data)=>{
    return (
      <div key = {data.authorImage}>
        <img src={data.authorImage} className="authorImage"/>
      </div>
    )
   });

   const recipeWebsite = recipedata.map((data)=> {
    return (
      <div key = {data.website}>
        <a url = {data.website}>{data.website}</a>
      </div>
    )
   })



   return (
    <div>
       {recipeAuthorImage}
       {recipeAuthor}
       {recipeWebsite}
    </div>
 );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 