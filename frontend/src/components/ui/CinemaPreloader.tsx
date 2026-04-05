import { motion } from "framer-motion"

export const CinemaPreloader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-100 flex items-center justify-center bg-bg"
      exit={{ opacity: 0, scale: 1.1 }} // Анимация исчезновения
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          filter: [
            "drop-shadow(0 0 5px rgba(229,9,20,0))",
            "drop-shadow(0 0 20px rgba(229,9,20,0.8))",
            "drop-shadow(0 0 5px rgba(229,9,20,0))",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          className="w-42"
          src="/cinema-copy-logo.png"
          alt="Cinema copy logo"
          draggable={false}
        />
      </motion.div>
    </motion.div>
  )
}
