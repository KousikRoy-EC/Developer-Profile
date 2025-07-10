
import React from 'react';
import { skillCategories, achievements } from '../constants.tsx';
import AnimatedSection from './AnimatedSection.tsx';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-4xl font-serif font-bold text-center text-gray-900 dark:text-white mb-12">
      {children}
    </h2>
);

const SkillsSection: React.FC = () => {
  return (
    <AnimatedSection id="skills" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <SectionTitle>Technologies & Skills</SectionTitle>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <AnimatedSection as="div" key={category.name} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold font-serif text-center mb-4 text-gray-800 dark:text-white">{category.name}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="bg-accent/10 text-accent-darker dark:bg-accent/20 dark:text-accent-lighter text-sm font-medium px-3 py-1 rounded-full">{skill}</span>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-24">
            <h3 className="text-3xl font-serif font-bold text-center text-gray-900 dark:text-white mb-8">Achievements</h3>
            <div className="max-w-2xl mx-auto space-y-4">
                {achievements.map((ach, index) => (
                    <AnimatedSection as="div" key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border-l-4 border-accent">
                        <p className="text-gray-700 dark:text-gray-300">{ach.description}</p>
                    </AnimatedSection>
                ))}
            </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default SkillsSection;