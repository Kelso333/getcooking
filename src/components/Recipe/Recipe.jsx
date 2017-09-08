import React from 'react';
import {Row, Col, CardTitle, Card} from 'react-materialize';

const Recipe = (props) => {
  return (

    <div className='RecipesPage'>

      <Card className='recipe'
        header={
          <CardTitle className='recipe' image={props.recipe.imageUrlsBySize["90"]}>
          <h5 className='apiTitle'>{props.recipe.recipeName}</h5><br />
          </CardTitle>}>
          <p className='apiHeaders'>Ingredients:</p>
          <p className='ingred'>{props.recipe.ingredients}</p>
          <p className='apiHeaders'>Rating:</p>
         <p> {props.recipe.rating}</p>
      </Card>
    </div>
  );
}

export default Recipe;