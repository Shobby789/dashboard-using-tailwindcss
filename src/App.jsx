import { CgMenuRound } from "react-icons/cg";
import "./App.css";
import Stats from "./assets/Stats.png";
import List from "./components/dashboard/List";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/global/Navbar";

function App() {
  return (
    <div className="w-full bg-black text-white flex justify-between relative">
      <div className="sidebar w-1/5 h-screen fixed top-0 left-0 bg-black">
        <Navbar />
      </div>
      <div className="min-h-screen bg-black absolute right-0 w-4/5 py-6 pr-3 flex items-center justify-center">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
