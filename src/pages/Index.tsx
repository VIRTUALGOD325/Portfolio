import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Publications from '../components/Publications';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => (
  <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Projects />
    <Skills />
    <Publications />
    <Contact />
    <Footer />
  </div>
);

export default Index;
