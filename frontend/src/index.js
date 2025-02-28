// frontend/src/index.js
import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Spinner } from 'react-bootstrap';

// Lazy load the App component to optimize initial load time
const App = lazy(() => import('./App'));

// A simple error boundary to catch errors in the component tree
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    // Log the error details to an error reporting service if needed
    console.error("Error caught in ErrorBoundary:", error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary text-center" style={{ padding: '2rem' }}>
          <h1>Something went wrong.</h1>
          <p>Please try refreshing the page, or contact support if the issue persists.</p>
        </div>
      );
    }
    return this.props.children; 
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error("Root element not found!");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Suspense fallback={
        <div 
          className="loading d-flex justify-content-center align-items-center" 
          style={{ minHeight: '100vh' }}
        >
          <Spinner animation="border" variant="primary" />
        </div>
      }>
        <App />
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>
);

// Start measuring performance in your app
reportWebVitals();
