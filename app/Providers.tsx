
"use client";

import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from 'next-themes';

const queryClient = new QueryClient();

export function Providers({ children, ...props }: React.PropsWithChildren<ThemeProviderProps>) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem {...props}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </NextThemesProvider>
  );
}
