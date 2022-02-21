import './projects.css'
import { Container, Card, CardGroup, Button } from 'react-bootstrap';


const Projects = (props) => {
    return (
        <Container class="bg-black">
           <CardGroup className="row">
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
                </CardGroup>
                <CardGroup className="row">
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
            <Card className="text-center">
                    <Card.Body>
                    <Card.Title>Day Trip Generator</Card.Title>
                        <Card.Text>
                        The Day Trip Generator will allow a user to have a random trip generated for them, making it less of a hassle to come up with trip ideas for the day!
                        </Card.Text>
                    <Button variant="dark">Visit Github</Button>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <img class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                </Card.Footer>
            </Card>
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
                </CardGroup>
                <CardGroup className="row">
            <Card className="text-center">
                    <Card.Body>
                    <Card.Title>Day Trip Generator</Card.Title>
                        <Card.Text>
                        The Day Trip Generator will allow a user to have a random trip generated for them, making it less of a hassle to come up with trip ideas for the day!
                        </Card.Text>
                    <Button variant="dark">Visit Github</Button>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <img class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                </Card.Footer>
            </Card>
            <Card className="text-center">
                    <Card.Body>
                    <Card.Title>Day Trip Generator</Card.Title>
                        <Card.Text>
                        The Day Trip Generator will allow a user to have a random trip generated for them, making it less of a hassle to come up with trip ideas for the day!
                        </Card.Text>
                    <Button variant="dark">Visit Github</Button>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <img class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                </Card.Footer>
            </Card>
            <Card className="text-center">
                    <Card.Body>
                    <Card.Title>Robots VS Dinosaurs</Card.Title>
                        <Card.Text>
                        With Object Oriented Programming, creating classes to represent the unique data structures in our program, creating instances (objects) from those classes, and having those objects interact with each other.
                        </Card.Text>
                        <Button variant="dark">Visit Github</Button>
                </Card.Body>
                <Card.Footer className="text-muted">
                    <img class="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />    
                </Card.Footer>
            </Card>
                </CardGroup>
        </Container>
    );
}

export default Projects;