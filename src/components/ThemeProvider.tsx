"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  const orig = console.error;
  console.error = (...args) => {
    if (typeof args[0] === 'string' && args[0].includes('Encountered a script tag')) {
      return;
    }
    orig.apply(console, args);
  };
}

export function ThemeProvider({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) {
  // In React 19, dynamically injecting script tags on the client causes errors.
  // next-themes uses a script tag to prevent FOUC. By rendering it immediately
  // (during SSR), React can hydrate it without throwing the client-side script error.
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
