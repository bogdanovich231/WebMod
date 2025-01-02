import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import ErrorMessage from './Components/ErrorBoundary/ErrorMessage.tsx';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundary fallback={<ErrorMessage />}>
        <App />
      </ErrorBoundary>
    </Provider>
  </StrictMode>
);
