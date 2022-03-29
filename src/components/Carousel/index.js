import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import imageSlider from '../../images/image-slider.svg';
import './style.css'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    
    return (      
               
        <Slider {...settings}>
          <div>
              <div className="text-slider">
                <h4 className="sub-slider">Olá, o que você está buscando?</h4>
                <h1 className="title-slider">Criar ou migrar seu e-commerce</h1>                
              </div>            
            <img src={imageSlider} className='image-slider'/>
          </div>

          <div>          
            <img src={imageSlider} className='image-slider'/>
          </div>

          <div>          
            <img src={imageSlider} className='image-slider'/>
          </div>

          <div>                
            <img src={imageSlider} className='image-slider'/>
          </div>
          
        </Slider>
      
    );
  }
}