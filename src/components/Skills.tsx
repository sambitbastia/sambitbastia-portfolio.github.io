import { BarChart3, CheckCircle2, Lightbulb, Settings, Shield, Users } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Product Management & Strategy',
      icon: Lightbulb,
      skills: [
        'Digital & Technology Strategy',
        'Product Roadmaps & Vision',
        'GTM Strategy',
        'A/B Testing & Experimentation',
        'Cohort Analysis',
        'Funnel Optimization',
        'User Acquisition & Retention',
        'Behavioral Analytics',
      ],
    },
    {
      title: 'Agile & Execution',
      icon: CheckCircle2,
      skills: [
        'Agile Methodologies (Scrum, Kanban)',
        'Product-led Approach',
        'Customer Journey Analytics',
        'Sprint Planning & Execution',
      ],
    },
    {
      title: 'Risk & Controls',
      icon: Shield,
      skills: [
        'Issue Management',
        'Risk Assessments',
        'Controls Operations in Financial Services',
        'Compliance Requirements',
      ],
    },
    {
      title: 'Analytics & Tools',
      icon: BarChart3,
      skills: [
        'Jira & Confluence',
        'Adobe Analytics',
        'AppsFlyer',
        'Advanced Microsoft Office',
        'Google Workspace',
        'AI Tools',
      ],
    },
    {
      title: 'Leadership & Communication',
      icon: Users,
      skills: [
        'Cross-functional Leadership',
        'Executive Presentations',
        'Stakeholder Management',
        'Peer Mentorship',
      ],
    },
    {
      title: 'Technical Expertise',
      icon: Settings,
      skills: [
        'IAM Systems',
        'Cloud Infrastructure',
        'API Integration',
        'Digital Platforms',
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent mb-12 text-center">
            Core Competencies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-emerald-400/30 p-6 rounded-xl hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-400/20 transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="text-slate-900" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                        <span className="text-emerald-400 mt-1">•</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
