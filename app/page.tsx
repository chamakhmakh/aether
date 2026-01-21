import Discovery from "./sections/Discovery";
import Hero from "./sections/Hero";
import Interaction from "./sections/Interaction";
import Manifesto from "./sections/Manifesto";
import NavBar from "./sections/NavBar";
import StatusBar from "./sections/StatusBar";

const page = () => {
  return (
    <div className="min-h-screen font-['Inter'] selection:bg-neutral-800 selection:text-white">
      <StatusBar />
      <NavBar />
      <main>
        <Hero />
        <Discovery />
        <Interaction />
        <Manifesto />
      </main>
    </div>
  );
};

export default page;
