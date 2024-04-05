import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';

let data = [
  {
    img: window.location.origin + '/portfoliyo.png',
    disc: "This My portfoliyo",
    link: "http://deepsinh231.netlify.app/"
  },
  {
    img: window.location.origin + '/gameapp.png',
    disc: "My Geme Webside",
    link: "https://games-pubg.netlify.app/"
  },
  {
    img: window.location.origin + '/exp_apiandhu.png',
    disc: "My React Project , API, HOOKS And Some Example",
    link: "https://examples-reactjs.netlify.app"
  },
  {
    img: window.location.origin + '/covid.png',
    disc: "Covide 19 webpage",
    link: "https://covid-19-webpage.netlify.app/"
  },
  {
    img: window.location.origin + '/Redux.png',
    disc: "React Redux Cart Add Data And Remove Data Sum Of Price",
    link: "https://carts-add.netlify.app/"
  },
  {
    img: window.location.origin + '/contect.png',
    disc: "React Redux contect Add Data And Remove Local Data save in",
    link: "https://redux-contacts.netlify.app/"
  },
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false
      }
    }
  ]
};
const SliderComp = () => {
  let sliderProject = "";
  sliderProject = data.map((item, i) => (
    <Project item={item} key={i} />
  ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button
          onClick={() => arrowRef.current.slickPrev()}
          className='back'><IoIosArrowBack /></button>
        <button
          onClick={() => arrowRef.current.slickNext()}
          className='next'><IoIosArrowForward /></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`