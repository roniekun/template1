import {  Routes, Route, useLocation,useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./component/header";
import Navbar from "./component/navbar";
import Home from "./pages/home";
import Pricing from "./pages/pricing";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import Notfound from "./pages/Notfound";
import Lenis from '@studio-freight/lenis'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function App() {
  const { id } = useParams()
  const location = useLocation();
  const lenis = new Lenis()

  gsap.registerPlugin(ScrollTrigger)
  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0)
  
  return (
        <main className="flex flex-col">
        <Header />
          <Navbar />
          <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/pricing" element={<Pricing />} />
            <Route exact path="/gallery" element={<Gallery />} />
            <Route exact path="/works" element={<Gallery />} />
            <Route exact path="/gallery/:id/" element={<Gallery />} />
            <Route exact path="/about" element={<Contact />} />
             <Route exact path="/contact" element={<Contact />} />
            <Route  path="*" element={<Notfound/>} />
          </Routes>
        </AnimatePresence>
        </main>
  );
}

export default App;
