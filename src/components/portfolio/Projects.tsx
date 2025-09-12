import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ExternalLink, Github } from 'lucide-react';
import genvitexImage from '@/assets/genvitex-project.jpg';
import mernImage from '@/assets/mern-crud-project.jpg';

const Projects = () => {
  const featuredProjects = [
    {
      title: 'Gen.Vitex',
      description: 'An AI-powered platform that converts YouTube videos into summaries and bullet points, featuring an integrated AI chatbot that answers queries related to the video content.',
      image: genvitexImage,
      technologies: ['React.js', 'Node.js', 'FastAPI', 'LLM Integration'],
      features: [
        'YouTube video content conversion',
        'AI-generated summaries and bullet points',
        'Integrated chatbot for video queries',
        'Real-time processing'
      ],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'MERN CRUD Application',
      description: 'A responsive web application for handling CRUD operations using the complete MERN stack, showcasing full-stack development capabilities with modern design patterns.',
      image: mernImage,
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      features: [
        'Complete CRUD operations',
        'Responsive design',
        'RESTful API architecture',
        'Database management'
      ],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const staticProjects = [
    {
      title: 'Static Web Project',
      description: 'A static website project demonstrating clean HTML structure, CSS styling, and fundamental web development concepts.',
      image: null, // Placeholder for now
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      features: [
        'Clean semantic HTML structure',
        'Custom CSS styling',
        'Cross-browser compatibility',
        'Professional layout design'
      ],
      liveUrl: 'https://0static01.ccbp.tech',
      githubUrl: '#'
    }
  ];

  const responsiveProjects = [
    // Add responsive projects here
  ];

  const dynamicProjects = [
    {
      title: 'My Todo App',
      description: 'A comprehensive todo application for managing tasks and daily activities with add, delete, and completion tracking functionality.',
      image: null,
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      features: [
        'Add and delete tasks',
        'Mark tasks as complete',
        'Local storage persistence',
        'Clean user interface'
      ],
      liveUrl: 'https://kmanishmytodo.ccbp.tech/',
      githubUrl: null
    },
    {
      title: 'Array Splice Playground',
      description: 'An interactive learning tool demonstrating the JavaScript splice method with real-time array manipulation and visual feedback.',
      image: null,
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      features: [
        'Interactive splice operations',
        'Real-time array visualization',
        'Educational interface',
        'Live code examples'
      ],
      liveUrl: 'https://manishjslearnin.ccbp.tech',
      githubUrl: null
    },
    {
      title: 'Array FindIndex Tool',
      description: 'A practical utility for finding index positions in arrays with interactive search functionality and visual element highlighting.',
      image: null,
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      features: [
        'Find index in arrays',
        'Interactive search',
        'Visual highlighting',
        'Real-time results'
      ],
      liveUrl: 'https://1903findindex.ccbp.tech',
      githubUrl: null
    },
    {
      title: 'Random Reply Chatbot',
      description: 'A simple chatbot that provides random responses from a predefined array, showcasing basic AI simulation and user interaction.',
      image: null,
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      features: [
        'Random reply generation',
        'Chat interface',
        'Predefined responses',
        'Interactive conversation'
      ],
      liveUrl: 'https://kmanishchatbot.ccbp.tech',
      githubUrl: null
    },
    {
      title: 'Clear Counter',
      description: 'A counter application with start, increment, and clear functionality. The counter progresses automatically and can be stopped and reset with user controls.',
      image: null,
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      features: [
        'Auto-incrementing counter',
        'Start/stop controls',
        'Clear functionality',
        'Real-time updates'
      ],
      liveUrl: 'https://clearcount1903.ccbp.tech',
      githubUrl: null
    },
    {
      title: 'Peace Timer',
      description: 'A meditation and relaxation timer with preset durations (20s, 30s, 40s, 1min) that counts down to provide moments of peace and mindfulness.',
      image: null,
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      features: [
        'Multiple timer presets',
        'Countdown functionality',
        'Peace and mindfulness focus',
        'Clean timer interface'
      ],
      liveUrl: 'https://peacetimer1903.ccbp.tech',
      githubUrl: null
    },
    {
      title: 'Dark/Light Theme Toggle',
      description: 'A theme switcher application that dynamically changes the background and styling based on user input, demonstrating CSS manipulation and theme management.',
      image: null,
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      features: [
        'Dynamic theme switching',
        'Dark and light modes',
        'Real-time background changes',
        'User input controls'
      ],
      liveUrl: 'https://manishdarklyt.ccbp.tech',
      githubUrl: null
    },
    {
      title: 'Bomb Defuser Game',
      description: 'An interactive game where players must type "defuse" to stop a countdown timer and defuse the bomb, creating an engaging and thrilling user experience.',
      image: null,
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      features: [
        'Countdown timer',
        'Text input validation',
        'Game logic implementation',
        'Success/failure feedback'
      ],
      liveUrl: 'https://k1903bombdefuse.ccbp.tech',
      githubUrl: null
    },
    {
      title: 'Interactive Counter',
      description: 'A dynamic counter application demonstrating JavaScript interactivity with increment, decrement, and reset functionality using pure HTML, CSS, and JavaScript.',
      image: null,
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      features: [
        'Real-time counter updates',
        'Interactive button controls',
        'Clean user interface',
        'State management'
      ],
      liveUrl: 'https://kmanishincredec.ccbp.tech',
      githubUrl: null
    },
    {
      title: 'Traffic Light Controller',
      description: 'An interactive traffic light simulation built with HTML, CSS, and JavaScript. Features dynamic state changes with Stop, Ready, and Go functionality, demonstrating DOM manipulation and event handling.',
      image: null,
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      features: [
        'Interactive traffic light states',
        'Stop, Ready, and Go functionality',
        'Smooth state transitions',
        'Responsive button controls',
        'Visual feedback with color changes'
      ],
      liveUrl: 'https://kmanishtraffic.ccbp.tech',
      githubUrl: null
    }
  ];

  const renderProjectCard = (project: any, index: number) => (
    <Card key={index} className="gradient-card border-0 shadow-custom project-card overflow-hidden animate-scale-in" style={{ animationDelay: `${index * 200}ms` }}>
      {project.image && (
        <div className="relative overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-48 object-cover transition-smooth hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      )}
      
      {project.images && (
        <div className="relative overflow-hidden">
          <Carousel className="w-full">
            <CarouselContent>
              {project.images.map((imageSrc: string, imgIndex: number) => (
                <CarouselItem key={imgIndex}>
                  <img 
                    src={imageSrc} 
                    alt={`${project.title} - State ${imgIndex + 1}`}
                    className="w-full h-48 object-cover transition-smooth"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </div>
      )}
      
      <CardHeader>
        <CardTitle className="text-xl font-bold text-foreground">
          {project.title}
        </CardTitle>
        <p className="text-muted-foreground leading-relaxed">
          {project.description}
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Technologies */}
        <div>
          <h4 className="font-semibold text-foreground mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string, techIndex: number) => (
              <Badge key={techIndex} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Features */}
        <div>
          <h4 className="font-semibold text-foreground mb-2">Key Features</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            {project.features.map((feature: string, featureIndex: number) => (
              <li key={featureIndex} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <Button 
            size="sm" 
            className="gradient-hero text-white shadow-glow interactive-button"
            onClick={() => window.open(project.liveUrl, '_blank')}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </Button>
          {project.githubUrl && project.githubUrl !== '#' && (
            <Button 
              size="sm" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white interactive-button"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              <Github className="mr-2 h-4 w-4" />
              View Code
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            My Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical skills and problem-solving abilities through 
            real-world applications and course projects.
          </p>
        </div>

        <Tabs defaultValue="featured" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="static">Static</TabsTrigger>
            <TabsTrigger value="responsive">Responsive</TabsTrigger>
            <TabsTrigger value="dynamic">Dynamic</TabsTrigger>
          </TabsList>

          <TabsContent value="featured">
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => renderProjectCard(project, index))}
            </div>
          </TabsContent>

          <TabsContent value="static">
            <div className="grid md:grid-cols-2 gap-8">
              {staticProjects.map((project, index) => renderProjectCard(project, index))}
            </div>
          </TabsContent>

          <TabsContent value="responsive">
            <div className="grid md:grid-cols-2 gap-8">
              {responsiveProjects.length > 0 ? (
                responsiveProjects.map((project, index) => renderProjectCard(project, index))
              ) : (
                <div className="col-span-2 text-center py-12">
                  <p className="text-muted-foreground">Responsive projects coming soon...</p>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="dynamic">
            <div className="grid md:grid-cols-2 gap-8">
              {dynamicProjects.map((project, index) => renderProjectCard(project, index))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;