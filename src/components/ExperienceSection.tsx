
import React from 'react';
import { experiences } from '../constants.tsx';
import AnimatedSection from './AnimatedSection.tsx';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-4xl font-serif font-bold text-center text-gray-900 dark:text-white mb-12">
      {children}
    </h2>
);

const ExperienceSection: React.FC = () => {
  return (
    <AnimatedSection id="experience" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <SectionTitle>Work Experience</SectionTitle>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12">
              <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-5/12"></div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 rounded-full bg-accent z-10"></div>
                </div>
                <div className="w-5/12">
                  <AnimatedSection as="div" className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700`}>
                    <p className="text-sm font-medium text-accent dark:text-accent-hover">{exp.period}</p>
                    <h3 className="text-xl font-bold mt-1 text-gray-900 dark:text-white">{exp.role}</h3>
                    <p className="text-md font-semibold text-gray-600 dark:text-gray-300">{exp.company} - {exp.location}</p>
                    <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600 dark:text-gray-400">
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded-full">{skill}</span>
                      ))}
                    </div>
                  </AnimatedSection>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ExperienceSection;