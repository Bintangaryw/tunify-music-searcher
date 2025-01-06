import Sidebar from "../../components/sidebar/index";
import Navbar from "../../components/navbar/index";
import AlbumCard from "../../components/album-card/index";
import ArtistCard from "../../components/artist-card/index";

const index = () => {
    return (
        <>
            <div className="flex p-8 max-w-[1920px] mx-auto">
                <div>
                    <Sidebar />
                </div>

                <div className="w-full px-4">
                    {/* Navbar */}
                    <Navbar />

                    {/* Feed */}
                    <div className="flex">
                        <div className="w-full">
                            {/* Artists */}
                            <div>
                                <p className="text-white text-4xl font-bold pl-5 pt-5 pb-3">Artists</p>
                                <div className="grid grid-cols-4 lg:grid-cols-5 gap-4 ">
                                    <ArtistCard />
                                    <ArtistCard />
                                    <ArtistCard />
                                    <ArtistCard />
                                    <ArtistCard />
                                    <ArtistCard />
                                    <ArtistCard />
                                    <ArtistCard />
                                    <ArtistCard />
                                    <ArtistCard />
                                </div>
                            </div>

                            {/* Albums */}
                            <div>
                                <p className="text-white text-4xl font-bold pl-5 pt-5 pb-3">Albums</p>
                                <div className="grid grid-cols-3 gap-2">
                                    <AlbumCard />
                                    <AlbumCard />
                                    <AlbumCard />
                                    <AlbumCard />
                                    <AlbumCard />
                                </div>
                            </div>

                            {/* Tracks */}
                            <p className="text-white text-4xl font-bold pl-5 pt-5 pb-3">Tracks</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;
