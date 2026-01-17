# 🦄 Unicorn Background Animation Implementation Guide

This guide explains how the unicorn background animation works and how to implement it on other websites.

## 📋 Table of Contents

- [Overview](#overview)
- [Core Concept](#core-concept)
- [Component Logic](#component-logic)
- [Implementation Steps](#implementation-steps)
- [Code Examples](#code-examples)
- [Configuration Options](#configuration-options)
- [Performance Notes](#performance-notes)

## Overview

The unicorn background animation uses **Unicorn Studio**, a third-party service that provides interactive WebGL animations that can be embedded in websites. The component dynamically loads the Unicorn Studio library and initializes a specific animation project.

## Core Concept

### **Project ID System**
```typescript
data-us-project="3Jmv1siGLwAl4euBgkch"
```
- Each animation has a unique identifier from Unicorn Studio
- Project IDs are obtained when creating animations on their platform
- The animation is loaded and rendered based on this ID

### **Dynamic Loading**
- Unicorn Studio library is loaded asynchronously to prevent page blocking
- Fallback mechanisms ensure animation loads even if primary CDN fails
- Client-side only rendering prevents hydration issues

## Component Logic

### **1. Project ID Configuration**
```typescript
data-us-project="3Jmv1siGLwAl4euBgkch"
```
- Unique identifier for the specific animation project
- Links to animation hosted on Unicorn Studio platform

### **2. Dynamic Script Loading**
```typescript
const script = document.createElement('script');
script.src = 'https://cdn.unicorn-studio.com/v2.0.0/unicornStudio.umd.js';
script.async = true;
```
- Dynamically loads Unicorn Studio library from CDN
- Async loading prevents blocking page render
- Includes fallback CDN URL for redundancy

### **3. Initialization Logic**
```typescript
const init = () => {
  try {
    if (window?.UnicornStudio?.init) {
      window.UnicornStudio.init();
      const target = document.querySelector('[data-us-project]');
      if (target) target.classList.add('fade-in');
      return true;
    }
  } catch {}
  return false;
};
```
- Checks if library is loaded and available
- Initializes the animation system
- Adds fade-in effect for smooth appearance
- Returns success/failure status for retry logic

### **4. Retry Mechanism**
```typescript
if (!init()) [300, 600, 1200].forEach((d) => setTimeout(init, d));
```
- Retries initialization at 300ms, 600ms, and 1200ms intervals
- Handles timing issues where DOM or library might not be ready
- Ensures animation loads even with network delays

### **5. Client-Side Only Rendering**
```typescript
const [mounted, setMounted] = useState(false);
useEffect(() => setMounted(true), []);
```
- Prevents hydration mismatches between server and client
- Only renders animation container after client-side mount
- Essential for Next.js SSR compatibility

## Implementation Steps

### **Step 1: Create Animation Project**
1. Visit [Unicorn Studio](https://unicorn-studio.com)
2. Create an account and design your animation
3. Publish your project and copy the project ID

### **Step 2: Choose Implementation Method**
- **React/Next.js**: Use the component approach
- **Vanilla HTML/JS**: Use script-based approach
- **Other frameworks**: Adapt the logic accordingly

### **Step 3: Configure Positioning**
- Set `position: fixed` for full-screen background
- Use `z-index: -1` to keep behind content
- Add `pointer-events: none` to prevent interaction blocking

### **Step 4: Test and Optimize**
- Verify animation loads on different devices
- Test fallback mechanisms
- Optimize for performance if needed

## Code Examples

### **React/Next.js Component**
```typescript
"use client";
import { useEffect, useState } from "react";

interface CustomBackgroundProps {
  projectId: string;
  className?: string;
}

export default function CustomBackground({ projectId, className = "" }: CustomBackgroundProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    
    const init = () => {
      try {
        // @ts-ignore
        if (window?.UnicornStudio?.init) {
          // @ts-ignore
          window.UnicornStudio.init();
          const target = document.querySelector('[data-us-project]');
          if (target) target.classList.add('fade-in');
          return true;
        }
      } catch {}
      return false;
    };

    if (init()) return;

    const script = document.createElement('script');
    script.src = 'https://cdn.unicorn-studio.com/v2.0.0/unicornStudio.umd.js';
    script.async = true;
    script.onload = () => {
      if (!init()) [300, 600, 1200].forEach((d) => setTimeout(init, d));
    };
    script.onerror = () => {
      // Fallback CDN
      const fallback = document.createElement('script');
      fallback.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.31/dist/unicornStudio.umd.js';
      fallback.async = true;
      fallback.onload = () => {
        if (!init()) [300, 600, 1200].forEach((d) => setTimeout(init, d));
      };
      document.head.appendChild(fallback);
    };
    document.head.appendChild(script);
  }, [mounted]);

  return (
    <div
      data-us-project={mounted ? projectId : undefined}
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
```

### **Usage in React**
```tsx
import CustomBackground from './components/CustomBackground';

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <CustomBackground projectId="YOUR_PROJECT_ID_HERE" />
      <main className="relative z-10">
        <h1>Your Content Here</h1>
        <p>The animation will appear behind this content.</p>
      </main>
    </div>
  );
}
```

### **Vanilla HTML/JavaScript Implementation**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Unicorn Animation Example</title>
  <style>
    .unicorn-background {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      pointer-events: none;
    }
    
    .content {
      position: relative;
      z-index: 1;
      padding: 50px;
      text-align: center;
    }
    
    .fade-in {
      animation: fadeIn 1s ease-in-out;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  </style>
</head>
<body>
  <!-- Animation Container -->
  <div id="unicorn-animation" 
       data-us-project="YOUR_PROJECT_ID" 
       class="unicorn-background">
  </div>
  
  <!-- Your Content -->
  <div class="content">
    <h1>Welcome to My Website</h1>
    <p>Beautiful background animation powered by Unicorn Studio</p>
  </div>

  <script>
    function initUnicornStudio() {
      try {
        if (window.UnicornStudio && window.UnicornStudio.init) {
          window.UnicornStudio.init();
          const target = document.querySelector('[data-us-project]');
          if (target) target.classList.add('fade-in');
          return true;
        }
      } catch (error) {
        console.log('Unicorn Studio initialization failed:', error);
      }
      return false;
    }

    function loadUnicornStudio() {
      if (initUnicornStudio()) return;

      const script = document.createElement('script');
      script.src = 'https://cdn.unicorn-studio.com/v2.0.0/unicornStudio.umd.js';
      script.async = true;
      
      script.onload = () => {
        if (!initUnicornStudio()) {
          // Retry with delays
          [300, 600, 1200].forEach(delay => 
            setTimeout(initUnicornStudio, delay)
          );
        }
      };
      
      script.onerror = () => {
        // Fallback CDN
        const fallback = document.createElement('script');
        fallback.src = 'https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.31/dist/unicornStudio.umd.js';
        fallback.async = true;
        fallback.onload = () => {
          if (!initUnicornStudio()) {
            [300, 600, 1200].forEach(delay => 
              setTimeout(initUnicornStudio, delay)
            );
          }
        };
        document.head.appendChild(fallback);
      };
      
      document.head.appendChild(script);
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadUnicornStudio);
    } else {
      loadUnicornStudio();
    }
  </script>
</body>
</html>
```

### **Vue.js Implementation**
```vue
<template>
  <div
    ref="unicornContainer"
    :data-us-project="mounted ? projectId : undefined"
    class="unicorn-background"
    :style="backgroundStyle"
  />
</template>

<script>
export default {
  name: 'UnicornBackground',
  props: {
    projectId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      mounted: false
    };
  },
  computed: {
    backgroundStyle() {
      return {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      };
    }
  },
  mounted() {
    this.mounted = true;
    this.loadUnicornStudio();
  },
  methods: {
    initUnicornStudio() {
      try {
        if (window.UnicornStudio && window.UnicornStudio.init) {
          window.UnicornStudio.init();
          const target = this.$refs.unicornContainer;
          if (target) target.classList.add('fade-in');
          return true;
        }
      } catch (error) {
        console.log('Unicorn Studio initialization failed:', error);
      }
      return false;
    },
    loadUnicornStudio() {
      if (this.initUnicornStudio()) return;

      const script = document.createElement('script');
      script.src = 'https://cdn.unicorn-studio.com/v2.0.0/unicornStudio.umd.js';
      script.async = true;
      
      script.onload = () => {
        if (!this.initUnicornStudio()) {
          [300, 600, 1200].forEach(delay => 
            setTimeout(() => this.initUnicornStudio(), delay)
          );
        }
      };
      
      document.head.appendChild(script);
    }
  }
};
</script>

<style scoped>
.fade-in {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
```

## Configuration Options

### **Positioning and Layering**
```css
.unicorn-background {
  position: fixed;        /* Full screen coverage */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;           /* Behind all content */
  pointer-events: none;   /* Don't block interactions */
}
```

### **Animation Controls**
```typescript
// Custom initialization with options
window.UnicornStudio.init({
  // Add custom configuration here
  autoplay: true,
  loop: true,
  responsive: true
});
```

### **Responsive Behavior**
```css
/* Hide on mobile for performance */
@media (max-width: 768px) {
  .unicorn-background {
    display: none;
  }
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  .unicorn-background {
    display: none;
  }
}
```

### **Performance Optimization**
```typescript
// Lazy load only when in viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadUnicornStudio();
      observer.disconnect();
    }
  });
});

observer.observe(document.querySelector('.unicorn-background'));
```

## Performance Notes

### **Best Practices**
- **Lazy Loading**: Only load animation when needed
- **Mobile Optimization**: Consider disabling on mobile devices
- **Accessibility**: Respect `prefers-reduced-motion` setting
- **Error Handling**: Always include fallback mechanisms
- **Resource Management**: Clean up animations when component unmounts

### **Browser Support**
- **WebGL Support**: Required for animations
- **Modern Browsers**: Chrome 51+, Firefox 51+, Safari 10+, Edge 79+
- **Fallback**: Provide static background for unsupported browsers

### **Loading Performance**
- Script is loaded asynchronously (non-blocking)
- Animation initializes after page load
- Fallback CDN ensures reliability
- Retry mechanism handles network issues

## Common Issues and Solutions

### **Animation Not Loading**
1. Check if project ID is correct
2. Verify CDN accessibility
3. Check browser console for errors
4. Ensure WebGL is supported

### **Hydration Errors (React/Next.js)**
- Use `suppressHydrationWarning` prop
- Implement client-side only rendering
- Wrap in `useEffect` with mounted state

### **Performance Issues**
- Disable on mobile devices
- Respect reduced motion preferences
- Implement lazy loading
- Monitor memory usage

## Additional Resources

- [Unicorn Studio Official Documentation](https://unicorn-studio.com/docs)
- [WebGL Browser Support](https://caniuse.com/webgl)
- [Reduced Motion Accessibility](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)

---

**Created for OFFEO AI Tools Project**  
*Last Updated: September 30, 2025*