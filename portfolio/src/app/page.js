import Header from "./components/Header";
import Accueil from "./components/Accueil";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import styles from "./saas/style.css";

export default function Home() {
  return (
    <>
      <Header />
      <Accueil />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
