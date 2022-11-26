import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;

  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }

  .slick-prev {
    left: -40px;
    transition: scale 0.3s;
  }
  .slick-prev:hover {
    scale: 1.2;
  }

  .slick-next {
    right: -40px;
    transition: scale 0.3s ease;
  }
  .slick-next:hover {
    scale: 1.2;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;


const Slider = ({ children }) => (
  <Container>
    <SlickSlider className='fade' {...{
      dots: false,
      infinite: true,
      speed: 500,
      variableWidth: true,
      adaptiveHeight: true,
    }}
    >
      {children}
    </SlickSlider>

  </Container>
);

export default Slider; 