import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppRoutes } from './router/AppRoutes'
import { AudioProvider } from './context/Audio'
import { SearchProvider } from './context/Search'
import { LikedTracksProvider } from './context/LikedSongs'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LikedTracksProvider>
      <AudioProvider>
        <QueryClientProvider client={new QueryClient()}>
           <SearchProvider>
              <AppRoutes/>
            </SearchProvider>
       </QueryClientProvider>
      </AudioProvider>
    </LikedTracksProvider>
  </React.StrictMode>
)
