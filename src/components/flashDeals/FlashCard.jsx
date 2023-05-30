import React, { useState } from 'react';
import Slider from "react-slick";
import Component from './Component';

const SampleNextArrow = (props) =>{
  const {onClick} = props
  return(
    <div className="control-btn" onClick={onClick}>
      <button className='next'>
      <i class="fa-solid fa-circle-right"></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) =>{
  const {onClick} = props
  return(
    <div className="control-btn" onClick={onClick}>
      <button className='prev'>
      <i class="fa-solid fa-circle-left"></i>
      </button>
    </div>
  )
}
export const FlashCard = ({ productItems, addToCart }) => {
 
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <Slider {...settings}>
        {productItems.map((productItems) => {
          return (
            <div className='box'>
              <div className='product mtop'>
                <div className='img'>
                  <span className='discount'>{productItems.discount}% Off</span>
                  <img src={productItems.cover} alt='' />
                  <Component/>
                </div>
                <div className='product-details'>
                  <h3>{productItems.name}</h3>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                  <div className='price'>
                    <h4>${productItems.price}.00 </h4>
                    {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                    <button onClick={() => addToCart(productItems)}>
                      <i className='fa fa-plus'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Slider>
    </>
  )
};
