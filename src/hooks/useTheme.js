import { useState, useCallback } from 'react';

const STORAGE_KEY = 'wolfsdorff-theme';

function readResolvedTheme() {
  if (typeof document === 'undefined') return 'light';
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

function persistTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* ignore */
  }
}

function applyClass(theme) {
  const root = document.documentElement;
  if (theme === 'dark') root.classList.add('dark');
  else root.classList.remove('dark');
}

/**
 * Sincroniza class "dark" en <html> con preferencia guardada o sistema (script en index.html).
 */
export function useTheme() {
  const [theme, setTheme] = useState(readResolvedTheme);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      applyClass(next);
      persistTheme(next);
      return next;
    });
  }, []);

  return { theme, toggleTheme };
}
