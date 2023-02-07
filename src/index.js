import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './core/App';
import reportWebVitals from './reportWebVitals';
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";

const queryClient = new QueryClient({
  defaultOptions:{
    queries: {
      staleTime: 5000,
      retry: 0,
    }
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools/>
      <App/>
    </QueryClientProvider>
);

reportWebVitals();