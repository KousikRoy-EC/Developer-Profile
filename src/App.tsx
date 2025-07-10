
import React, { useState, useEffect, createContext, useContext } from 'react';
import Header from './components/Header.tsx';
import HeroSection from './components/HeroSection.tsx';
import AboutSection from './components/AboutSection.tsx';
import ExperienceSection from './components/ExperienceSection.tsx';
import ProjectsSection from './components/ProjectsSection.tsx';
import SkillsSection from './components/SkillsSection.tsx';
import ContactSection from './components/ContactSection.tsx';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <footer className="text-center p-4 bg-gray-100 dark:bg-gray-800 text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Kousik Roy. All Rights Reserved.</p>
        </footer>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;