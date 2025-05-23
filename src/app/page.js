import About from "@/components/about/about";
import Hero from "@/components/home/hero";
import Projects from "@/components/projects/featuredProjects";
import Footer from "@/layouts/footer";
import NavBar from "@/layouts/nav";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <div className="border-b-1 border-b-[#484848]"></div>
      <div id="projects"><Projects/></div>
      <div className="border-b-1 border-b-[#484848]"></div>
      <About/>
      <div className="border-b-1 border-b-[#484848]"></div>
      <div id="contact"><Footer/></div>
    </div>
  );
}
