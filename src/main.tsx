import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from './pages/Home/index'
import Navbar from './components/bottomNavbar/Navbar'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <Home />
      <Navbar />
    </QueryClientProvider>
  </React.StrictMode>
)
