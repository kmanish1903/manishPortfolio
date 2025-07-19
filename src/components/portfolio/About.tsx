import { Card, CardContent } from '@/components/ui/card';
import { MapPin, GraduationCap, Target, Heart } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';

const About = () => {
  const highlights = [
    {
      icon: MapPin,
      title: 'Based in Hyderabad',
      description: 'Telangana, India'
    },
    {
      icon: GraduationCap,
      title: 'Academic Foundation',
      description: 'Strong grasp of DSA, DBMS, and OOP'
    },
    {
      icon: Target,
      title: 'Career Focus',
      description: 'Full-Stack Developer & DevOps Engineer'
    },
    {
      icon: Heart,
      title: 'Core Values',
      description: 'Consistency, Confidence, and Clarity'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A disciplined and proactive learner with a passion for real-world problem-solving 
            and consistent personal growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-custom">
                <img 
                  src={profileImage} 
                  alt="K. Manish" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm a final-year B.Tech Computer Science student with a strong academic foundation 
                in Data Structures, Algorithms, DBMS, and Object-Oriented Programming. Currently 
                mastering the MERN stack and exploring DevOps tools with a clear ambition to become 
                a Full-Stack Developer and DevOps Engineer.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                Self-driven and value-oriented, I focus on industry-relevant skills and have a 
                passion for DevOps practices, full-stack applications, and scalable solutions. 
                I'm known for my consistency, confidence, and clarity in thought, with a balanced 
                approach to personal and professional growth.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card key={index} className="gradient-card border-0 shadow-md hover:shadow-lg transition-smooth">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <item.icon className="h-6 w-6 text-primary mt-1" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;