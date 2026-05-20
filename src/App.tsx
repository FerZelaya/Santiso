import { About } from "./components/About";
import { Benefits } from "./components/Benefits";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { MermeladasSection } from "./components/MermeladasSection";
import { Navbar } from "./components/Navbar";
import { ProductCategories } from "./components/ProductCategories";
import { TomateSection } from "./components/TomateSection";
import { ValueBadges } from "./components/ValueBadges";
import { VegetalesSection } from "./components/VegetalesSection";
import { Wholesale } from "./components/Wholesale";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ValueBadges />
        <About />
        <ProductCategories />
        <MermeladasSection />
        <VegetalesSection />
        <TomateSection />
        <Wholesale />
        <Benefits />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
