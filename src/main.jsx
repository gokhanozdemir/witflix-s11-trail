import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import App from './App.jsx';
import ProvideAuth from './contexts/AuthContext.jsx';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ProvideAuth>
        <QueryClientProvider client={queryClient}>
          <ToastContainer />
          <App />
        </QueryClientProvider>
      </ProvideAuth>
    </BrowserRouter>
  </StrictMode>
);