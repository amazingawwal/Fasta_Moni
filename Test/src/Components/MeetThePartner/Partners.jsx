
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import Arrow from '../../Icons/Arrow';

function Partners() {
  return (
    <Carousel
      renderArrowPrev={(onClickHandler, hasPrev) =>
        hasPrev && <CustomArrow direction="left" onClick={onClickHandler} />
      }
      renderArrowNext={(onClickHandler, hasNext) =>
        hasNext && <Arrow direction="right" onClick={onClickHandler} />
      }
    >
      <div>
        <img src="path/to/image1.jpg" alt="Image 1" />
        <p className="legend">Caption for Image 1</p>
      </div>
      <div>
        <img src="path/to/image2.jpg" alt="Image 2" />
        <p className="legend">Caption for Image 2</p>
      </div>
      <div>
        <img src="path/to/image1.jpg" alt="Image 1" />
        <p className="legend">Caption for Image 1</p>
      </div>
      <div>
        <img src="path/to/image2.jpg" alt="Image 2" />
        <p className="legend">Caption for Image 2</p>
      </div>
      <div>
        <img src="path/to/image1.jpg" alt="Image 1" />
        <p className="legend">Caption for Image 1</p>
      </div>
      <div>
        <img src="path/to/image2.jpg" alt="Image 2" />
        <p className="legend">Caption for Image 2</p>
      </div>
      
    </Carousel>
  );
}

export default Partners;
