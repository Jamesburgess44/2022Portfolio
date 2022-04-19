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
               <h1 className="text-center">Ecommerce design</h1>
               {/* start card one  */}
            <Card className="text-center">
                    <Card.Body>
                    <img alt="" className='project_image' src={CCLeft}/>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <img alt="" class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" /> 
                </Card.Footer>
            </Card>
            {/* end card one  */}
            {/* start card two  */}
            <Card className="text-center">
                    <Card.Body>
                    <img alt="" className='project_image' src={CCCenter}/>
                </Card.Body>
                    <Card.Footer className="text-muted">
                    <a href="https://github.com/Jamesburgess44/CaraCara"><Button className="left-button" variant="dark">Visit Github</Button></a>
                    </Card.Footer>
            </Card>
            {/* end card two  */}
            {/* start card three  */}
            <Card className="text-center">
                    <Card.Body>
                    <img alt="" className='project_image' src={CCRight}/>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <img alt="" class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />    
                </Card.Footer>
            </Card>
            {/* end card three  */}
                </CardGroup>
                <CardGroup className="row">
                <h1 className="text-center">Portfolio Design</h1>
                {/* start card four  */}
            <Card className="text-center">
                    <Card.Body>
                        <img alt="" className='project_image' src={DPLeft}/>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <span>Frontend</span>
                <img  alt="" class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                </Card.Footer>
            </Card>
            {/* end card four  */}
            {/* start card five  */}
            <Card className="text-center">
                    <Card.Body>
                    <img alt="" className='project_image' src={DPCenter}/>
                </Card.Body>
                <Card.Footer className="text-muted">
                <a href="https://github.com/Jamesburgess44/dani_p_react_website"><Button className="left-button" variant="dark">Visit Github</Button> </a>
                </Card.Footer>
            </Card>
            {/* end card five  */}
            {/* start card six  */}
            <Card className="text-center">
                    <Card.Body>
                    <img alt="" className='project_image' src={DPRight}/>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <span>Backend</span>
                <img alt="" class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />   
                </Card.Footer>
            </Card>
            {/* end card six  */}
                </CardGroup>
                <CardGroup className="row">
                <h1 className="text-center">eShop Design</h1>
                {/* start card seven  */}
            <Card className="text-center">
                    <Card.Body>
                        <img alt="" className='project_image' src={CSLeft}/>
                </Card.Body>
                <Card.Footer className="text-muted">
                <span>Frontend</span>
                <img  alt="" class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                </Card.Footer>
            </Card>
            {/* end card seven  */}
            {/* start card eight  */}
            <Card className="text-center">
                    <Card.Body>
                    <img alt="" className='project_image' src={CSCenter}/>
                </Card.Body>
                <Card.Footer className="text-muted">
                <a href="https://github.com/Jamesburgess44/Baseball-Card-Store"><Button className="left-button" variant="dark">Visit Github</Button></a>
                </Card.Footer>
            </Card>
            {/* end card eight  */}
            {/* start card nine  */}
            <Card className="text-center">
                    <Card.Body>
                    <img alt="" className='project_image' src={CSRight}/>
                </Card.Body>
                <Card.Footer className="text-muted">
                <span>Backend</span>
                <img class="logo" alt="" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />    
                </Card.Footer>
            </Card>
            {/* end card nine  */}
                </CardGroup>
           <CardGroup className="row">
               <h1 className="text-center">Terminal/Console Projects</h1>
                {/* start card ten  */}
            <Card className="text-center">
                    <Card.Body>
                    <Card.Title>Most Wanted</Card.Title>
                        <Card.Text>
                        A project that allows for you to search for people by their name or physical attributes using higher order array methods and then display their information. 
                        </Card.Text>
                    <a href="https://github.com/Jamesburgess44/Most-Wanted"><Button className="right-button" variant="dark">Visit Github</Button></a>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <img alt=""  class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                    <img alt="" class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
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
                        <a href="https://github.com/Jamesburgess44/RPSLS"><Button className="left-button" variant="dark">Visit Github</Button></a>
                    <a href="https://github.com/Jamesburgess44/RPSLS-Csharp"><Button className="right-button" variant="dark">Visit Github</Button></a>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <img alt="" class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                    <img alt="" class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
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
                        <a href="https://github.com/Jamesburgess44/RobotsvsDinosaurs"><Button variant="dark">Visit Github</Button></a>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <img alt="" class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />    
                </Card.Footer>
            </Card>
            {/* end card twelve  */}
                </CardGroup>
        </Container>
    );
}

export default Projects;