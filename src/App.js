import './App.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import Menu from './Menu/Menu'
import Hero from './Hero/Hero'
import HomePage from './HomePage/HomePage'
import Footer from './Footer/Footer'
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';
import Budget from './Budget/Budget';
import D3Budget from './D3Budget/D3Budget';

function App() {
  return (
    <Router>
        <Menu/>
        <Hero/>
        <div className="mainContainer">
          <Routes>
            <Route path='/about' element= {<AboutPage/>}>
            </Route>
            <Route path='/login' element= {<LoginPage/>}>
            </Route>
            <Route path='/budget' element={<Budget/>}>
            </Route>
            <Route path='/D3Budget' element={<D3Budget/>}>
            </Route>
            <Route path='/'element= {<HomePage/>}>
            </Route>
          </Routes>
        </div>
        <Footer/>
        
    </Router>
  );
};

export default App;
