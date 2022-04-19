import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './aboutMe.css';

const AboutMe = (props) => {
    return (
        <Container class="bg-black" className="AboutMe-Container">
            <Row className="AboutMe-Row">
                <Col xs={6} md={4}  >
                    <h1 class="text-white text-center">
                        About Me
                    </h1>
                </Col>
                <Col xs={12} md={8}>
                    <p class="text-white">
                    People find me to be an upbeat, self-motivated team player with excellent communication skills. For the past several years I have worked as an Assistant Store Manager of Sales in a Best Buy retail store.
                    My experience includes coaching and developing a sales force, setting the example of “world class” customer service and solving complex problems that require immediate resolution. I built a culture of success
                    with my team by creating internal competition creating a track record of maintaining consistent performance results, this is evidenced by performing in the top one percent of the company and winning Best Buy’s “Achievers” contest in 2019.
                    <br/>
                    <br/>
                    Outside of the office, I am usually spending quality time with my wonderful girlfriend Dani and out two pugs, Kitty and Jellybean. Together we love exploring all the beauty Utah has to offer spending time in
                    the mountains, on trails or at the lake. We also have a small business called Honeycomb Acrylics where we make custom abstract acrylic paintings and share the process and pictures to several social media networks.
                    Our most recent hobby that we have fallen in love with is photography, we try to take our camera everywhere and capture the experiences we have. 
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutMe;