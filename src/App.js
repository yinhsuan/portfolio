import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import WorkExperience from "./components/WorkExperience";
import ResumeButton from './components/ResumeButton';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <WorkExperience />
      <Skills />
      <Projects />
      <ResumeButton onClick={() => window.open('/portfolio/resume.pdf', '_blank')} />
      {/* <Blog /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
