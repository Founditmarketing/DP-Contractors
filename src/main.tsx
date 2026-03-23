import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <style dangerouslySetInnerHTML={{__html: `
      @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Barlow:wght@800;900&family=Inter:wght@400;500&display=swap');
      
      /* FORCE BARLOW FOR HEADERS */
      h1, h2, h3, h5, h6, .font-barlow { 
          font-family: 'Barlow', sans-serif !important; 
      }
      
      /* FORCE BARLOW CONDENSED FOR MENU AND BUTTONS */
      nav, nav a, button, .font-barlow-condensed { 
          font-family: 'Barlow Condensed', sans-serif !important; 
          text-transform: uppercase !important;
          letter-spacing: 0.05em !important;
      }
      
      /* FORCE INTER FOR BODY TEXT */
      p, span, input, textarea, .font-inter { 
          font-family: 'Inter', sans-serif !important; 
      }
    `}} />
    <App />
  </StrictMode>,
);
