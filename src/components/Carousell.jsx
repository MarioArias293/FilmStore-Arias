import { Carousel } from 'react-bootstrap';
import { useState } from 'react';

function ControlledCarousel({ urls = [] }) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel variant="dark" activeIndex={index} onSelect={handleSelect}>
      {urls.map((url, index) => (
        <Carousel.Item key={index}>
          <img className=" w-100" src={url} alt="First slide" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
