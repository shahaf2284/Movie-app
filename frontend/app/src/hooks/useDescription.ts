import { useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

export const useDescription = () => {
  const { id } = useParams()

  const logoControls = useAnimation()
  const descriptionControls = useAnimation()
  useEffect(() => {
    logoControls.start({
      opacity: [0, 1],
      transition: { duration: 1, delay: 0.5 },
    })
    descriptionControls.start({
      opacity: [0, 1],
      y: [-50, 0],
      transition: { duration: 1, delay: 1 },
    })
  }, [logoControls, descriptionControls, id])

  return {
    logoControls,
    descriptionControls,
  }
}
