import CustomNavbar from './Components/Header/Navbar';
import Hero from './Components/Hero/Hero';
import ExperiencePage from './Components/ExperiencePage/Experience';
import './App.css'
import MarketPage from './Components/MarketPage/MarketPage';



function App() {
  return (
    <>
      <CustomNavbar></CustomNavbar>
      <Hero/>
      <ExperiencePage/>
      <MarketPage/>
    </>
  )
}

export default App
