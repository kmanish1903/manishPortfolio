import { Mail, Download, Github, Linkedin, Send } from 'lucide-react';
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
      {/* Enhanced Background decoration with floating tech elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 gradient-glow rounded-full"></div>
        
        {/* Floating Tech Icons */}
        <div className="absolute top-20 left-20 text-4xl opacity-20 animate-float">⚛️</div>
        <div className="absolute top-40 right-32 text-3xl opacity-15 animate-float delay-500">🟢</div>
        <div className="absolute bottom-32 left-40 text-3xl opacity-20 animate-float delay-1000">🍃</div>
        <div className="absolute bottom-20 right-20 text-4xl opacity-15 animate-float delay-700">🐙</div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in-up">
          {/* Greeting with wave animation */}
          <div className="text-lg sm:text-xl text-muted-foreground mb-4 flex items-center justify-center gap-2">
            <span>Hello, I'm</span>
            <span className="inline-block animate-wave text-2xl">👋</span>
          </div>

          {/* Name with gradient effect */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            <span className="gradient-text-hero">K. Manish</span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
            Engineer. Developer.{' '}
            <span className="text-primary">Continuous Learner.</span>
          </h2>
          
          {/* Typing effect tagline */}
          <div className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto min-h-[3rem] flex items-center justify-center">
            <span className="inline-block">Final-year B.Tech CSE | </span>
            <span className="text-primary font-semibold ml-2 inline-block min-w-[280px] text-left">
              {typingText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          {/* Available for opportunities badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-primary">Available for opportunities</span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
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

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/YOUR_GITHUB_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-primary transition-all duration-300 hover:scale-110"
            >
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-primary transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:your.email@example.com"
              className="group relative p-3 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-primary transition-all duration-300 hover:scale-110"
            >
              <Send className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
