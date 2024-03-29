import CustomNavbar from './Components/Header/Navbar';
import Hero from './Components/Hero/Hero';
import ExperiencePage from './Components/ExperiencePage/Experience';
import './App.css'
import MarketPage from './Components/MarketPage/MarketPage';
import Case from './Components/Case Studies/Case.jsx/Case';
import QuestionPage from './Components/Question/Question';


function App() {
  return (
    <>
      <CustomNavbar></CustomNavbar>
      <Hero/>
      <ExperiencePage/>
      <MarketPage/>
      <Case/>
      <QuestionPage/>
    </>
  )
}

export default App
