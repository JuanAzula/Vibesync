export interface Data {
  playlists: Playlist[]
  tracks: Track[]
  user: User[]
  albums: Album[]
  artists: Artist[]
  genres: Genre[]
}

export interface Album {
  id: number
  name: string
  artist: Artists 
  thumbnail: string
  tracks: TracksOnAlbums[]
  genre: Genre
  likedByUsers: UserLikedAlbums[]
}

export interface Artist {
  id: number
  name: string
  email: string
  description: string
  password: string
  thumbnail: string
  albums: Albums[]
  genre: Genre
  followers: UserFollowsArtists[]
  popularity: number
  photoUrl: string
}

export interface Genre {
  id: number
  name: string
}

export interface Playlist {
  id: number
  name: string
  isFollowed: boolean
  thumbnail: string
  description: string
  publicAccessible: boolean
  primaryColor: PrimaryColor
  tracks: []
}

export enum PrimaryColor {
  Fbdc00 = '#fbdc00',
}

export interface Track {
  id: number
  name: string
  artist: string
  url: string
  thumbnail: string
  genre: string
  liked: boolean
}

export interface User {
  id: number
  image: string
  name: string
  email: string
  country: string
  gender: string
  birthdate: Date
  image: string
  password: string
}
