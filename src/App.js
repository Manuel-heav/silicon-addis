import Showcase from "./component/Showcase";
import "./App.css";
import Latest from "./component/Latest";
import Premium from "./component/Premium";
import Notify from "./component/Notify";
function App() {
  return (
    <div className="app">
      <Showcase />
      <Latest />
      <Notify />
      <Premium />
    </div>
  );
}

export default App;
