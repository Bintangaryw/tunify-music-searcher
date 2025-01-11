import tunify_logo_clear from "../../assets/img/tunify_logo_clear.png";
import logout_png from "../../assets/img/export.png";
import profile_png from "../../assets/img/user.png";
import { Link } from "react-router-dom";

const Index = () => {
    return (
        <>
            <div className="h-screen w-72 bg-[#323232] text-white rounded-xl flex flex-col">
                <div className="p-4 text-lg font-bold">
                    <img src={tunify_logo_clear} className="w-32 mx-auto" />
                </div>

                {/* Top */}
                <ul className="flex flex-col gap-4 p-4 flex-grow">
                    <Link to="/">
                        <li className="hover:shadow-md p-2 rounded-xl">
                            <div className="flex items-center">
                                <p className="text-xl font-bold">Music</p>
                            </div>
                        </li>
                    </Link>
                    <Link to="/podcast">
                        <li className="hover:shadow-md p-2 rounded-xl">
                            <div className="flex items-center">
                                <p className="text-xl font-bold">Podcast</p>
                            </div>
                        </li>
                    </Link>
                    <Link to="/audiobook">
                        <li className="hover:shadow-md p-2 rounded-xl">
                            <div className="flex items-center">
                                <p className="text-xl font-bold">Audiobook</p>
                            </div>
                        </li>
                    </Link>
                </ul>

                {/* Bottom */}
                <ul className="flex flex-col gap-4 p-4 mt-auto">
                    <li className="hover:shadow-md p-2 rounded-xl">
                        <div className="flex items-center">
                            <img src={profile_png} className="w-10" />
                            <p className="pl-4 text-xl font-bold">Profile</p>
                        </div>
                    </li>
                    <li className="hover:shadow-md p-2 rounded-xl">
                        <div className="flex items-center">
                            <img src={logout_png} className="w-10" />
                            <p className="pl-4 text-xl font-bold">Log out</p>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Index;
