import "./App.css";
import Download from "./components/download";
import Features from "./components/features";
import Hero from "./components/hero";
import { Navigation } from "./components/navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Features />
      <Download />
    </div>
  );
}

export default App;
