const usePath = () => {
  const pathname = window.location.pathname
  const initialPath = pathname.substring(1)
  const path = pathname.replace(initialPath, "")
  return path
}

export default usePath
