'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-blue-200/50">
      <nav className="container mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
          SmartCare
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={() => window.location.href = 'https://wa.me/971525400103'}
          className="luxury-button-primary hidden md:block"
        >
          WhatsApp
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-600"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-blue-200/50 p-4">
          <div className="flex flex-col gap-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                window.location.href = 'https://wa.me/971525400103';
                setIsOpen(false);
              }}
              className="luxury-button-primary w-full"
            >
              WhatsApp Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
