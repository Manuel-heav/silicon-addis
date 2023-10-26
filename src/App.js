import Showcase from "./component/Showcase";
import "./App.css";
import Latest from "./component/Latest";
import Premium from "./component/Premium";
import Notify from "./component/Notify";
import Popular from "./component/Popular";
function App() {
  return (
    <div className="app">
      <Showcase />
      <Latest />
      <Popular />
      <Notify />
      <Premium />
    </div>
  );
}

export default App;
