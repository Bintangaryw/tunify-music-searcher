import Sidebar from "../../components/sidebar/index";
import Navbar from "../../components/navbar/index";
import AlbumCard from "../../components/album-card/index";
import ArtistCard from "../../components/artist-card/index";
import TrackCard from "../../components/track-card/index";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";

const Index = () => {
    // const [useSearchParams]
    const [searchedArtists, setSearchedArtists] = useState([]);
    const [searchedAlbums, setSearchedAlbums] = useState([]);
    const [searchedTracks, setSearchedTracks] = useState([]);

    useEffect(() => {
        const getSearchedItems = async () => {
            try {
                const response = await axios.get("https://api.spotify.com/v1/search", {
                    params: {
                        q: "Avenged Sevenfold",
                        type: "artist,album,track",
                        market: "ID",
                        limit: 15,
                    },
                    headers: {
                        Authorization: "Bearer BQAo7LhBq2hK05U9Mi6nb_ZqGcBMHN6069gwMByuHr2ziBvseaGK8d8kz0Sa_CXhTy7yJLH2fvN0x7OULnlOUX6A15TFx5PRSKj_lntT2CKfD0arcg0",
                    },
                });
                const fetched_items = response.data;
                console.log(fetched_items);
            } catch (error) {
                console.log(error);
            }
        };
        getSearchedItems();
    }, []);

    return (
        <>
            <div className="flex p-8 max-w-[1700px] mx-auto">
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
                                <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 ">
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
                            <div>
                                <p className="text-white text-4xl font-bold pl-5 pt-5 pb-3">Tracks</p>
                                <div className="flex flex-col">
                                    <TrackCard />
                                    <TrackCard />
                                    <TrackCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
