
import { Code2, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Code2 className="h-5 w-5 text-primary" />
            <span className="font-semibold">Alex Johnson</span>
          </div>
          
          <div className="flex items-center space-x-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>and lots of coffee</span>
          </div>
          
          <div className="text-muted-foreground text-sm">
            © 2024 All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
