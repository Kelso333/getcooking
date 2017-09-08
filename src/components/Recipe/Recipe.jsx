import React from 'react';
import {Row, Col, CardTitle, Card} from 'react-materialize';

const Recipe = (props) => {
  return (

    <div className='RecipesPage'>

      <Card className='recipe'
        header={
          <CardTitle className='recipe' image={props.recipe.imageUrlsBySize["90"]}>
          <h5>{props.recipe.recipeName}</h5><br />
          </CardTitle>}>
          <p className='apiTitle'>Ingredients:</p>
          <p className='ingred'>{props.recipe.ingredients}</p>

          <p className='apiTitle'>Rating:</p>
         <p> {props.recipe.rating}</p>
      </Card>


    </div>
  );
}

export default Recipe;