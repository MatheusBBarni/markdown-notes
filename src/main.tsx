import './styles.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './screens/Home'
import Notes from './screens/Notes'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<App />}>
          
            <Route path=":teamId" element={<Team />} />
            <Route path="new" element={<NewTeamForm />} />
            <Route index element={<LeagueStandings />} />
          </Route>
        </Route> */}
        <Route path="/" element={<Home />} />
        <Route path="notes" element={<Notes />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
