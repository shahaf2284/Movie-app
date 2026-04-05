import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import usePath from "../../hooks/usePath"
import type { SeasonLink } from "../../types/movieType"
interface Props {
  seasonLinks: SeasonLink[]
}

export function SeasonsLinks({ seasonLinks }: Props) {
  const path = usePath()

  return (
    <motion.ul
      className="hidden xl:flex flex-col-reverse gap-6"
      initial={{ translateX: "-100px", opacity: 0 }}
      animate={{ translateX: "0px", opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {seasonLinks.length ? (
        seasonLinks.map((season, idx) => (
          <li key={idx}>
            <Link
              className={`${
                season.link === path || idx === 0
                  ? "text-text border-l border-text"
                  : "text-text-muted"
              } [writing-mode:vertical-rl] pl-2 rotate-180`}
              to={season.link}
            >
              Season {idx + 1}
            </Link>
          </li>
        ))
      ) : (
        <li className="text-text border-l border-text [writing-mode:vertical-rl] pl-2 rotate-180">
          Film
        </li>
      )}
    </motion.ul>
  )
}
