import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { Button } from './ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              وَتر
            </span>
            <span className="text-xl font-semibold">Witr</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/gallery" className="text-foreground hover:text-primary transition-colors">
              Gallery
            </Link>
            <Link to="/schedule" className="text-foreground hover:text-primary transition-colors">
              Schedule
            </Link>
            <Link to="/result" className="text-foreground hover:text-primary transition-colors">
              Results
            </Link>
            <ThemeToggle />
            <Button asChild>
              <Link to="/login">Login</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-foreground hover:bg-accent"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/gallery"
              className="block px-3 py-2 rounded-md text-foreground hover:bg-accent"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/schedule"
              className="block px-3 py-2 rounded-md text-foreground hover:bg-accent"
              onClick={() => setIsOpen(false)}
            >
              Schedule
            </Link>
            <Link
              to="/result"
              className="block px-3 py-2 rounded-md text-foreground hover:bg-accent"
              onClick={() => setIsOpen(false)}
            >
              Results
            </Link>
            <Button asChild className="w-full">
              <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
