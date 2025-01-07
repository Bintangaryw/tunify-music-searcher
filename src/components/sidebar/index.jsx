import tunify_logo_clear from "../../assets/img/tunify_logo_clear.png";
import artist_png from "../../assets/img/microphone.png";
import album_png from "../../assets/img/album-artwork.png";
import track_png from "../../assets/img/music-player.png";
import logout_png from "../../assets/img/export.png";
import profile_png from "../../assets/img/user.png";

const Index = () => {
    return (
        <>
            <div className="h-screen w-72 bg-[#323232] text-white rounded-xl flex flex-col">
                <div className="p-4 text-lg font-bold">
                    <img src={tunify_logo_clear} className="w-32 mx-auto" />
                </div>

                {/* Top */}
                <ul className="flex flex-col gap-4 p-4 flex-grow">
                    <li className="hover:shadow-md p-2 rounded-xl">
                        <div className="flex items-center">
                            <img src={artist_png} className="w-10" />
                            <p className="pl-5">Artist</p>
                        </div>
                    </li>
                    <li className="hover:shadow-md p-2 rounded-xl">
                        <div className="flex items-center">
                            <img src={album_png} className="w-10" />
                            <p className="pl-5">Album</p>
                        </div>
                    </li>
                    <li className="hover:shadow-md p-2 rounded-xl">
                        <div className="flex items-center">
                            <img src={track_png} className="w-10" />
                            <p className="pl-5">Track</p>
                        </div>
                    </li>
                </ul>

                {/* Bottom */}
                <ul className="flex flex-col gap-4 p-4 mt-auto">
                    <li className="hover:shadow-md p-2 rounded-xl">
                        <div className="flex items-center">
                            <img src={profile_png} className="w-10" />
                            <p className="pl-5">Profile</p>
                        </div>
                    </li>
                    <li className="hover:shadow-md p-2 rounded-xl">
                        <div className="flex items-center">
                            <img src={logout_png} className="w-10" />
                            <p className="pl-5">Log out</p>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Index;
