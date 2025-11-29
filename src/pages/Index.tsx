import Header from '@/components/portfolio/Header';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Stats from '@/components/portfolio/Stats';
import Projects from '@/components/portfolio/Projects';
import Skills from '@/components/portfolio/Skills';
import Certificates from '@/components/portfolio/Certificates';
import Contact from '@/components/portfolio/Contact';
import ScrollProgress from '@/components/portfolio/ScrollProgress';


const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <Projects />
        <Skills />
        <Certificates />
        <Contact />
      </main>
      
    </div>
  );
};

export default Index;
