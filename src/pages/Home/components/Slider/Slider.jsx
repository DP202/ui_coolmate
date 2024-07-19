import React from 'react';
import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';

import SlideIMG1 from '../../../../asset/img/slide1.jpg';
import SlideIMG2 from '../../../../asset/img/slide2.jpg';

export default function Slider() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem itemId={1}>
        <img  src={SlideIMG1} className='d-block w-100 h-500' alt='Slide 1' />
        <MDBCarouselCaption>

        </MDBCarouselCaption>
      </MDBCarouselItem>

      <MDBCarouselItem itemId={2}>
        <img src={SlideIMG2} className='d-block w-100 h-500' alt='Slide 2' />
        <MDBCarouselCaption>
         
        </MDBCarouselCaption>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
