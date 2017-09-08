import React, { Component } from 'react';
import {Slide, Slider, Carousel} from 'react-materialize';

class GetToKnowUS extends Component {
  render(){
    return(

      <div className='gettoknowus'>
        <h3> Get To Know Us </h3>

          <br />
          <p className='about'>We are here to show you what cooking feels like. We cook to support the energy of humanity; without food we will be ... starving. <br />There's nothing more in life than food. Food is amazing, whether it's breakfast, lunch, or dinner. <br />By signing up with Get Cooking you will get the most updated recipes people provide in order for you to get your week going. <br />You can search through keywords and find the kinds of recipes you're looking for. Always be ready to know what you're going to cook! <br />
        
        <span style={{'fontWeight':'bolder', 'fontSize':20, 'color': 'orange'}}>GET COOKING!</span> </p>

        <div>
          <Slider indicators={false}>
            <Slide
              src='./images/potato_.jpg'>
            </Slide>
          </Slider>
        </div>
      
      </div>

    )
  }

}







export default GetToKnowUS;