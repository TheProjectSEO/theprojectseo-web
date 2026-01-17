"use client";
import { useEffect, useState } from "react";

interface UnicornBackgroundProps {
  projectId?: string;
  className?: string;
}

export default function UnicornBackground({ 
  projectId = "3Jmv1siGLwAl4euBgkch", 
  className = "" 
}: UnicornBackgroundProps) {
  const [mounted, setMounted] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsClient(typeof window !== 'undefined');
  }, []);

  useEffect(() => {
    if (!mounted || !isClient) return;
    
    const init = () => {
      try {
        // @ts-expect-error - UnicornStudio types not available
        if (window?.UnicornStudio?.init) {
          // @ts-expect-error - UnicornStudio types not available
          window.UnicornStudio.init();
          const target = document.querySelector('[data-us-project]');
          if (target) target.classList.add('fade-in');
          return true;
        }
      } catch (error) {
        console.log('Unicorn Studio initialization failed:', error);
      }
      return false;
    };

    // Check if script already exists
    const existingScript = document.querySelector('script[src*="unicornStudio"]');
    if (existingScript) {
      if (!init()) [300, 600, 1200].forEach((d) => setTimeout(init, d));
      return;
    }

    if (init()) return;

    const script = document.createElement('script');
    script.src = 'https://cdn.unicorn-studio.com/v2.0.0/unicornStudio.umd.js';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (!init()) [300, 600, 1200].forEach((d) => setTimeout(init, d));
    };
    script.onerror = () => {
      // Fallback CDN
      const fallback = document.createElement('script');
      fallback.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.31/dist/unicornStudio.umd.js';
      fallback.async = true;
      fallback.defer = true;
      fallback.onload = () => {
        if (!init()) [300, 600, 1200].forEach((d) => setTimeout(init, d));
      };
      document.head.appendChild(fallback);
    };
    document.head.appendChild(script);
  }, [mounted, isClient]);

  // Don't render anything during SSR
  if (!mounted || !isClient) {
    return null;
  }

  return (
    <div
      data-us-project={projectId}
      className={`unicorn-background ${className}`}
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: -1,
        pointerEvents: 'none'
      }}
      suppressHydrationWarning
    />
  );
}