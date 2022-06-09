import "./App.css";
import Day from "./components/Day";
import Dropdown from "./components/Dropdown";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <div className="container">
        <Dropdown />
        <Day />
      </div>
    </DataProvider>
  );
}

export default App;
