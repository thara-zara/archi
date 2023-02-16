import './App.css';
import Digital from './components/Digital/Digital';
import Feture from './components/Feture/Feture';
import Footer from './components/Foooter/Footer';
import Hero from './components/Hero/Hero';
import Journey from './components/Journey/Journey';
import Nav from './components/Nav/Nav';
import Project from './components/Project/Project';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Hero/>
      <Feture/>
      <Digital/>
      <Journey/>
      <Project/>
      <Footer/>
    </div>
  );
}

export default App;
