import './App.css';
import BookDemo from './components/BookDemo';
import Footer from './components/MyFooter';
import Navbar from './components/Navbar';
import HowItWorks from './components/HowItWorks';
import Team from './components/Team';
import Mission from './components/Mission';
import TakeACtion from './components/TakeACtion';
import Impact from './components/Impact';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProblemIdentification from './components/ProblemIdentification';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  });
  return (
    <>
      <Navbar />
      <div data-aos="fade-up">
        <HowItWorks />
      </div>
      <div data-aos="fade-up">
        <ProblemIdentification />
      </div>
      <div data-aos="fade-up">
        <Impact />
      </div>
      <div data-aos="fade-up">
        <TakeACtion />
      </div>
      <div data-aos="fade-up">
        <Mission />
      </div>
      <div data-aos="fade-up">
        <Team />
      </div>
      <div data-aos="fade-up">
        <BookDemo />
      </div>
      <div data-aos="fade-up">
        <Footer />
      </div>
    </>
  );
}

export default App;
