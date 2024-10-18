import dynamic from "next/dynamic";
import Header from "./components/Header";
import Accueil from "./components/Accueil";
import About from "./components/About";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const DynamicSkills = dynamic(() => import("./components/Skills"), {
  ssr: false,
});
const DynamicProjects = dynamic(() => import("./components/Projects"), {
  ssr: false,
});
const DynamicServices = dynamic(() => import("./components/Services"), {
  ssr: false,
});
const DynamicContact = dynamic(() => import("./components/Contact"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Header />
      <Accueil />
      <About />
      <DynamicSkills />
      <DynamicProjects />
      <DynamicServices />
      <DynamicContact />
      <Footer />
      <ScrollToTop />
    </>
  );
}
