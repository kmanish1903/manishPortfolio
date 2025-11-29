import { Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTypingEffect } from '@/hooks/useTypingEffect';

const Hero = () => {
  const typingText = useTypingEffect([
    'MERN Stack Developer',
    'DevOps Enthusiast',
    'Problem Solver',
    'Continuous Learner'
  ], 100, 50, 2000);

  const handleContactMe = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    window.open('/resume.pdf', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 gradient-glow rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Engineer. Developer.{' '}
            <span className="text-primary">Continuous Learner.</span>
          </h1>
          
          <div className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto min-h-[3rem] flex items-center justify-center">
            <span className="inline-block">Final-year B.Tech CSE | </span>
            <span className="text-primary font-semibold ml-2 inline-block min-w-[280px] text-left">
              {typingText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              onClick={handleContactMe}
              className="gradient-hero text-white shadow-glow interactive-button"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            <Button 
              size="lg" 
              onClick={handleDownloadResume}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-md hover:shadow-glow"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;