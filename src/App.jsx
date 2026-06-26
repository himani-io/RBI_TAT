import {Route, Routes} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import History from "./pages/History";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/history" element={<History />}></Route>
            <Route path="/analytics" element={<Analytics />}></Route>
           <Route path="/*" element={<NotFound />}></Route>
        </Routes>
    )
}

export default App;