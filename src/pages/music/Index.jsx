import Sidebar from "../../components/sidebar/Index";
import Navbar from "../../components/navbar/Index";
import GlobalTopArtists from "../../components/content/international-artist-list/Index";
import IndonesiaTopArtists from "../../components/content/indonesia-top-artists/Index";
import IndonesiaNewReleases from "../../components/content/indonesia-new-releases/Index";

const Index = () => {
    return (
        <>
            <div className="flex p-8 max-w-[1700px] mx-auto">
                <div>
                    {/* Sidebar */}
                    <Sidebar />
                </div>

                <div className="w-full px-4">
                    {/* Navbar */}
                    <Navbar />

                    {/* Content */}
                    <div className="flex">
                        <div className="w-full">
                            <GlobalTopArtists />
                            <IndonesiaTopArtists />
                            <IndonesiaNewReleases />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
