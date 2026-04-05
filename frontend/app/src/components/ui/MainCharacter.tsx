import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
interface Props {
  imageLink: string
}
export function MainCharacter({ imageLink }: Props) {
  const { id } = useParams()
  const controls = useAnimation()
  useEffect(() => {
    controls.start({
      opacity: [0, 1],
      y: [20, 0],
      transition: { duration: 2, delay: 0.5 },
    })
  }, [controls, id])
  return (
    <div className="hidden xl:flex justify-start translate-y-1/12">
      <motion.div className="absolute" animate={controls}>
        <img
          className="character-bottom-shadow h-219.25 object-contain"
          src={imageLink}
          alt="Movie main character."
          draggable={false}
        />
        <motion.img
          className="brightness-0 invert absolute top-0 -z-10 scale-99 image-bottom-shadow h-219.25 object-contain"
          src={imageLink}
          alt="Movie main character."
          draggable={false}
          initial={{ left: 0 }} // Начальное состояние
          animate={{ left: "20px" }} // Состояние анимации
          transition={{ duration: 0.8, delay: 2 }}
        />
      </motion.div>
    </div>
  )
}
