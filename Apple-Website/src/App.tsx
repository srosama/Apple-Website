import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Highlight from "./Components/Highlight";
import Model from "./Components/Model";
import Footer from "./Components/Footer";
function App() {
  return (<>
    <main className="bg-black w-full">
      <Navbar />
      <Hero />
      <Highlight />
      <Model />
      <Footer />
    </main>
  </>);
}

export default App;
