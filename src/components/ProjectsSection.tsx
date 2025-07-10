
import React from 'react';
import { projects } from '../constants.tsx';
import AnimatedSection from './AnimatedSection.tsx';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-4xl font-serif font-bold text-center text-gray-900 dark:text-white mb-12">
      {children}
    </h2>
);

const ProjectsSection: React.FC = () => {
  return (
    <AnimatedSection id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <SectionTitle>Projects</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <AnimatedSection as="div" key={index} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold font-serif text-gray-900 dark:text-white">{project.title}</h3>
              <ul className="mt-4 space-y-2 list-disc list-inside text-gray-600 dark:text-gray-400">
                {project.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">{tech}</span>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ProjectsSection;