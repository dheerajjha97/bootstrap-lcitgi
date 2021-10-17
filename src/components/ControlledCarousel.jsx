import React ,{useState} from 'react';

import {Carousel, Image}from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const ControlledCarousel=()=> {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="https://lcit.edu.in//assets/banner/0fccc37ecc3d86ad057c9787187cee47.jpg" fluid 
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="https://lcit.edu.in//assets/banner/9c3c6230e2e73925a3958831d7e3b51d.jpg" fluid
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src="https://lcit.edu.in//assets/banner/7caf9809b32bed08fc735ec5394d5d72.jpg" alt="Third slide" fluid 
        />
      </Carousel.Item>
      <Carousel.Item>
    <Image
      className="d-block w-100"
      src="https://lcit.edu.in//assets/banner/daeb13d18b9eee38dcc7607b53ff34e1.jpg"
      alt="Fourth slide" fluid 
    />
  </Carousel.Item>

    </Carousel>
  );
}

export default  ControlledCarousel ;