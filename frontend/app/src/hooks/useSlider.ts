import { useState } from "react"

export const useSlider = (moviesLength: number) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 5
  const totalPages = Math.ceil(moviesLength / itemsPerPage)
  const next = () => {
    setCurrentIndex(prev => (prev + 1) % totalPages)
  }

  const prev = () => {
    setCurrentIndex(prev => (prev - 1 + totalPages) % totalPages)
  }

  return {
    currentIndex,
    prev,
    next,
  }
}
