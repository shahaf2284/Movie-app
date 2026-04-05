import { Link } from "react-router-dom"
import { Header } from "./components/Header"
import { PUBLIC_PAGE } from "./config/pages/public-page.config"

export function HomePage() {
  return (
    <>
      <Header />
      <main className="flex flex-col gap-12 justify-center items-center h-screen bg-bg">
        <Link
          className="text-6xl! hover:underline"
          to={`${PUBLIC_PAGE.MOVIE}/peaky-blinders`}
        >
          Movies
        </Link>
      </main>
    </>
  )
}
