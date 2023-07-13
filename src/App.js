import Showcase from "./component/Showcase";
import "./App.css";
import Latest from "./component/Latest";
import Premium from "./component/Premium";
function App() {
  return (
    <div className="app">
      <Showcase />
      <Latest />
      <Premium />
    </div>
  );
}

export default App;
