import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../src/pages/landingpage/index";
import Dashboard from "../src/pages/dashboard/index";
import Card from "../src/components/album-card/index";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/card-album" element={<Card />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
