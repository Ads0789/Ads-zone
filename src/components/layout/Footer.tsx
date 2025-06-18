import { Zap, Facebook, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/60">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center justify-center md:justify-start">
            <Link href="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
              <Zap className="h-6 w-6" />
              <span className="text-xl font-headline font-bold">Simpler</span>
            </Link>
          </div>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; {currentYear} Simpler. All rights reserved.</p>
            <p className="mt-1">Crafted with love for simplicity.</p>
          </div>

          <div className="flex justify-center md:justify-end gap-4">
            <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook size={20} />
            </Link>
            <Link href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter size={20} />
            </Link>
            <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
