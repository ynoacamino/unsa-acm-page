import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons'

export default function ChangeTheme() {
  const [theme, setTheme] = useState<String>("light");

  useEffect(() => {
    setTheme(localStorage.getItem('theme') || "light");
  }, []);
  const handdleClick = () => {
    if (theme === 'dark') {
      setTheme('light');
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
      document.documentElement.style.colorScheme = 'light'
    } else {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark'
    }
  };

  return (
    <button
      onClick={handdleClick}
      className="bg-primary w-8 h-8 rounded-md flex items-center justify-center text-background"
      aria-label="button"
      type="button"
    >
      <SunIcon className="h-[1.5rem] w-[1.5rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.5rem] w-[1.5rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Escoge el tema</span>
    </button>
  );
}
