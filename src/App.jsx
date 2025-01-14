import './App.css'
import { BrowserRouter as Router, Routes,Route,Link } from 'react-router-dom'
import Home from './Home/Home'
import GreenHouse from './GreenHouse/GreenHouse'
import FoodCort from './FoodCort/FoodCort'
import Store from './Store/Store'
import Logo from './Logo'
import EachStory from './Home/EachStory'
import Weather from './Weather'
import Recipes from './Recipes/Recipes'



function App() {  
  return (<div>
  <Router>
      <nav className='menu'>
        <div className='logoWeather'>
          <Logo/>          
        </div>
        <Weather/>
        <div className='pageMenu'>
          <Link className='page' to='/'>Home</Link>
          <Link className='page' to='/Greenhouse'>Greenhouse</Link>
          <Link className='page' to='/FoodCort'>Food Cort</Link>
          <Link className='page' to='/Store'>Store</Link> 
        </div>        
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Greenhouse' element={<GreenHouse/>}/>
        <Route path='/FoodCort' element={<FoodCort/>}/>
        <Route path='/Store' element={<Store/>}/>
        <Route path='/each/:path' element={<EachStory/>}/>
        <Route path='/recipes' element={<Recipes/>}/>
      </Routes>      
      </Router>
      </div>
  )
}

export default App
