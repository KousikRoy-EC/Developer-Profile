import React from 'react';
import { socialLinks, GithubIcon, LinkedinIcon, MailIcon } from '../constants.tsx';

import AnimatedSection from './AnimatedSection.tsx';

const ContactSection: React.FC = () => {
  return (
    <AnimatedSection id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-serif font-bold text-gray-900 dark:text-white">
          Get In Touch
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect.
        </p>
        <a
          target="_blank"
          onClick={() => {
            const email = "kaushikroy1001@gmail.com";
            const subject = encodeURIComponent("Hello from my website");
            const body = encodeURIComponent("Hi Kaushik,\n\nI want to connect with you.");
            const gmailURL = `https://mail.google.com/mail/?view=cm&to=${email}&su=${subject}&body=${body}`;
            window.open(gmailURL, "_blank");
          }}
          className="mt-8 inline-block bg-accent hover:bg-accent-hover cursor-pointer text-white font-bold py-3 px-8 rounded-full transition-transform duration-300 hover:scale-105"
        >
          Say Hello
        </a>
        <div className="mt-12 flex justify-center space-x-8">
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
    </AnimatedSection>
  );
};

export default ContactSection;