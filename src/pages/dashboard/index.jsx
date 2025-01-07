import Sidebar from "../../components/sidebar/Index";
import Navbar from "../../components/navbar/Index";
import AlbumCard from "../../components/album-card/Index";
import ArtistCard from "../../components/artist-card/Index";
import TrackCard from "../../components/track-card/Index";
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
                        Authorization: "Bearer BQDoFB5ufmgn9GlAeRvlR4YJ27-8U11EHmDUbumLZvbQY1Dg6GIS0ai1FrKn2KPVn_wasfH2YxNwCVivqSemF6a-IdzDpuTULDMq8WCQqXDKksW7I4M",
                    },
                });
                const fetched_artists = response.data.artists.items;
                const fetched_albums = response.data.albums;
                const fetched_tracks = response.data.tracks;
                setSearchedAlbums(fetched_albums);
                setSearchedArtists(fetched_artists);
                setSearchedTracks(fetched_tracks);
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
                                    {searchedArtists.map((artist) => {
                                        return (
                                            <div key={artist.id}>
                                                <ArtistCard id={artist.id} name={artist.name} genres={artist.genres} />
                                            </div>
                                        );
                                    })}
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
