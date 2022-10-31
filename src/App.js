import { useEffect, useState } from 'react';
import Papa, { parse } from 'papaparse';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import Blogs from './pages/Blogs/Blogs';
import Hackinfinity from './pages/Events/Hackinfinity/Hackinfinity'
import Team from './pages/Team/Team';

function App() {
  
  let team_file =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQjNAApCm2CohJrqbyVWX61DIKzxOM8pyOoA4xxSmkwrMncQN4rbkw40lZ7Fh51BUluQc7hu2nY9BwI/pub?output=csv";
  let alum_file =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vT_pjXGCVgHyEOCBtapFt_sE7XMk6Rj-8qqW91zmdoifdBx8nGARMHgXsgUJqOMNFRUAaXVbzFeq5JJ/pub?output=csv";

  const [data, setData] = useState({teamData: [], alumniData: []})

  useEffect(() => {
    Papa.parse(team_file, {
      download: true,
      header: true,
      complete: (parsed) => {
        setData(prev => {
          return {...prev, teamData: parsed.data}
        })
      },
    });

    Papa.parse(alum_file, {
      download: true,
      header: true,
      complete: (parsed) => {
        setData(prev => {
          return {...prev, alumniData: parsed.data}
        })
      },
    });
  }, [])
  
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/events' element={<Events/>} />
        <Route exact path='/blogs' element={<Blogs/>} />
        <Route exact path='/hackinfinity' element={<Hackinfinity/>} />
        <Route exact path='/team' element={<Team teamData={data.teamData} alumniData={data.alumniData} />} />
      </Routes>
      
    </div>
  );
}

export default App;
