
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Avoid rendering mobile/desktop specific UI until mounted
  }

  const commonLinkClasses = "text-foreground hover:text-primary transition-colors duration-300 ease-in-out";
  const mobileLinkClasses = `block py-2 px-4 text-lg ${commonLinkClasses}`;
  const desktopLinkClasses = `text-sm font-medium ${commonLinkClasses}`;

  return (
    <header className="bg-background/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
          <Zap className="h-7 w-7" />
          <span className="text-2xl font-headline font-bold">Simpler</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={desktopLinkClasses}>
              {link.label}
            </Link>
          ))}
           <Button asChild variant="outline" size="sm">
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/login">Login</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center mb-6">
                  <Link href="/" className="flex items-center gap-2 text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                    <Zap className="h-7 w-7" />
                    <span className="text-2xl font-headline font-bold">Simpler</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                {navLinks.map((link) => (
                  <Link key={link.href} href={link.href} className={mobileLinkClasses} onClick={() => setIsMobileMenuOpen(false)}>
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-4 mt-4">
                  <Button asChild variant="outline" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                    <Link href="/dashboard">Dashboard</Link>
                  </Button>
                  <Button asChild className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                    <Link href="/login">Login</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
