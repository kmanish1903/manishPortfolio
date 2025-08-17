import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, ExternalLink } from 'lucide-react';
import certificate1 from '@/assets/certificate-1.png';
import certificate2 from '@/assets/certificate-2.png';
import certificate3 from '@/assets/certificate-3.png';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'React JS Certification',
      issuer: 'NxtWave',
      image: certificate1,
      url: 'https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/KUOIIYLIAE.png'
    },
    {
      id: 2,
      title: 'Node JS Certification',
      issuer: 'NxtWave',
      image: certificate2,
      url: 'https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/QICCEYHRLM.png'
    },
    {
      id: 3,
      title: 'MongoDB Certification',
      issuer: 'NxtWave',
      image: certificate3,
      url: 'https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/NTOTIJGROR.png'
    },
    {
      id: 4,
      title: 'Programming Fundamentals',
      issuer: 'Coursera',
      image: null,
      url: 'https://coursera.org/share/ef07bd252ec10ea4491becd7663c6563'
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and achievements that validate my technical skills
            and commitment to continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <Card key={cert.id} className="gradient-card border-0 shadow-custom hover:shadow-xl transition-smooth animate-scale-in group">
              <CardContent className="p-6">
                <div className="text-center">
                  {cert.image ? (
                    <div className="mb-4 overflow-hidden rounded-lg">
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                  )}
                  
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {cert.issuer}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => window.open(cert.url, '_blank')}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Certificate
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;