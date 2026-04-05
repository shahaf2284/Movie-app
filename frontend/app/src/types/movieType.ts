export interface SeasonLink {
  number: number
  link: string
}

export interface Movie extends MovieDescription {
  id: string
  title: string
  trailerId: string
  mainCharacterName: string
  assets: {
    background: string
    videoCover: string
    mainCharacter: string
    logo: string
  }
  seasons: SeasonLink[]
}

export interface MovieDescription {
  releaseYear: number
  ageLimit: string
  rating: string
  duration: string
  description: string
}
