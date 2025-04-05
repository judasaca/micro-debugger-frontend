import "./App.css";
import PortsList from "./components/control-panel/PortsList";
import ControlPanel from "./components/ControlPanel";
import { ModeToggle } from "./components/menu-toggle";
import NetworkMap from "./components/network-map/NetworkMap";
import { ThemeProvider } from "./components/theme-provider";
import WebSocketComponent from "./components/WebSocketComponent";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-screen h-screen flex bg-background">
        <ControlPanel />
        <NetworkMap />
      </div>
    </ThemeProvider>
  );
}

export default App;
