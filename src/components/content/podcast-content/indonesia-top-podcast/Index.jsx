import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PodcastCard from "../../../podcast-card/Index";

const Index = () => {
    const [token, setToken] = useState("");
    const [idTopPodcaster, setIdTopPodcaster] = useState([]);

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

    // get indonesia top podcast
    useEffect(() => {
        const getIdTopPodcaster = async () => {
            if (!token) {
                return;
            }

            const response = await axios.get(`${import.meta.env.VITE_API_ID_PODCAST}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setIdTopPodcaster(response.data.shows.items);
        };
        getIdTopPodcaster();
    }, [token]);

    return (
        <div>
            <div className="flex justify-between items-center">
                <p className="text-white text-4xl font-bold pl-5 py-8">Indonesia Top Show</p>
                <Link>
                    <p className="text-white font-bold hover:border-b">show more</p>
                </Link>
            </div>
            <div className="grid grid-cols-6  gap-4 ">
                {idTopPodcaster.map((podcaster) => {
                    return (
                        <div key={podcaster.id}>
                            <PodcastCard id={podcaster.id} name={podcaster.name} image={podcaster.images[0].url} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Index;
