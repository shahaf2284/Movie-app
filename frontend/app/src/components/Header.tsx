import { Link } from "react-router-dom"
import { PUBLIC_PAGE } from "../config/pages/public-page.config"
import usePath from "../hooks/usePath"

import { motion } from "framer-motion"

export function Header() {
  const path = usePath()
  return (
    <header className="fixed z-40 w-full hidden xl:flex justify-center items-center py-6">
      <div className="absolute left-1/2 top-0 -translate-1/2 w-2xl h-128 bg-red-600/10 blur-3xl rounded-full"></div>
      <nav>
        <motion.ul
          className="flex gap-12 items-center"
          initial={{ translateY: "-50px", scale: "10%" }}
          animate={{ translateY: "0px", scale: "100%" }}
          transition={{ duration: 0.8 }}
        >
          <li>
            <Link
              className={`${
                path === PUBLIC_PAGE.HOME ? "text-text" : "text-text-muted"
              }`}
              to={PUBLIC_PAGE.HOME}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`${
                path === PUBLIC_PAGE.MOVIES ? "text-text" : "text-text-muted"
              }`}
              to={`${PUBLIC_PAGE.MOVIE}/peaky-blinders`}
            >
              Movies
            </Link>
          </li>
          <li>
            <img
              className="w-18"
              src="/cinema-copy-logo.png"
              alt="Cinema copy logo"
              draggable={false}
            />
          </li>
          <li>
            <Link
              className={`${
                path === PUBLIC_PAGE.SERIES ? "text-text" : "text-text-muted"
              }`}
              to={PUBLIC_PAGE.SERIES}
            >
              Series
            </Link>
          </li>
          <li>
            <Link
              className={`${
                path === PUBLIC_PAGE.KIDS ? "text-text" : "text-text-muted"
              }`}
              to={PUBLIC_PAGE.KIDS}
            >
              Kids
            </Link>
          </li>
        </motion.ul>
      </nav>
    </header>
  )
}
