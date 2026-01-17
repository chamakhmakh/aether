import NavBar from "./sections/NavBar";
import StatusBar from "./sections/StatusBar";

const page = () => {
  return (
    <div className="min-h-screen font-['Inter'] selection:bg-neutral-800 selection:text-white">
      <StatusBar />
      <NavBar />
    </div>
  );
};

export default page;
