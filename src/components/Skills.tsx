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
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Core Competencies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Icon className="text-white" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-start gap-2">
                        <span className="text-blue-600 mt-1">•</span>
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
