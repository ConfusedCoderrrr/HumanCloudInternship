import Carousel from 'react-bootstrap/Carousel';
import img1 from '../src/images/img1.jpg';
import img2 from '../src/images/img21.jpg';
import img3 from '../src/images/img31.jpg';
import './Carousel.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function CarouselFade() {
    return (
        <div className="carousel-container">
        <Carousel fade className='carousel_fe'>
          <Carousel.Item>
            <img
              src={img1}
              className='d-block w-100 img-fluid'
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={img2}
              className='d-block w-100 img-fluid'
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={img3}
              className='d-block w-100 img-fluid'
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>


    );
}

export default CarouselFade;