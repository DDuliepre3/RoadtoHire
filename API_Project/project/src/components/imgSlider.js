import React, { Component } from "react";
import Slider from "react-slick";
import '../assets/scss/_slider.scss';

export default class SimpleSlider extends Component {
    SampleNextArrow = (props) => {
        const {style} = props;
        return (
            <div
                style={{...style, display: 'none'}}
            />
        );
    }
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 700,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            nextArrow: <this.SampleNextArrow />
        };
    return (
      <div>
        <Slider {...settings}>
        <div className="slider__img">
            <div className="slider__text">
                <h1 className="slider--header">Glorious Gamers</h1>
                <p>For Those Who GAME...</p>
            </div>
            <img src="https://ak5.picdn.net/shutterstock/videos/31245325/thumb/1.jpg" alt="Silver"/>
        </div>
        <div className="slider__img">
            <img src="https://i.ytimg.com/vi/fL5fEel7k6s/maxresdefault.jpg" alt="PS4 Slim"/>
        </div>
        <div className="slider__img">
            <img src="https://i.ytimg.com/vi/XuTwtOo88r8/maxresdefault.jpg" alt="Xbox One S"/>
        </div>
        <div className="slider__img">
            <img src="https://static.gamespot.com/uploads/original/1578/15787979/3418518-6925348107-32015.jpg" alt="Nintendo Switch"/>
        </div>
        </Slider>
      </div>
    );
  }
}