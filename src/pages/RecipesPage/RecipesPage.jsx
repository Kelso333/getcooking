import React, {Component} from 'react';

const RecipesPage = (props) => { 

    return (
      props.user && props.recipe ?

        <div className='RecipesPage'>
          <h1>Recipes</h1>

          <ul>
            {props.recipe.matches.map(food => {
              return(

              <div>  
              <li key={food.id}>
                {food.recipeName}
              </li>
              <li key={food.id}>
                {food.ingredients}
              </li>
              </div>
              )
            })}
          </ul>    
          
          <a href='/'>Go Home</a>
        </div>
      :
      <div>
        <h1> Where it at </h1>
      </div>
    );
  
}

export default RecipesPage;