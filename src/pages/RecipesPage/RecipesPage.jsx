import React, {Component} from 'react';
import Recipe from '../../components/Recipe/Recipe';

const RecipesPage = (props) => { 

    return (
      props.user && props.recipe ?

        <div className='RecipesPage'>
          <h1>Recipes</h1>

          <ul>
            {props.recipe.matches.map(r => 
              <Recipe recipe={r} key={r.id} />
            )}
          </ul>    
        
          <a href='/'>Go Home</a>
        </div>
      :
      <div>
        <h4> Give me a second... </h4>
      </div>
    );
  
}

export default RecipesPage;