'use client';

import { createContext, useContext } from 'react';
import { useRouter } from 'next/navigation';

const NavigationContext = createContext();

export function NavigationProvider({ children }) {
  const router = useRouter();

  const navigate = (path) => {
    router.push(path);
    // Force a hard navigation if client-side navigation fails
    setTimeout(() => {
      if (window.location.pathname !== path) {
        window.location.href = path;
      }
    }, 100);
  };

  return (
    <NavigationContext.Provider value={{ navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
