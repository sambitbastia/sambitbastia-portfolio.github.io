import { ExternalLink, Rocket } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Digital Engage Platform Growth',
      description:
        'Led end-to-end growth strategy scaling a marketing platform from MVP to 20+ enterprise clients. Implemented comprehensive GTM initiatives and user acquisition funnels.',
      technologies: ['Product Strategy', 'GTM', 'User Analytics', 'Agile'],
      impact: '20+ enterprise clients acquired',
    },
    {
      title: 'IAM System Architecture',
      description:
        'Architected and implemented foundational approvals and access management systems ensuring strict enterprise compliance. Collaborated with Risk, Legal, and Compliance teams.',
      technologies: ['IAM', 'Compliance', 'Security', 'Enterprise Architecture'],
      impact: 'Enterprise-grade security compliance achieved',
    },
    {
      title: 'Multi-Channel Marketing Campaigns',
      description:
        'Directed product strategy to launch complex marketing campaigns across Push, Email, WhatsApp, and Overlays. Enabled seamless customer engagement across digital touchpoints.',
      technologies: ['Product Management', 'API Integration', 'Agile', 'Analytics'],
      impact: 'Multiple communication channels successfully launched',
    },
    {
      title: 'Analytics & Experimentation Framework',
      description:
        'Implemented comprehensive analytics frameworks and experimentation infrastructure. Optimized server calls improving platform performance and reducing costs.',
      technologies: ['Adobe Analytics', 'A/B Testing', 'Data Analytics', 'Performance Optimization'],
      impact: 'Significant cost reduction and faster test-and-learn cycles',
    },
    {
      title: 'Digital Customer Servicing Platform',
      description:
        'Successfully rolled out digital customer servicing features including complaints management, loan settlement services, statements, and beneficiary management.',
      technologies: ['Digital Banking', 'UX Design', 'Agile', 'Customer Experience'],
      impact: 'Enhanced digital customer experience across platforms',
    },
    {
      title: 'Data-Driven Decision Framework',
      description:
        'Analyzed complex digital data to prepare executive summaries and presentations. Empowered data-driven decision-making across CX, Operations, Sales, and Commercialization teams.',
      technologies: ['Business Intelligence', 'Data Visualization', 'Executive Reporting'],
      impact: 'Enabled strategic decisions through data insights',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-1/2 -left-1/2 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-12 text-center">
            Key Projects & Initiatives
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-emerald-400/30 p-6 rounded-xl hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-400/20 transition-all duration-300 hover:-translate-y-2 flex flex-col group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Rocket className="text-slate-900" size={20} />
                  </div>
                  <h3 className="text-lg font-bold text-white flex-1">
                    {project.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full border border-emerald-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-emerald-400/30">
                  <div className="flex items-start gap-2">
                    <ExternalLink className="text-cyan-400 flex-shrink-0 mt-0.5" size={14} />
                    <p className="text-xs font-medium text-gray-400">{project.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
