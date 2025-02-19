import Sidebar from "../../components/sidebar/Index";
import Navbar from "../../components/navbar/Index";
import AlbumCard from "../../components/album-card/Index";
import ArtistCard from "../../components/artist-card/Index";
import TrackCard from "../../components/track-card/Index";
import axios from "axios";
import { useState, useEffect } from "react";

const Index = () => {
    const [token, setToken] = useState("");
    const [searchedArtists, setSearchedArtists] = useState([]);
    const [searchedAlbums, setSearchedAlbums] = useState([]);
    const [searchedTracks, setSearchedTracks] = useState([]);

    useEffect(() => {
        const getAccessToken = async () => {
            const clientID = `${import.meta.env.VITE_API_CLIENT_ID}`;
            const clientSecret = `${import.meta.env.VITE_API_CLIENT_SECRET}`;
            const basicAuth = btoa(`${clientID}:${clientSecret}`);
            try {
                const response = await axios.post("https://accounts.spotify.com/api/token", new URLSearchParams({ grant_type: "client_credentials" }), {
                    headers: {
                        Authorization: `Basic ${basicAuth}`,
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                });
                setToken(response.data.access_token);
            } catch (error) {
                console.error("Error fetching access token:", error);
            }
        };
        getAccessToken();
    }, []);

    useEffect(() => {
        const getSearchedItems = async () => {
            if (!token) {
                return;
            }
            try {
                const response = await axios.get("https://api.spotify.com/v1/search", {
                    params: {
                        q: "Drake",
                        type: "artist,album,track",
                        market: "ID",
                        limit: 7,
                    },
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const fetched_artists = response.data.artists.items;
                const fetched_albums = response.data.albums.items;
                const fetched_tracks = response.data.tracks;
                setSearchedAlbums(fetched_albums);
                setSearchedArtists(fetched_artists);
                setSearchedTracks(fetched_tracks);
            } catch (error) {
                console.log(error);
            }
        };
        getSearchedItems();
    }, [token]);

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
                                                <ArtistCard id={artist.id} name={artist.name} genres={artist.genres} image={artist.images[0]?.url} />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Albums */}
                            <div>
                                <p className="text-white text-4xl font-bold pl-5 pt-5 pb-3">Albums</p>
                                <div className="grid grid-cols-3 gap-2">
                                    {searchedAlbums.map((album) => {
                                        return (
                                            <div key={album.id}>
                                                <AlbumCard id={album.id} name={album.name} artistName={album.artists[0].name} image={album.images[0].url} />
                                            </div>
                                        );
                                    })}
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
