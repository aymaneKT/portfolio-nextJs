import AboutMe from "@/components/AboutMe";
import { Hamburger } from "@/components/Hamburger";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Hamburger />
      <Navbar />
      <Hero />
      <AboutMe />
    </>
  );
}
