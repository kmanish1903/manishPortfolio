import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Users, Clock, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      icon: Users,
      title: 'Math & Science Tutor',
      description: 'Class 10 Students',
      details: [
        'Tutored students in Mathematics and Science subjects',
        'Developed personalized teaching strategies for different learning styles',
        'Improved student performance and confidence in STEM subjects',
        'Enhanced communication and leadership skills'
      ],
      period: 'Part-time'
    },
    {
      icon: GraduationCap,
      title: 'Academic Excellence',
      description: 'B.Tech Computer Science',
      details: [
        'Strong academic foundation in core CS subjects',
        'Consistent performance while balancing personal projects',
        'Active participation in coding challenges and technical events',
        'Self-directed learning in emerging technologies'
      ],
      period: 'Final Year'
    },
    {
      icon: Clock,
      title: 'Time Management',
      description: 'Balanced Learning Approach',
      details: [
        'Successfully balanced academic commitments with side projects',
        'Developed strong time management and prioritization skills',
        'Maintained consistency in personal and professional development',
        'Supported family responsibilities while pursuing career goals'
      ],
      period: 'Ongoing'
    }
  ];

  const strengths = [
    {
      icon: Award,
      title: 'Consistency',
      description: 'Reliable performance and steady progress in all endeavors'
    },
    {
      icon: Award,
      title: 'Confidence',
      description: 'Self-assured approach to learning and problem-solving'
    },
    {
      icon: Award,
      title: 'Clarity',
      description: 'Clear thinking and strategic approach to goals'
    }
  ];

  return (
    <section id="experience" className="py-20 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Experience & Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey of growth through teaching, learning, and personal development 
            while building a strong foundation for my career.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Experience</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="gradient-card border-0 shadow-custom hover:shadow-xl transition-smooth animate-scale-in">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <exp.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-bold text-foreground">
                    {exp.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{exp.description}</p>
                  <span className="inline-block px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">
                    {exp.period}
                  </span>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm text-muted-foreground">
                        <span className="text-primary mr-2 mt-1">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values & Strengths Section */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Core Strengths</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {strengths.map((strength, index) => (
              <Card key={index} className="gradient-card border-0 shadow-md hover:shadow-lg transition-smooth animate-fade-in-up">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                    <strength.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{strength.title}</h4>
                  <p className="text-sm text-muted-foreground">{strength.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-16 text-center animate-fade-in-up">
          <Card className="gradient-card border-0 shadow-md max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Personal Philosophy
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I believe in balanced personal and professional growth, valuing long-term impact 
                over short-term gains. My approach is centered on clarity, continuous improvement, 
                and making meaningful contributions to every project I undertake.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through chess and discipline, I've developed critical thinking and strategic planning 
                skills that I apply to both technical challenges and life decisions. I'm committed 
                to becoming not just a skilled developer, but a thoughtful problem-solver who creates 
                scalable, impactful solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;