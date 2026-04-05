import { useEffect, useMemo } from "react"
import { useParams } from "react-router-dom"
import { MOVIES_MOCK } from "../mock-data"
import type { Movie } from "../types/movieType"
import { BackgroundImage } from "./ui/BackgroundImage"
import { MainCharacter } from "./ui/MainCharacter"
import { MovieDescription } from "./ui/MovieDescription"
import { SeasonsLinks } from "./ui/SeasonsLinks"
import { SectionWithMovieSlider } from "./ui/SectionWithMovieSlider"
import { SocialLinksVidget } from "./ui/SocialLinksVidget"

export function MainContent() {
  const { id } = useParams()
  const data = MOVIES_MOCK as Movie[]

  const movie = useMemo(() => {
    return data.find(movie => movie.id === id)
  }, [id, data])

  useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])
  if (!movie)
    return (
      <div className="h-screen flex justify-center items-center">
        <p>Movie not found!</p>
      </div>
    )

  return (
    <main className="p-6 xl:p-12 relative bg-bg h-screen grid grid-row-1 xl:grid-rows-[auto_253px] justify-items-center">
      <BackgroundImage imageLink={movie.assets.background} />

      <div className="relative z-10 grid grid-cols-1 xl:grid-cols-2 font-saira! tracking-wider w-full max-w-495 max-h-235.5">
        <div className="flex gap-12 items-center">
          <SeasonsLinks seasonLinks={movie.seasons} />

          <MovieDescription movie={movie} />
        </div>
        <MainCharacter imageLink={movie.assets.mainCharacter} />
        <SocialLinksVidget />
      </div>
      <SectionWithMovieSlider sectionTitle="Recommandation" movies={data} />
    </main>
  )
}
