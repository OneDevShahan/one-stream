"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";

const ThemeProvider = ({ children }) => {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={true}
    >
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
