import Hero from "@/components/Hero";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import LandingPageHeader from "@/components/LandingPageHeader";

function LandingPage() {
  return (
    <>
      <LandingPageHeader />
      <section className="px-4 sm:px-8 lg:px-16">
        <Hero />
        <About />
        <Pricing />
      </section>
      <Footer />
    </>
  );
}

export default LandingPage;
