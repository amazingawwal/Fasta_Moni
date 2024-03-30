import CustomNavbar from './Components/Header/Navbar';
import Hero from './Components/Hero/Hero';
import ExperiencePage from './Components/ExperiencePage/Experience';
import './App.css'
import MarketPage from './Components/MarketPage/MarketPage';
import Case from './Components/Case Studies/Case.jsx/Case';
import QuestionPage from './Components/Question/Question';
import Consulting from './Components/Consulting_Solution/Consulting';
import Footer_Section from './Components/Footer_Section/FooterSection';

function App() {
  return (
    <>
      <CustomNavbar></CustomNavbar>
      <Hero/>
      <ExperiencePage/>
      <MarketPage/>
      <Case/>
      <QuestionPage/>
      <Consulting/>
      <Footer_Section/>
    </>
  )
}

export default App
