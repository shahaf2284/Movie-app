import { motion } from "framer-motion"
import { Play } from "lucide-react"
import { useDescription } from "../../hooks/useDescription"
import type { Movie } from "../../types/movieType"
interface Props {
  movie: Movie
}

export function MovieDescription({ movie }: Props) {
  const { ageLimit, description, duration, rating, releaseYear, assets } = movie
  const { descriptionControls, logoControls } = useDescription()

  return (
    <div className="flex flex-col items-start gap-6">
      <motion.img
        className="w-85"
        src={assets.logo}
        alt="Movie name."
        draggable={false}
        animate={logoControls}
      />
      <motion.div
        className="flex flex-col items-start gap-6"
        animate={descriptionControls}
      >
        <div className="text-text-muted! flex gap-6 items-center">
          <span>{releaseYear}</span>
          <span className="border border-text-muted rounded-sm px-2.5">
            {ageLimit}
          </span>
          <span>IMDb {rating}</span>
          <span>{duration}</span>
        </div>
        <p className="font-extralight max-w-140">{description}</p>
        <div className="flex items-center gap-4">
          <button className="w-15 h-15 bg-accent rounded-full flex items-center justify-center hover:scale-105 duration-300">
            <Play className="text-text" fill="var(--text)" size={20} />
          </button>
          <span className="uppercase tracking-[0.15rem]">Watch Trailer</span>
        </div>
      </motion.div>
    </div>
  )
}
