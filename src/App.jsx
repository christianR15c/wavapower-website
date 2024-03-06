import './App.css';
import About from './components/About';
import BookDemo from './components/BookDemo';
import Footer from './components/MyFooter';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Services from './components/Services';
import Works from './components/Works';
import Team from './components/Team';
import Mission from './components/Mission';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Product />
      <Works />
      <Mission />
      <Team />
      <BookDemo />
      <Footer />
    </>
  );
}

export default App;
