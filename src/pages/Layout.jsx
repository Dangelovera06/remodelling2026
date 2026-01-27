import React from "react";

export default function Layout({ children }) {
  return (
    <div className="overflow-x-hidden" style={{ backgroundColor: '#FDFBF7' }}>
      <style>{`
        :root {
          /* Blog Color Palette */
          --cream: #FDFBF7;
          --warm-white: #FAF8F5;
          --charcoal: #2D2D2D;
          --warm-gray: #6B6B6B;
          --accent-gold: #B8860B;
          --accent-sage: #7D8B75;
          --border-light: #E8E4DE;
          
          /* Typography */
          --font-serif: 'Playfair Display', Georgia, serif;
          --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          
          /* Shadows */
          --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.08);
          --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08);
        }
        
        /* Prevent horizontal scroll */
        html, body {
          overflow-x: hidden;
          max-width: 100vw;
          background-color: var(--cream);
        }
        
        body {
          margin: 0;
          padding: 0;
        }
        
        * {
          box-sizing: border-box;
        }
        
        /* Smooth scroll */
        html {
          scroll-behavior: smooth;
        }
        
        /* Remove tap highlight on mobile */
        * {
          -webkit-tap-highlight-color: transparent;
        }
      `}</style>
      {children}
    </div>
  );
}
