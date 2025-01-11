import { BrowserRouter, Routes, Route } from "react-router-dom";
import Music from "../src/pages/music/Index";
import Podcast from "../src/pages/podcast/Index";
import Audiobook from "../src/pages/audiobook/Index";
import Dashboard from "../src/pages/dashboard/Index";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Music />} />
                    <Route path="/podcast" element={<Podcast />} />
                    <Route path="/audiobook" element={<Audiobook />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
