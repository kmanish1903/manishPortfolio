const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm text-background/70 mb-4">
            Final-year B.Tech CSE | Aspiring Full-Stack Developer & DevOps Engineer
          </p>
          
          <div className="border-t border-background/20 pt-4">
            <p className="text-xs text-background/60">
              © {currentYear} K. Manish. All rights reserved. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;