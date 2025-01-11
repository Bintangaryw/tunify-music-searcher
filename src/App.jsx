import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../src/pages/landingpage/index";
import HomePage from "../src/pages/homepage/Index";
import Dashboard from "../src/pages/dashboard/Index";
import Card from "../src/components/album-card/Index";
import ArtistCard from "../src/components/artist-card/Index";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/card-album" element={<Card />} />
                    <Route path="/card-artist" element={<ArtistCard />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
