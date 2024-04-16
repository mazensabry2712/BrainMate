import { useEffect } from "react";
import Aos from 'aos'

import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/UI/Hero";
import Services from "./components/UI/Services.jsx"; 
import Start from "./components/UI/Start.jsx";
import Pricing from "./components/UI/Pricing.jsx";
import Testimonials from "./components/UI/Testimonials.jsx";
import Footer from "./components/UI/Footer.jsx";


function App() {
  useEffect(() => {
    Aos.init()
  }
  ,[]
  )
  return <>
  <Header/>
  <Hero/>
  <Services/>
  <Pricing/>
  <Start/>
  <Testimonials/>
  <Footer/>
  </>
}

export default App;
