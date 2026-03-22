import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      company: 'Backbase',
      location: 'Hyderabad',
      role: 'Senior Product Manager, Digital Engage Marketing Platform',
      period: 'Jun 2022 – Present',
      achievements: [
        'Led end-to-end growth strategy for the Digital Engage Platform, scaling from MVP to 20+ enterprise clients',
        'Collaborated with Risk, Legal, and Compliance leadership to architect and implement foundational IAM systems',
        'Directed product strategy and Agile execution to launch complex marketing campaigns across Push, Email, WhatsApp, and Overlays',
        'Utilized behavioral analytics and qualitative user research to drive significant improvements in user activation',
      ],
    },
    {
      company: 'TCS',
      location: 'Client: Nedbank, South Africa',
      role: 'Digital Product Owner, Analytics and Insights',
      period: '2019 – 2022',
      achievements: [
        'Created and managed journey-wise analytics and attribution implementation backlog using Agile practices',
        'Analyzed and articulated complex digital data for executive summaries and presentations',
        'Implemented analytics frameworks and experimentation infrastructure',
        'Optimized server calls to improve platform performance, reduce cost, and enable faster test-and-learn cycles',
      ],
    },
    {
      company: 'TCS',
      location: 'Client: Nedbank, South Africa',
      role: 'Digital Business Analyst, Customer Servicing',
      period: '2016 – 2019',
      achievements: [
        'Conducted market research and secured approvals from risk, marketing, and operations teams',
        'Drove implementation, user testing, and release for customer servicing features on Digital Channels',
        'Successfully rolled out digital customer servicing features including complaints management, loan settlement, statements, and beneficiary management',
        'Responsible for comprehensive documentation and stakeholder communication',
      ],
    },
    {
      company: 'TCS',
      location: 'Client: Deutsche Bank, Germany',
      role: 'SME - SAP Analytical Banking',
      period: '2015 – 2016',
      achievements: [
        'Provided subject matter expertise in SAP Analytical Banking solutions',
        'Collaborated with global teams to deliver banking analytics solutions',
      ],
    },
    {
      company: 'PwC',
      location: 'Client: Demir Bank',
      role: 'Consultant - SAP Analytical Banking',
      period: '2013 – 2015',
      achievements: [
        'Delivered SAP Analytical Banking consulting services',
        'Implemented analytical solutions for banking operations',
      ],
    },
    {
      company: 'Accenture',
      location: 'Client: Nordea Bank',
      role: 'Techno-functional Consultant',
      period: '2010 – 2013',
      achievements: [
        'Served as techno-functional consultant for banking solutions',
        'Bridged technical implementation with business requirements',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Professional Experience
          </h2>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative ${
                    index % 2 === 0 ? 'md:ml-0' : 'md:ml-auto'
                  } md:w-1/2`}
                >
                  <div className="ml-8 md:ml-0 md:px-8">
                    <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                          <Briefcase className="text-white" size={20} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{exp.company}</h3>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">{exp.location}</p>
                      <p className="text-lg font-semibold text-gray-800 mb-2">{exp.role}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-700 text-sm flex items-start gap-2">
                            <span className="text-blue-600 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
