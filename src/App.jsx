import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Product from './components/Product';
import Services from './components/Services';
import Works from './components/Works';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Product />
      <Works />
    </>
  );
}

export default App;
