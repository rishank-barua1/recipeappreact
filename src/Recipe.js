import React from "react";
const Recipe = ({title,calories,img,ingredients})=>{
    return(
        <div className="RecipeCard">
            <h1>{title}</h1>
            <img src={img}/>
            <h3>Calories: {calories}</h3>
            <h4>Ingredients</h4>
            <ol>
                {ingredients.map(ingredient=>(
                    <li key={ingredient.text}>{ingredient.text}</li>
                ))}
            </ol>
            
        </div>
    );
}

export default Recipe;