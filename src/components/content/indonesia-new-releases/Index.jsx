import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AlbumCard from "../../album-card/Index";

const Index = () => {
    const [token, setToken] = useState("");
    const [idNewReleases, setIdNewReleases] = useState([]);

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

    return (
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
    );
};

export default Index;
