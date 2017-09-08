import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Slider, Slide, Row, Col, CardPanel} from 'react-materialize';
 

class Home extends Component {
  constructor() {
    super();
  }
  render(){ 
    return(
      <div className='home'>

        <Slider transitions={1000} indicators={false}>
          <Slide
            src='./images/crab-ceviche.jpg' 
            title='Crab Ceviche'>
            Perfect for dinner
          </Slide>
          <Slide
            src='./images/danish-pancake.jpg'
            title='Danish Pancake'>
            Perfect for breakfast
          </Slide>
          <Slide
            src='./images/Coffee-Chocolate-Cinnamon-Pecan-Pie.jpg'
            title='Chocolate Coffee Pecan Pie'>
            Perfect for dessert
          </Slide>
        </Slider>

          <br />
          <br />
          <br />

      <Row>
        <Col s={9} m={3}>
          <CardPanel className='orange accent-3 white-text'>
            <span>EACH DAY YOU CAN VIEW THE TOP 10 BEST RECIPES AVAILABLE FOR THAT DAY; IT CHANGES EVERYDAY!</span>
          </CardPanel>
        </Col>

        <Col s={9} m={3}>
          <CardPanel className='orange accent-3 white-text'>
            <span>DISCOVER RECIPES JUST FOR YOU! JOIN US AND START A LIST OF YOUR FAVORITE RECIPES.</span>
          </CardPanel>
        </Col>

        <Col s={9} m={3}>
          <CardPanel className='orange accent-3 white-text'>
            <span>SAVE AND SHARE YOUR FAVORITE RECIPES. SIGN UP WITH GETCOOKING TO GET STARTED!</span>
          </CardPanel>
        </Col>
	    </Row>

      <img className='homeimages' src='./images/home_images.png' />

    {/*<div className='footer'> 
      <span>&copy; 2015 Copyright. All Rights Reserved.</span>
    </div>*/}

</div>

    )
  }
}


export default Home;