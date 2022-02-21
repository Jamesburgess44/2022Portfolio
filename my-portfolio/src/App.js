import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/navigation/navigation';
import Landing from './components/landing/landing';
import AboutMe from './components/aboutMe/aboutMe';
import Projects from './components/projects/projects';

function App() {
  return (
    <div className="App" class="bg-black">
      <Navigation/>
      <Landing />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
