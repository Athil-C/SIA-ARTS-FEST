import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

const FirstPage = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[90vh] flex flex-col">
      <div className="flex-grow flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between px-4">
          {/* Content section */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <div className="max-w-2xl mx-auto md:mx-0">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Welcome to Withr 
              </h1>
              <p className="mb-6 text-base md:text-lg text-muted-foreground">
                Withr is a premier platform for students to showcase their talents. It highlights the rich art forms of Islamic culture, presenting them to a wider audience. The event fosters creativity, cultural appreciation, and artistic expression.
              </p>
              <Button
                onClick={() => navigate('/result')}
                size="lg"
                className="w-full md:w-auto"
              >
                Check your Results
              </Button>
            </div>
          </div>

          {/* Logo section */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
                <div className="text-9xl font-bold bg-gradient-to-br from-primary via-accent to-secondary bg-clip-text text-transparent">
                  وَتر
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pattern decoration at bottom */}
      <div className="w-full h-24 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border-t border-border"></div>
    </section>
  );
};

export default FirstPage;
