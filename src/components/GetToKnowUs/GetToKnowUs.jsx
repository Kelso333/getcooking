import React, { Component } from 'react';
import {Slide, Slider, Carousel} from 'react-materialize';


class GetToKnowUS extends Component {
  render(){
    return(

      <div className='gettoknowus-container'>
      <h3> Get To Know Us </h3>

        <p className='about'>We are here to show you what cooking feels like. We cook to support the energy of humanity; without food we will be ... starving. There's nothing more in life than food. Food is amazing, whether it's breakfast, lunch, or dinner. By signing up with Get Cooking you will get the most updated recipes people provide in order for you to get your week going. You can search through keywords and find the kinds of recipes you're looking for. Always be ready to know what you're going to cook! <br />
        
        <span style={{'font-weight':'bolder', 'font-size':'20', 'color': 'orange'}}>GET COOKING!</span> </p>

     <Carousel options={{ fullWidth: true }} images={[
      './images/potato_.jpg',
      ]} />

      

      </div>

    )
  }

}







export default GetToKnowUS;