import Home from'./pages/Home.jsx';
import Login from'./pages/Login.jsx';
import Signup from'./pages/Signup.jsx';
import Uber from './pages/Uber.jsx';
import Help from './pages/Help.jsx';
import Daily from './pages/Daily.jsx';
import Ride from './pages/Ride.jsx'
import En from './pages/En.jsx'
import Explore from './pages/Explore.jsx'
import Airport from './pages/Airport.jsx'
import Dailypass from './pages/Dailypass.jsx'
import Searchcities from './pages/Search_cities.jsx'
import Download from './pages/Download.jsx'
import Learn from './pages/Learnmore.jsx'
import Terms from './pages/Terms.jsx'
import Uber_works from './pages/uber_work.jsx'

import { Routes,Route}from 'react-router-dom'

function App(){
  return(
    <div>
      <Routes>
     <Route path="/"element={<Home/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Uber" element={<Uber/>}/>
    <Route path="/Help" element={<Help/>}/>
    <Route path="/Daily" element={<Daily/>}/>
    <Route path='/Ride' element={<Ride/>}/>
    <Route path='/En' element={<En/>}/>
    <Route path='/Explore' element={<Explore/>}/>
    {/* <Route path='/Airport' element={<Airport/>}/> */}
    <Route path='/Dailypass' element={<Dailypass/>}/>
    <Route path='/Search_cities' element={<Searchcities/>}/>
    <Route path='/Download' element={<Download/>}/>
    <Route path='/Learn' element={<Learn/>}/>
    <Route path='/Terms' element={<Terms/>}/>
    <Route path='/Uber_works' element={<Uber_works/>}/>
    </Routes>
    </div>
    
  )
}
export default App
