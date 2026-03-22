import { Award, Briefcase, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            About Me
          </h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed mb-12">
            <p>
              I'm a Senior Product Manager with over 10 years of relevant experience specializing in secure digital platforms, Identity and Access Management (IAM) systems, and cloud infrastructure optimization. My journey in product management has been defined by a passion for creating solutions that balance rigorous enterprise compliance with exceptional user experiences.
            </p>
            <p>
              Throughout my career, I've led end-to-end product lifecycles across multiple organizations including Backbase, TCS, PwC, and Accenture. I pride myself on being the voice of the customer while delivering measurable results in cost reduction and time optimization in complex technology environments.
            </p>
            <p>
              Currently pursuing my MBA from the prestigious Indian Institute of Management, Kozhikode (IIM-K), I combine deep technical expertise with strategic business acumen. My analytical approach and Agile mindset enable me to drive cross-functional collaboration and transform complex challenges into innovative product solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">15+ Years</h3>
              <p className="text-gray-600">Total Experience</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Award className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">10+ Years</h3>
              <p className="text-gray-600">Product Management</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">MBA</h3>
              <p className="text-gray-600">IIM Kozhikode</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
