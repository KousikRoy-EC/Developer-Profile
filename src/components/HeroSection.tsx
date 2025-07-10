
import React from 'react';
import { socialLinks, GithubIcon, LinkedinIcon, MailIcon } from '../constants.tsx';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-light dark:bg-dark">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 dark:text-white">
            Kousik Roy
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-accent dark:text-accent-hover font-semibold">
            Embedded Systems Developer
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Passionate about building robust firmware and software solutions for networking and IoT. Turning complex problems into elegant, efficient code.
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent-hover transition-transform duration-300 hover:scale-110">
              <GithubIcon className="w-8 h-8" />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent-hover transition-transform duration-300 hover:scale-110">
              <LinkedinIcon className="w-8 h-8" />
            </a>
            <a href={socialLinks.email} className="text-gray-500 dark:text-gray-400 hover:text-accent dark:hover:text-accent-hover transition-transform duration-300 hover:scale-110">
              <MailIcon className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;