import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Content } from "./pages/Content"
import { LeagueStandings } from "./pages/LeagueStandings"
import { LoadingContextProvider } from "./context/LoadingContext"

function App() {

  return (
    <LoadingContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Content />}/>
            <Route path="/standings/:leagueId" element={<LeagueStandings />}/>
          </Routes>
        </BrowserRouter>
    </LoadingContextProvider>   
  )
}

export default App
