import './projects.css'
import { Container, Card, CardGroup, Button } from 'react-bootstrap';
import CCCenter from './CaraCaraCenter.jpg'
import CCLeft from './CaraCaraLeft.png'
import CCRight from './CaraCaraRight.png'
import DPLeft from './DaniPortfolioLeft.png'
import DPRight from './DaniPortfolioRight.png'
import DPCenter from './DaniPortfolioCenter.png'
import CSLeft from './CardShopLeft.png'
import CSRight from './CardShopRight.png'
import CSCenter from './CardShopCenter.png'




const Projects = (props) => {
    return (
        <Container class="bg-black">
           <CardGroup className="row">
               {/* start card one  */}
            <Card className="text-center">
                    <Card.Body>
                    <img className='project_image' src={CCLeft}/>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <img  class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                    <img class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                </Card.Footer>
            </Card>
            {/* end card one  */}
            {/* start card two  */}
            <Card className="text-center">
                    <Card.Body>
                    <img className='project_image' src={CCCenter}/>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <img class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                    <img class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
                </Card.Footer>
            </Card>
            {/* end card two  */}
            {/* start card three  */}
            <Card className="text-center">
                    <Card.Body>
                    <img className='project_image' src={CCRight}/>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <img class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />    
                </Card.Footer>
            </Card>
            {/* end card three  */}
                </CardGroup>
                <CardGroup className="row">
                {/* start card four  */}
            <Card className="text-center">
                    <Card.Body>
                        <img className='project_image' src={DPLeft}/>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <img class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                    <img class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
                </Card.Footer>
            </Card>
            {/* end card four  */}
            {/* start card five  */}
            <Card className="text-center">
                    <Card.Body>
                    <img className='project_image' src={DPCenter}/>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <img class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                </Card.Footer>
            </Card>
            {/* end card five  */}
            {/* start card six  */}
            <Card className="text-center">
                    <Card.Body>
                    <img className='project_image' src={DPRight}/>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <img class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />    
                </Card.Footer>
            </Card>
            {/* end card six  */}
                </CardGroup>
                <CardGroup className="row">
                {/* start card seven  */}
            <Card className="text-center">
                    <Card.Body>
                        <img className='project_image' src={CSLeft}/>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <img class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                </Card.Footer>
            </Card>
            {/* end card seven  */}
            {/* start card eight  */}
            <Card className="text-center">
                    <Card.Body>
                    <img className='project_image' src={CSCenter}/>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <img class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                </Card.Footer>
            </Card>
            {/* end card eight  */}
            {/* start card nine  */}
            <Card className="text-center">
                    <Card.Body>
                    <img className='project_image' src={CSRight}/>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <img class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />    
                </Card.Footer>
            </Card>
            {/* end card nine  */}
                </CardGroup>
           <CardGroup className="row">
                {/* start card ten  */}
            <Card className="text-center">
                    <Card.Body>
                    <Card.Title>Day Trip Generator</Card.Title>
                        <Card.Text>
                        The Day Trip Generator will allow a user to have a random trip generated for them, making it less of a hassle to come up with trip ideas for the day!
                        </Card.Text>
                    <Button className="left-button" variant="dark">Visit Github</Button>
                    <Button className="right-button" variant="dark">Visit Github</Button>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <img  class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                    <img class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                </Card.Footer>
            </Card>
            {/* end card ten  */}
            {/* start card eleven  */}
            <Card className="text-center">
                    <Card.Body>
                    <Card.Title>Rock Paper Sciccor Lizard Spock</Card.Title>
                        <Card.Text>
                        Using the concepts of OOP by creating classes and using objects (instances of those classes) to interact with each other, create a console version of the classic game Rock Paper Scissors Lizard Spock.
                        </Card.Text>
                        <Button className="left-button" variant="dark">Visit Github</Button>
                    <Button className="right-button" variant="dark">Visit Github</Button>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <img class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                    <img class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
                </Card.Footer>
            </Card>
            {/* end card eleven  */}
            {/* start card twelve  */}
            <Card className="text-center">
                    <Card.Body>
                    <Card.Title>Robots VS Dinosaurs</Card.Title>
                        <Card.Text>
                        With Object Oriented Programming, creating instances (objects) from those classes, and having those objects interact with each other.
                        </Card.Text>
                        <Button variant="dark">Visit Github</Button>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <img class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />    
                </Card.Footer>
            </Card>
            {/* end card twelve  */}
                </CardGroup>
        </Container>
    );
}

export default Projects;