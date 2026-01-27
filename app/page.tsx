import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Mystack from "@/components/Mystack";
import Navbar from "@/components/Navbar";

import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Mystack />
      <Projects />
      <Footer />
    </>
  );
}
