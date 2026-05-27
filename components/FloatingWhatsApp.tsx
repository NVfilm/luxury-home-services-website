'use client';

import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <button
      onClick={() => window.location.href = 'https://wa.me/971525400103'}
      className="fixed bottom-8 right-8 z-40 w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 pulse-glow"
    >
      <MessageCircle size={32} />
    </button>
  );
}
