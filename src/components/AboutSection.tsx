
import React from 'react';
import AnimatedSection from './AnimatedSection.tsx';
import profileImage from '../assets/images/kousik_roy.jpeg';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl font-serif font-bold text-center text-gray-900 dark:text-white mb-12">
    {children}
  </h2>
);

const AboutSection: React.FC = () => {
  return (
    <AnimatedSection id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <SectionTitle>About Me</SectionTitle>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <img
            src={profileImage}
            alt="Kousik Roy"
            className="rounded-full w-48 h-48 md:w-60 md:h-60 object-cover shadow-lg border-4 border-white dark:border-gray-700"
          />
          <div className="text-lg text-gray-600 dark:text-gray-300 space-y-4 text-center md:text-left">
            <p>
              I am an Embedded Software Engineer with a B-tech in Electronics and Communication from Charotar University of Science and Technology (CGPA: 9.25/10.0). My expertise lies in C, C++, and Python and multiple frameworks and SDK's.
            </p>
            <p>
              With hands-on experience in developing features for network access points and creating robust scalable automation scripts, I thrive on solving complex technical challenges. I am dedicated to writing clean, efficient, and reliable code to build cutting-edge technology.
            </p>
             <p>
              I am also passionate about Web Application Development and have delivered multiple frontend and backend projects as a gig worker.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;