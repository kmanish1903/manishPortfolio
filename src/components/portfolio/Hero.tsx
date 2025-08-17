import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleContactMe = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-subtle">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Engineer. Developer.{' '}
            <span className="text-primary">Continuous Learner.</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Final-year B.Tech CSE | MERN Stack Developer | Future DevOps Engineer
          </p>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleContactMe}
              className="border-primary text-primary hover:bg-primary hover:text-white transition-smooth"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;