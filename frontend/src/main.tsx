import { createRoot } from 'react-dom/client'
import "@mantine/core/styles.css"; // Always make sure that you put this in the beigining because 
import './index.css'               // you do not want it to rewrite already exiting css ok!!!
import "./styles/theme.css";
import "./styles/global.css";

import App from './App.tsx';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter } from 'react-router';


// Make sure to wrap the app componnent with mantain provider!
createRoot(document.getElementById('root')!).render(
  
  <MantineProvider> 
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </MantineProvider>

)
