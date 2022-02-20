import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import picture from './JamesBurgess.jpg';
import './landing.css';

const Landing = (props) => {
    return (
        <Container class="bg-black">
            <Row >
                <Col xs={12} md={8} class="bg-black">
                <img src={picture} className='img-fluid shadow-4' />
                </Col>
                <Col xs={6} md={4} class="text-white bg-black" >
                <div className="landing-text">
                    <h1 class="text-white">
                        James Burgess
                    </h1>
                    <h3 class="text-white font-weight-bold">
                        Full-Stack Developer
                    </h3>
                </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Landing;