import "./App.css";

import Header from "./components/Header/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import FeaturedIn from "./components/FeaturedIn";
import { Meals } from "./components/Meals";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
// import Features from "./components/Features";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FeaturedIn />
      <HowItWorks />
      <Meals />
      <Testimonials />
      <Pricing />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
