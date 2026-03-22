import { Linkedin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Get In Touch
          </h2>
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 mb-4">
              I'm always open to discussing new opportunities, collaborations, or just connecting with fellow product enthusiasts.
            </p>
            <p className="text-gray-600">
              Feel free to reach out through any of the channels below.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:sambitbastia@gmail.com"
              className="group bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 text-sm break-all">sambitbastia@gmail.com</p>
            </a>

            <a
              href="tel:+918984169172"
              className="group bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 text-sm">+91 8984169172</p>
            </a>

            <a
              href="https://www.linkedin.com/in/sambit-bastia"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Linkedin className="text-white" size={28} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">LinkedIn</h3>
              <p className="text-gray-600 text-sm">Connect with me</p>
            </a>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Let's Build Something Great Together
            </h3>
            <p className="text-blue-100 mb-6">
              Whether you're looking for a Senior Product Manager to drive your digital transformation or want to discuss product strategy, I'd love to hear from you.
            </p>
            <a
              href="mailto:sambitbastia@gmail.com"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              Send Me a Message
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
