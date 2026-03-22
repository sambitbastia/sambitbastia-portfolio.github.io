import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-md border-b border-emerald-500/20 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            SKB
          </div>

          <button
            className="md:hidden text-emerald-400 hover:text-cyan-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className="hidden md:flex space-x-8">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {isMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4 pb-4 bg-slate-800/50 rounded-lg p-4">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
