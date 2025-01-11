import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ArtistCard from "../../../artist-card/Index";

const Index = () => {
    const [token, setToken] = useState("");
    const [globalTopArtists, setGlobalTopArtists] = useState([]);

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

    // get indonesia top artists
    useEffect(() => {
        const getIdTopArtists = async () => {
            if (!token) {
                return;
            }
            try {
                const response = await axios.get("https://api.spotify.com/v1/playlists/5ABHKGoOzxkaa28ttQV9sE/tracks", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                const fetchedArtists = response.data.items.flatMap((item) => item.track.artists); // get the artists from each tracks inside the playlist
                const uniqueArtists = Array.from(new Map(fetchedArtists.map((artist) => [artist.id, artist])).values()); // make sure no duplicate artists
                // get detailed artists data and slice to 10 items
                const detailedArtists = await Promise.all(
                    uniqueArtists.slice(0, 30).map(async (artists) => {
                        const artistDetails = await axios.get(`https://api.spotify.com/v1/artists/${artists.id}`, {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        });
                        return {
                            id: artists.id,
                            name: artists.name,
                            image: artistDetails.data.images[0]?.url, // take first image
                            external_urls: artists.external_urls,
                        };
                    })
                );
                setGlobalTopArtists(detailedArtists);
            } catch (error) {
                console.log(error);
            }
        };
        getIdTopArtists();
    }, [token]);
    return (
        <div>
            <div className="flex justify-between items-center">
                <p className="text-white text-4xl font-bold pl-5 py-8">Global Top</p>
                <Link>
                    <p className="text-white font-bold hover:border-b">show more</p>
                </Link>
            </div>
            <div className="grid grid-cols-6  gap-4 ">
                {globalTopArtists.map((idArtists) => {
                    return (
                        <div key={idArtists.id}>
                            <ArtistCard id={idArtists.id} image={idArtists.image} name={idArtists.name} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Index;
