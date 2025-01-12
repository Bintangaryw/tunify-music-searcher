import Sidebar from "../../components/sidebar/Index";
import Navbar from "../../components/navbar/Index";
import IndonesiaTopPodcast from "../../components/content/podcast-content/indonesia-top-podcast/Index";

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
                            <IndonesiaTopPodcast />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
