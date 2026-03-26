import Hero from "@/components/Hero";
import Header from "@/pages/landingPage/Header";
import About from "@/components/About";

function LandingPage() {
  return (
    <>
      <Header />
      <section>
        <Hero />
        <About />
      </section>
    </>
  );
}

export default LandingPage;
