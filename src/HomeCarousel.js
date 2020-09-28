import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import ldLogo from './ld-carousel.png';
import nexusLogo from './nexus-carousel.png';

const HomeCarousel = () => {

    const [index, setIndex] = React.useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={nexusLogo}
            alt="Nexus Slide"
          />
          <Carousel.Caption style={ { 'color': 'black' }}>
            <h1>UPLOADER FOR NEXUS</h1>
            <h4>BY LINUX - DEVOPS TEAM</h4>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ldLogo}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>LINUX - DEVOPS TEAM</h1>
            <h4>check out our Confluence space at:</h4>
            <p>https://confluence.app.iaf</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
}

export default HomeCarousel;