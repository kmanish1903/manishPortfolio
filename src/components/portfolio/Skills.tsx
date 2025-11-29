import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

type SkillCategory = 'all' | 'frontend' | 'backend' | 'databases' | 'devops' | 'tools' | 'languages';

interface Skill {
  name: string;
  icon: string;
  categories: SkillCategory[];
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');

  const categories = [
    { id: 'all' as SkillCategory, label: 'All Skills' },
    { id: 'frontend' as SkillCategory, label: 'Frontend' },
    { id: 'backend' as SkillCategory, label: 'Backend' },
    { id: 'databases' as SkillCategory, label: 'Databases' },
    { id: 'devops' as SkillCategory, label: 'DevOps' },
    { id: 'tools' as SkillCategory, label: 'Tools' },
    { id: 'languages' as SkillCategory, label: 'Languages' },
  ];

  const allSkills: Skill[] = [
    { name: 'React.js', icon: '⚛️', categories: ['frontend'] },
    { name: 'JavaScript', icon: 'JS', categories: ['frontend', 'backend', 'languages'] },
    { name: 'Node.js', icon: '🟢', categories: ['backend'] },
    { name: 'HTML', icon: '📄', categories: ['frontend'] },
    { name: 'CSS', icon: '🎨', categories: ['frontend'] },
    { name: 'Bootstrap', icon: '🅱️', categories: ['frontend'] },
    { name: 'Python', icon: '🐍', categories: ['languages', 'backend'] },
    { name: 'C', icon: 'Ⓒ', categories: ['languages'] },
    { name: 'MongoDB', icon: '🍃', categories: ['databases'] },
    { name: 'MySQL', icon: '🐬', categories: ['databases'] },
    { name: 'Git', icon: '🔀', categories: ['tools'] },
    { name: 'GitHub', icon: '🐙', categories: ['tools'] },
    { name: 'Vercel', icon: '▲', categories: ['devops'] },
    { name: 'Express.js', icon: '📡', categories: ['backend'] },
    { name: 'Command Line', icon: '💻', categories: ['tools'] },
    { name: 'SQLite', icon: '📊', categories: ['databases'] },
    { name: 'REST APIs', icon: '🔌', categories: ['backend'] },
  ];

  const isSkillHighlighted = (skill: Skill) => {
    if (activeCategory === 'all') return true;
    return skill.categories.includes(activeCategory);
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set spanning full-stack development and computer science fundamentals.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-12 flex justify-center">
          <div className="inline-flex flex-wrap gap-3 p-2 rounded-xl bg-card/50 backdrop-blur-sm border border-border">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  px-6 py-2.5 rounded-lg font-medium transition-all duration-300
                  ${
                    activeCategory === category.id
                      ? 'gradient-hero text-white shadow-glow scale-105'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                  }
                `}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <span className="text-primary">→</span> Work Stack
          </h3>
          
          <Card className="gradient-card border-0 shadow-custom">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {allSkills.map((skill, index) => {
                  const isHighlighted = isSkillHighlighted(skill);
                  
                  return (
                    <div
                      key={index}
                      className={`
                        group relative flex flex-col items-center gap-2 p-4 rounded-xl
                        transition-all duration-300 cursor-pointer
                        ${
                          isHighlighted
                            ? 'scale-105 opacity-100'
                            : 'scale-95 opacity-40'
                        }
                      `}
                      style={{
                        transitionDelay: `${index * 30}ms`,
                      }}
                    >
                      {/* Icon */}
                      <div
                        className={`
                          text-3xl mb-1 transition-transform duration-300
                          ${isHighlighted ? 'group-hover:scale-110' : ''}
                        `}
                      >
                        {skill.icon}
                      </div>
                      
                      {/* Skill Name */}
                      <span
                        className={`
                          text-sm font-medium text-center transition-colors duration-300
                          ${
                            isHighlighted
                              ? 'text-foreground'
                              : 'text-muted-foreground'
                          }
                        `}
                      >
                        {skill.name}
                      </span>
                      
                      {/* Highlight Underline */}
                      {isHighlighted && (
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 gradient-hero rounded-full animate-scale-in" />
                      )}
                      
                      {/* Hover Effect */}
                      {isHighlighted && (
                        <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
