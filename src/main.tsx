import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppRoutes } from './router/AppRoutes'
import { AudioProvider } from './context/Audio'
import { SearchProvider } from './context/Search'
import { LikedTracksProvider } from './context/LikedSongs'
import { Auth0Provider } from '@auth0/auth0-react';

const {
  VITE_AUTH0_DOMAIN: domain,
  VITE_AUTH0_CLIENT_ID: clientId,
  // VITE_AUTH0_AUDIENCE: audience
} = import.meta.env;
const redirectUri: string = window.location.origin

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        // audience: audience,
      }}
    >
      <LikedTracksProvider>
        <AudioProvider>
          <QueryClientProvider client={new QueryClient()}>
            <SearchProvider>
                <AppRoutes/>
              </SearchProvider>
        </QueryClientProvider>
        </AudioProvider>
      </LikedTracksProvider>

    </Auth0Provider>
  </React.StrictMode>
)
