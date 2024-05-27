import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Content } from "./pages/Content"
import { LeagueStandings } from "./pages/LeagueStandings"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Content />}/>
        <Route path="/standings/:leagueId" element={<LeagueStandings />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
