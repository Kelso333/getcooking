import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Collapsible, Icon, CollapsibleItem, Slider, Slide, Carousel} from 'react-materialize';

class GetInTouch extends Component {
  render() {
    return (

      <div className='getintouch'>
        <h3>Get In Touch</h3>

        <br />

           <div>
        <Slider indicators={false}>
          <Slide
            src='./images/recipe_image.jpg'>
        </Slide>
        </Slider>
      </div>

    
      <br />
        <Collapsible popout defaultActiveKey={3}>
          <CollapsibleItem header='Address'>
            123 San Pedro Ave,
            Los Angeles, CA 90012
          </CollapsibleItem>
          <CollapsibleItem header='Phone Number'>
            (818) 549-2375
          </CollapsibleItem>
          <CollapsibleItem header='Email'>
            <Link to='/'>info@GetCooking.com</Link>
          </CollapsibleItem>

        </Collapsible>

      </div>

    )
  }
}


export default GetInTouch;