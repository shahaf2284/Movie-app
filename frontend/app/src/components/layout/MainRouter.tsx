import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { HomePage } from "../../HomePage"
import MoviePage from "../../MoviePage"
import { PUBLIC_PAGE } from "../../config/pages/public-page.config"

export function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path={PUBLIC_PAGE.HOME} element={<HomePage />} />
        <Route path={`${PUBLIC_PAGE.MOVIE}/:id`} element={<MoviePage />} />
      </Routes>
    </Router>
  )
}
