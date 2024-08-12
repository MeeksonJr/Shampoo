import { useState, useEffect } from 'react';
import './ThemeToggle.css'; // Import the CSS for styling

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Apply the dark mode class based on the current state
  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <button 
      className={`theme-toggle-button ${isDarkMode ? 'dark' : 'light'}`}
      onClick={toggleTheme}
    >
      {isDarkMode ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
}
