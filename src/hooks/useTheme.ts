import { useEffect, useLayoutEffect, useState } from "react";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "book-tracker-theme";

function getThemeConfig() {
  const rootStyles = getComputedStyle(document.documentElement);

  const configuredTheme = rootStyles.getPropertyValue("--default-theme").trim();

  const defaultTheme: Theme = configuredTheme === "dark" ? "dark" : "light";

  const enableSystemTheme = rootStyles.getPropertyValue("--enable-system-theme").trim() === "true";

  return { defaultTheme, enableSystemTheme };
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    // 1. Scelta salvata.
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    // 2. Tema già impostato nell'HTML.
    const explicitTheme = document.documentElement.dataset.theme;

    if (explicitTheme === "light" || explicitTheme === "dark") {
      return explicitTheme;
    }

    const { defaultTheme, enableSystemTheme } = getThemeConfig();

    // 3. Preferenza del sistema, se abilitata.
    if (enableSystemTheme) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      return prefersDark ? "dark" : "light";
    }

    // 4. Tema predefinito.
    return defaultTheme;
  });

  // Applica al documento l'eventuale scelta salvata.
  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

    if (savedTheme === "light" || savedTheme === "dark") {
      document.documentElement.dataset.theme = savedTheme;
    }
  }, []);

  // Segue i cambiamenti del sistema quando consentito.
  useEffect(() => {
    const { enableSystemTheme } = getThemeConfig();

    if (!enableSystemTheme) return;

    const systemThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (event: MediaQueryListEvent) => {
      const explicitTheme = document.documentElement.dataset.theme;

      if (explicitTheme !== "light" && explicitTheme !== "dark") {
        setTheme(event.matches ? "dark" : "light");
      }
    };

    systemThemeQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
      systemThemeQuery.removeEventListener("change", handleSystemThemeChange);
    };
  }, []);

  // Imposta e salva una scelta esplicita.
  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  };

  return { theme, toggleTheme };
}
