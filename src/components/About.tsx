import { useState, useEffect } from 'react';

const About = () => {
  const [showLiveUpdate, setShowLiveUpdate] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLiveUpdate(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen py-12 flex justify-center items-center relative">
      {/* Live Update Notification */}
      {showLiveUpdate && (
        <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-primary via-accent to-secondary text-primary-foreground py-3 px-4 text-center animate-slide-in-down z-50">
          <p className="font-semibold">Welcome to Withr ArtsFest 2025! Registration is now open for all teams.</p>
        </div>
      )}

      <div className="w-full flex justify-center items-center">
        <div className="flex flex-col md:flex-row w-full md:w-3/4 gap-12 px-4">
          {/* Content Section */}
          <section className="w-full md:w-3/5 flex justify-center items-center">
            <div className="w-full md:w-3/4 text-center md:text-left">
              <h1 className="text-4xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Withr Sia Arts
              </h1>
              <p className="mt-4 text-base lg:text-lg leading-relaxed text-muted-foreground">
                The full logo combines the Malayalam letter 'ഋ' and the Arabic word وَتر (witr). 
                The 'ഋ' is a largely unused, solitary vowel in Malayalam, and وَتر literally means 
                'alone' or 'single' in Arabic. This artistic fusion symbolizes singularity and uniqueness, 
                celebrating the power and beauty found in being distinct or standing apart.
              </p>
            </div>
          </section>

          {/* Visual Section */}
          <section className="w-full md:w-2/5 flex justify-center items-center">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-full blur-2xl"></div>
              <div className="relative w-full h-full flex items-center justify-center">
                <span className="text-8xl font-bold bg-gradient-to-br from-primary via-accent to-secondary bg-clip-text text-transparent">
                  ഋ
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default About;
