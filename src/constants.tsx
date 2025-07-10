
import React from 'react';
import type { Experience, Project, SkillCategory, Achievement } from './types.ts';

export const experiences: Experience[] = [
  {
    role: 'Embedded Developer',
    company: 'Quantum Networks',
    period: 'Dec 2023 - Present',
    location: 'Ahmedabad',
    description: [
      'Designed and implemented feature enhancements on access point products using C and Python Scripting within a Linux environment.',
      'Developed and maintained configuration files to enable and test new features in various networking modules.',
      'Integrated with the Rudder Cloud Controller to streamline and verify wireless and wired configurations remotely.',
      'Collaborated closely with cross-functional teams to deliver robust networking solutions aligned with IEEE 802.11.',
    ],
    skills: ['C', 'C++', 'Python', 'Docker', 'OpenWrt', 'SDK-Qualcomm', 'iptables'],
  },
  {
    role: 'Embedded Developer Intern',
    company: 'Einfochips - (Arrow Company)',
    period: 'May 2023 - Jul 2023',
    location: 'Ahmedabad',
    description: [
      'Developed a custom Watchdog Timer in C, enabling fault recovery and ensuring system reliability by detecting software anomalies.',
      'Implemented automation testing script for system-level APIs, reducing manual test efforts and improving defect detection accuracy.',
    ],
    skills: ['C', 'Python', 'API testing', 'Automation'],
  },
];

export const projects: Project[] = [
  {
    title: 'Wifi Development',
    description: [
      'Played a key role in the device bring-up of Access Points, aligning with hardware and networking standards.',
      'Led the feature development team of 2 members, ensuring that the AP met the highest standards of performance and reliability.',
      'Worked on C based agent to fetch the data from netlink and ioctl driver to avoid system calls, reducing device bring up time.',
      'Implemented features like application filtering and application statistics.',
    ],
    technologies: ['C', 'Linux', 'Networking', 'Netlink', 'ioctl'],
  },
  {
    title: 'Handwritten Text Classification',
    description: [
      'Developed a Convolutional Neural Network (CNN) from scratch, implementing both forward and backward propagation algorithms.',
      'Trained a robust Keras model for handwritten text detection, leveraging custom CNN layers to achieve high accuracy.',
    ],
    technologies: ['Python', 'Keras', 'CNN', 'Machine Learning'],
  },
];

export const skillCategories: SkillCategory[] = [
    {
        name: 'Languages',
        skills: ['C', 'C++', 'Python', 'JavaScript', 'Shell Scripting']
    },
    {
        name: 'Technologies',
        skills: ['ARM', 'I2C', 'SPI', 'UART', 'GIT', 'OpenCV', 'Arduino', 'Linux', 'OpenWRT', 'MQTT', 'Docker']
    },
    {
        name: 'Networking',
        skills: ['IEEE 802.11', 'iptables', 'Netlink', 'ioctl']
    }
];

export const achievements: Achievement[] = [
    {
        description: 'Awarded with DXC Progressive mind Scholarship.'
    },
    {
        description: 'Organised and Judged multiple Coding Hackathons at college level.'
    }
];

export const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export const socialLinks = {
  email: 'mailto:kaushikroy1001@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kousik-roy-embedded/', // Placeholder
  github: 'https://github.com/kousik-roy-1001', // Placeholder
};

// SVG Icons
export const SunIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

export const MoonIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

export const GithubIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
    </svg>
);

export const LinkedinIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

export const MailIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
    </svg>
);