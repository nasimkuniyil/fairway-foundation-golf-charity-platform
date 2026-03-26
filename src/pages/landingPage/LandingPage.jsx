import Hero from "@/components/Hero";
import Header from "@/pages/landingPage/Header";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

function LandingPage() {
  return (
    <>
      <Header />
      <section>
        <Hero />
        <About />
        <Pricing />
      </section>
      <Footer />
    </>
  );
}

export default LandingPage;
