import Hero from "@/components/Hero";
import About from "@/components/About";
import Pricing from "@/components/Pricing";

function LandingPage() {
  return (
    <>
      <section className="px-4 sm:px-8 lg:px-16">
        <Hero />
        <About />
        <Pricing />
      </section>
    </>
  );
}

export default LandingPage;
