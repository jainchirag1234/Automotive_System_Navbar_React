import { HeroSection } from "./comp/HeroSection";
import { Navbar } from "./comp/Navbar";
import "./App.css";
import { Footer } from "./comp/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Footer />
    </>
  );
};
export default App;
