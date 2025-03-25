import MottoDivider from "@/components/MottoDivider";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import About from "@/components/About";
import Intro from "@/components/Intro";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <main>
      <Intro />
      <About />
      <MottoDivider />
      <Projects />
      <Divider />
      <Contact />
    </main>
  );
}
