import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the message
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'manishmudhiraj1903@gmail.com',
      href: 'mailto:manishmudhiraj1903@gmail.com'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/kmanish1903',
      href: 'https://linkedin.com/in/kmanish1903'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/kmanish1903',
      href: 'https://github.com/kmanish1903'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, Telangana',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a conversation about technology and development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-up">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm currently seeking opportunities as a Full-Stack Developer or DevOps Engineer. 
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                    <contact.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{contact.label}</p>
                    {contact.href ? (
                      <a 
                        href={contact.href}
                        className="text-muted-foreground hover:text-primary transition-smooth"
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="pt-8">
              <div className="flex space-x-4">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => window.open('https://linkedin.com/in/kmanish1903', '_blank')}
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                  onClick={() => window.open('https://github.com/kmanish1903', '_blank')}
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="gradient-card border-0 shadow-custom animate-scale-in">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello..."
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full gradient-hero text-white hover:opacity-90 transition-smooth"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;