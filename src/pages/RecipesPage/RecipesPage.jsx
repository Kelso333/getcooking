import React, {Component} from 'react';
import Recipe from '../../components/Recipe/Recipe';
import {Col, ProgressBar, Row} from 'react-materialize';

const RecipesPage = (props) => { 

  return (
    props.user && props.recipe ?
    <div className='RecipesPage'>

      <h1>Recipes</h1>
        <ul>
          {props.recipe.matches.map(r => 
          <Recipe 
            recipe={r} 
            key={r.id} />
          )}
        </ul>    
    </div>
    :
    <div className='loading'>
      <Row>
        <Col s={12}>
          <ProgressBar progress={70}/>
        </Col>
        <Col s={12}>
          <ProgressBar />
        </Col>
      </Row>
    </div>
  ); 
}

export default RecipesPage;