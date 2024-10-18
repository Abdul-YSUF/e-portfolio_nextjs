"use client"
import Header from "./components/Header";
import Accueil from "./components/Accueil";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services"
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Header />
      <Accueil />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Contact />
      <Footer />
      <ScrollToTop />
      <Script 
        src="https://www.google.com/recaptcha/api.js" 
        strategy="lazyOnload"
        onLoad={() => {
          console.log('Script loaded!');
        }}
      />
    </>
  );
}
