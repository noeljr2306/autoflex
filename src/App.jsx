import "./App.css";
import About from "./Components/About";
import ContactInfo from "./Components/ContactInfo";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Testimonial from "./Components/Testimonial";

function App() {
  return (
    <div className=" overflow-hidden">
      <Navbar />
      <Hero />
      <Gallery />
      <About />
      <ContactInfo />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
