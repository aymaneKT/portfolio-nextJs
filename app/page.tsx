import AboutMe from "@/components/AboutMe";
import Footer from "@/components/Footer";
import { Hamburger } from "@/components/Hamburger";
import Hero from "@/components/Hero";
import Mystack from "@/components/Mystack";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Hamburger />
      <Navbar />
      <Hero />
      <AboutMe />
      <Mystack />
      <Projects />
      <Footer/>
    </>
  );
}
