import Carousel from 'react-bootstrap/Carousel';

//importacion de nuevas imagenes
import carrousel1 from '../assets/img/carrousel1.webp'
import carrousel2 from '../assets/img/carrousel2.webp'
import carrousel3 from '../assets/img/carrousel3.webp'
import carrousel4 from '../assets/img/carrousel4.webp'
import carrousel5 from '../assets/img/carrousel5.webp'
import carrousel6 from '../assets/img/carrousel6.webp'

function Carrousel() {
    return (
        <Carousel fade className='container mt-3'>
            <Carousel.Item>
                <img className='img-fluid mx-auto d-block' src={carrousel1} alt='una imagen' style={{ width: '1000px' }} />
                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='img-fluid mx-auto d-block' src={carrousel2 } alt='una imagen' text="Second slide" style={{ width: '1000px' }} />
                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='img-fluid mx-auto d-block' src={carrousel3} alt='una imagen' text="Third slide" style={{ width: '1000px' }} />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='img-fluid mx-auto d-block' src={carrousel4} alt='una imagen' style={{ width: '1000px' }} />
                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='img-fluid mx-auto d-block' src={carrousel5} alt='una imagen' style={{ width: '1000px' }} />
                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className='img-fluid mx-auto d-block' src={carrousel6} alt='una imagen' style={{ width: '1000px' }} />
                <Carousel.Caption>
                    
                </Carousel.Caption>
            </Carousel.Item>
           
        </Carousel>
    );
}

export default Carrousel;