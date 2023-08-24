import About from "./About/About";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Projects2 from "./Projects2/Projects2";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      {/* <Projects /> */}
      <Projects2 />
    </div>
  );
}

export default App;
