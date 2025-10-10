const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Witr Sia Arts Fest
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Celebrating Islamic Art & Culture
            </p>
          </div>
          
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="/about" className="hover:text-primary transition-colors">About</a>
            <a href="/contact" className="hover:text-primary transition-colors">Contact</a>
            <a href="/gallery" className="hover:text-primary transition-colors">Gallery</a>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>© 2025 Witr Sia Arts Fest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
