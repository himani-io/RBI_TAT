import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import History from "./pages/History";
import Analytics from "./pages/Analytics";
// import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 ml-64">
        <Navbar />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/history" element={<History />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
