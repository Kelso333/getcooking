import React from 'react';
import {Row, Col} from 'react-materialize';

const Recipe = (props) => {
  return (

    <div className='RecipesPage'>

      <Row className='recipes'>
        <Col s={5} className='apiphoto'>
        <img src={props.recipe.imageUrlsBySize["90"]} />
        </Col>
        
        <Col s={5} className='apirepname'>
            <p>{props.recipe.recipeName}</p>
        </Col>

        <Col s={5} className='apiingred'>
        <p>{props.recipe.ingredients}</p>
        </Col>
      </Row>

    </div>
  );
}

export default Recipe;