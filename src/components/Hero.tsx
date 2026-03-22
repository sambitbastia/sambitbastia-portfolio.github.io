import { ArrowDown, Linkedin, Mail, Phone } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Sambit Kumar Bastia
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              Senior Product Manager
            </p>
            <p className="text-lg md:text-xl text-gray-500 mb-8">
              Driving Digital Innovation & Enterprise Growth Through Strategic Product Leadership
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              <a
                href="mailto:sambitbastia@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Mail size={20} />
                Get in Touch
              </a>
              <a
                href="https://www.linkedin.com/in/sambit-bastia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 border-2 border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
            <div className="flex flex-wrap gap-6 justify-center text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                sambitbastia@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                +91 8984169172
              </div>
            </div>
          </div>
          <button
            onClick={scrollToAbout}
            className="mt-16 animate-bounce inline-block text-gray-400 hover:text-blue-600 transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
