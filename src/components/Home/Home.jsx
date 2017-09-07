import React, { Component } from 'react';
import {Slider, Slide, Footer, Row, Col, CardPanel} from 'react-materialize';
 

class Home extends Component {
  constructor() {
    super();
  }
  
  componentDidMount() {
    // this.initSlider();
  }

  render(){
    
    return(

      <div className='home'>
      <Slider>
        <Slide
          src='./images/crab-ceviche.jpg' 
          title='Crab Ceviche'>
          Perfect for dinner
        </Slide>
        <Slide
          src='./images/danish-pancake.jpg'
          title='Danish Pancake'>
          Perfect for dessert
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
            <span>2,000,000+ RECIPES AGGREGATED FROM THE BEST RECIPE SOURCES AVAILABLE.</span>
          </CardPanel>
        </Col>

        <Col s={9} m={3}>
          <CardPanel className='orange accent-3 white-text'>
            <span>2,000,000+ RECIPES AGGREGATED FROM THE BEST RECIPE SOURCES AVAILABLE.</span>
          </CardPanel>
        </Col>

        <Col s={9} m={3}>
          <CardPanel className='orange accent-3 white-text'>
            <span>2,000,000+ RECIPES AGGREGATED FROM THE BEST RECIPE SOURCES AVAILABLE.</span>
          </CardPanel>
        </Col>
        
	    </Row>

</div>

    )
  }
}


export default Home;