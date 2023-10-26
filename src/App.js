import Showcase from "./component/Showcase";
import "./App.css";
import Latest from "./component/Latest";
import Premium from "./component/Premium";
import Notify from "./component/Notify";
import Popular from "./component/Popular";
import Design from "./component/Design";
function App() {
  return (
    <div className="app">
      <div>
        <Design />
      </div>
      <Showcase />
      <Latest />
      <Popular />
      <Notify />
      <Premium />
    </div>
  );
}

export default App;
