import React from 'react';

const Recipe = (props) => {
  return (
    <li>
      <p>{props.recipe.recipeName}</p>
      <p>{props.recipe.ingredients}</p>
      <p>{props.recipe.recipeName}</p>
      <img src={props.recipe.imageUrlsBySize["90"]} />
    </li>
  );
}

export default Recipe;