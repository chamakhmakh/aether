import Discovery from "./sections/Discovery";
import Footer from "./sections/Footer";
import Hero from "./sections/Hero";
import Interaction from "./sections/Interaction";
import Manifesto from "./sections/Manifesto";
import NavBar from "./sections/NavBar";
import StatusBar from "./sections/StatusBar";
import Works from "./sections/Works";

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
        <Works />
      </main>
      <Footer />
    </div>
  );
};

export default page;
