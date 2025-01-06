import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import ErrorMessage from './Components/ErrorBoundary/ErrorMessage.tsx';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary.tsx';
import Loader from './Components/Loader/Loader.tsx';

const App = lazy(() => import('./App.tsx'));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundary fallback={<ErrorMessage />}>
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </ErrorBoundary>
    </Provider>
  </StrictMode>
);
