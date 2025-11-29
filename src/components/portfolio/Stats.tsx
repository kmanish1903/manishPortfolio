import { useCountUp } from '@/hooks/useCountUp';
import { Code2, Award, GitBranch, Layers } from 'lucide-react';

const Stats = () => {
  const stats = [
    { 
      icon: Code2, 
      end: 10, 
      suffix: '+', 
      label: 'Projects Completed',
      color: 'text-blue-500'
    },
    { 
      icon: Award, 
      end: 5, 
      suffix: '', 
      label: 'Certifications',
      color: 'text-green-500'
    },
    { 
      icon: GitBranch, 
      end: 2000, 
      suffix: '+', 
      label: 'Lines of Code',
      color: 'text-purple-500'
    },
    { 
      icon: Layers, 
      end: 8, 
      suffix: '+', 
      label: 'Technologies',
      color: 'text-orange-500'
    }
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ 
  icon: Icon, 
  end, 
  suffix, 
  label, 
  color, 
  index 
}: { 
  icon: any; 
  end: number; 
  suffix: string; 
  label: string; 
  color: string;
  index: number;
}) => {
  const { count, ref } = useCountUp(end);

  return (
    <div 
      ref={ref}
      className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 
                 hover:border-primary/50 transition-all duration-300 hover:scale-105 
                 hover:shadow-glow animate-bounce-in"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="flex justify-center mb-4">
        <div className={`p-3 rounded-full bg-background/80 ${color} animate-pulse-glow`}>
          <Icon className="h-6 w-6 lg:h-8 lg:w-8" />
        </div>
      </div>
      <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm lg:text-base text-muted-foreground">
        {label}
      </div>
    </div>
  );
};

export default Stats;
