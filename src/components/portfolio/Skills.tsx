import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Database, 
  Server, 
  Code, 
  Settings, 
  Layers,
  GitBranch 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Full Stack Development',
      icon: Layers,
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 75 },
        { name: 'MongoDB', level: 70 }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Settings,
      skills: [
        { name: 'CI/CD Basics', level: 65 },
        { name: 'Git', level: 85 },
        { name: 'Deployment Workflows', level: 60 },
        { name: 'VS Code', level: 90 }
      ]
    },
    {
      title: 'Computer Science Fundamentals',
      icon: Code,
      skills: [
        { name: 'Data Structures & Algorithms', level: 80 },
        { name: 'Database Management (DBMS)', level: 75 },
        { name: 'Object-Oriented Programming', level: 85 },
        { name: 'System Design', level: 65 }
      ]
    }
  ];

  const getProgressColor = (level: number) => {
    if (level >= 80) return 'bg-green-500';
    if (level >= 70) return 'bg-blue-500';
    if (level >= 60) return 'bg-yellow-500';
    return 'bg-gray-400';
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning full-stack development, DevOps practices, 
            and computer science fundamentals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="gradient-card border-0 shadow-custom hover:shadow-xl transition-smooth animate-scale-in">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <category.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ease-out ${getProgressColor(skill.level)}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Summary */}
        <div className="mt-16 text-center animate-fade-in-up">
          <Card className="gradient-card border-0 shadow-md max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Learning Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Currently deepening my expertise in the MERN stack while exploring DevOps tools and practices. 
                I believe in continuous learning and staying updated with industry trends and best practices.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['JavaScript', 'TypeScript', 'Python', 'Docker', 'AWS', 'Linux'].map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;