import { ArrowDown, Linkedin, Mail, Phone } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 pt-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in order-2 md:order-1">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-2xl blur opacity-75"></div>
                <img
                  //src="/Gemini_Generated_Image_38fejq38fejq38fe.png"
                  src={`${import.meta.env.BASE_URL}Gemini_Generated_Image_38fejq38fejq38fe.png`}
                  alt="Sambit Kumar Bastia"
                  className="relative w-full h-auto rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </div>
            <div className="animate-fade-in order-1 md:order-2">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-300 bg-clip-text text-transparent mb-4 leading-tight">
                Sambit Kumar Bastia
              </h1>
              <p className="text-2xl md:text-3xl font-semibold text-emerald-300 mb-4">
                Senior Product Manager
              </p>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Driving Digital Innovation & Enterprise Growth Through Strategic Product Leadership
              </p>
              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href="mailto:sambitbastia@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:-translate-y-1 font-semibold"
                >
                  <Mail size={20} />
                  Get in Touch
                </a>
                <a
                  href="https://www.linkedin.com/in/sambit-bastia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border-2 border-emerald-400 text-emerald-300 rounded-lg hover:bg-emerald-400/10 transition-all duration-300 hover:-translate-y-1 font-semibold hover:shadow-lg hover:shadow-emerald-400/30"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-cyan-400" />
                  sambitbastia@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-emerald-400" />
                  +91 8984169172
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={scrollToAbout}
            className="mt-20 mx-auto block animate-bounce text-emerald-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
