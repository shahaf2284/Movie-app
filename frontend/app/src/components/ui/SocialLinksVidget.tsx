import { motion } from "framer-motion"
import { Facebook, Github, Linkedin, Twitter } from "lucide-react"
import { Link } from "react-router-dom"
export function SocialLinksVidget() {
  return (
    <motion.ul
      className="absolute top-1/2 right-0 -translate-x-full -translate-y-1/2 hidden xl:flex flex-col gap-6"
      initial={{ translateX: "100px", opacity: 0 }}
      animate={{ translateX: "0px", opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <li className="bg-text-muted/10 rounded-full hover:scale-105 duration-300">
        <Link
          to="https://www.facebook.com/nikitabenzin23/"
          className="flex items-center justify-center w-10 h-10"
        >
          <Facebook />
        </Link>
      </li>
      <li className="bg-text-muted/10 rounded-full hover:scale-105 duration-300">
        <Link
          to="https://www.linkedin.com/in/mykyta-korotych-9a45813a1/"
          className="flex items-center justify-center w-10 h-10"
        >
          <Linkedin />
        </Link>
      </li>
      <li className="bg-text-muted/10 rounded-full hover:scale-105 duration-300">
        <Link
          to="https://x.com/home"
          className="flex items-center justify-center w-10 h-10"
        >
          <Twitter />
        </Link>
      </li>
      <li className="bg-text-muted/10 rounded-full hover:scale-105 duration-300">
        <Link
          to="https://github.com/NikitaBenzin"
          className="flex items-center justify-center w-10 h-10"
        >
          <Github />
        </Link>
      </li>
    </motion.ul>
  )
}
