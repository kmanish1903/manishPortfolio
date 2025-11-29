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
      title: 'MERN Stack',
      icon: Layers,
      skills: [
        { name: 'React.js', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 75 },
        { name: 'MongoDB', level: 70 }
      ]
    },
    {
      title: 'Core Skills',
      icon: Code,
      skills: [
        { name: 'JavaScript', level: 85 },
        { name: 'Data Structures', level: 80 },
        { name: 'Git', level: 85 },
        { name: 'Problem Solving', level: 85 }
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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="gradient-card border-0 shadow-custom card-hover animate-scale-in"  style={{ animationDelay: `${index * 200}ms` }}>
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
                     <div className="skill-bar">
                       <div className="skill-progress">
                         <div 
                           className="skill-fill"
                           style={{ width: `${skill.level}%`, animationDelay: `${skillIndex * 150 + 500}ms` }}
                         />
                       </div>
                     </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* GitHub Stats Section */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              GitHub Statistics
            </h3>
            <p className="text-muted-foreground">
              My coding journey visualized
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-lg overflow-hidden border border-border bg-card p-4 card-hover animate-slide-in-left">
              <img 
                src="https://github-readme-stats.vercel.app/api?username=YOUR_GITHUB_USERNAME&show_icons=true&theme=transparent&hide_border=true&title_color=8b5cf6&icon_color=8b5cf6&text_color=e5e7eb&bg_color=00000000" 
                alt="GitHub Stats"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-lg overflow-hidden border border-border bg-card p-4 card-hover animate-slide-in-right delay-200">
              <img 
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=YOUR_GITHUB_USERNAME&layout=compact&theme=transparent&hide_border=true&title_color=8b5cf6&text_color=e5e7eb&bg_color=00000000" 
                alt="Top Languages"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mt-6 text-center">
            <a 
              href="https://github.com/YOUR_GITHUB_USERNAME" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline transition-all duration-300 hover:text-primary/80"
            >
              <GitBranch className="h-5 w-5" />
              View Full GitHub Profile
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;