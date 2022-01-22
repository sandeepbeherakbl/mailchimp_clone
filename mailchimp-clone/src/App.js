import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import Routers from "./Routers/Routers";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({
      once:true,
    })
    })

  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
