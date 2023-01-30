import Homeheader from "./components/Homeheader";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] overflow-x-hidden">
      <Navbar/>
      <Homeheader/>
    </div>
  );
}

export default App;
