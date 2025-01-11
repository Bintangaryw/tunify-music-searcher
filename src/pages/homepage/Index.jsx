import Sidebar from "../../components/sidebar/Index";
import Navbar from "../../components/navbar/Index";
import AlbumCard from "../../components/album-card/Index";
import ArtistCard from "../../components/artist-card/Index";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Index = () => {
    const [token, setToken] = useState("");
    const [idNewReleases, setIdNewReleases] = useState([]);
    const [idTopArtist, setIdTopArtist] = useState([]);

    // always get latest token
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

    // get indonesia new releases
    useEffect(() => {
        const getNewRelease = async () => {
            if (!token) {
                return;
            }
            try {
                const response = await axios.get("https://api.spotify.com/v1/browse/new-releases", {
                    params: {
                        market: "ID",
                        limit: 12,
                    },
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setIdNewReleases(response.data.albums.items);
            } catch (error) {
                console.log(error);
            }
        };
        getNewRelease();
    }, [token]);

    // get indonesia top artists
    useEffect(() => {
        const getIdTopArtists = async () => {
            if (!token) {
                return;
            }
            try {
                const response = await axios.get("https://api.spotify.com/v1/playlists/1OiiFyV4pJ7Pl5yhB4OHLO/tracks", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const fetchedArtists = response.data.items.flatMap((item) => item.track.artists); // get the artists from each tracks inside the playlist
                const uniqueArtists = Array.from(new Map(fetchedArtists.map((artist) => [artist.id, artist])).values()); // make sure no duplicate artists
                // get detailed artists data and slice to 10 items
                const detailedArtists = await Promise.all(
                    uniqueArtists.slice(0, 10).map(async (artists) => {
                        const artistDetails = await axios.get(`https://api.spotify.com/v1/artists/${artists.id}`, {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        });
                        return {
                            id: artists.id,
                            name: artists.name,
                            image: artistDetails.data.images[0]?.url, // Ambil gambar pertama
                            external_urls: artists.external_urls,
                        };
                    })
                );
                setIdTopArtist(detailedArtists);
                console.log(detailedArtists);
            } catch (error) {
                console.log(error);
            }
        };
        getIdTopArtists();
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
                                <div className="flex justify-between items-center">
                                    <p className="text-white text-4xl font-bold pl-5 py-8">Top Artists Indonesia</p>
                                    <Link>
                                        <p className="text-white font-bold hover:border-b">show more</p>
                                    </Link>
                                </div>
                                <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 ">
                                    {idTopArtist.map((idArtists) => {
                                        return (
                                            <div key={idArtists.id}>
                                                <ArtistCard id={idArtists.id} image={idArtists.image} name={idArtists.name} />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Albums */}
                            <div>
                                <div className="flex justify-between items-center">
                                    <p className="text-white text-4xl font-bold pl-5 py-8">Indonesia New Releases</p>
                                    <Link>
                                        <p className="text-white font-bold hover:border-b">show more</p>
                                    </Link>
                                </div>
                                <div className="grid grid-cols-4 gap-2">
                                    {idNewReleases.map((idNewReleases) => {
                                        return (
                                            <div key={idNewReleases.id}>
                                                <AlbumCard id={idNewReleases.id} name={idNewReleases.name} artistName={idNewReleases.artists[0].name} image={idNewReleases.images[0].url} />
                                            </div>
                                        );
                                    })}
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
