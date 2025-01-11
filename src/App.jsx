import { BrowserRouter, Routes, Route } from "react-router-dom";
import Music from "../src/pages/music/Index";
import Dashboard from "../src/pages/dashboard/Index";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Music />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
