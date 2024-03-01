import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { SongPage } from './pages/SongPage/index.tsx';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
    <SongPage song={
      {
        id: 1,
        name: "Better of alone",
        artist: "RXBYN",
        url: "/src/assets/default-song/song.mp3",
        thumbnail: "/src/assets/track-img/default-track-img.png",
        genre: "piano",
        liked: false
      }
    }/>
    </QueryClientProvider>
  </React.StrictMode>
);
