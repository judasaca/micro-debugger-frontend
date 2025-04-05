import "./App.css";
import ControlPanel from "./components/ControlPanel";
import WebSocketComponent from "./components/WebSocketComponent";

function App() {
  return (
    <>
      <div className="w-screen h-screen flex bg-background">
        <ControlPanel />
      </div>
    </>
  );
}

export default App;
