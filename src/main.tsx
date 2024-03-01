import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { UserPage } from './pages/UserPage/index.tsx'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
    <UserPage user={{
    id: 1,
    first_name: "Assembler",
    last_name: "Institute",
    email: "music@assemblerschool.com",
    profilePicture: "/src/assets/profile_pic.png",
    isLoggedin: false
    }} />
    </QueryClientProvider>
  </React.StrictMode>
)
