import tunify_logo_clear from "../../assets/img/tunify_logo_clear.png";

const index = () => {
    return (
        <>
            <div className="h-screen w-72 bg-[#323232] text-white rounded-xl flex flex-col">
                <div className="p-4 text-lg font-bold">
                    <img src={tunify_logo_clear} className="w-32 mx-auto" />
                </div>

                {/* Top */}
                <ul className="flex flex-col gap-4 p-4 flex-grow">
                    <li className="hover:shadow-md p-2 rounded-xl">Dashboard</li>
                    <li className="hover:shadow-md p-2 rounded-xl">Settings</li>
                    <li className="hover:shadow-md p-2 rounded-xl">Profile</li>
                    <li className="hover:shadow-md p-2 rounded-xl">Logout</li>
                </ul>

                {/* Bottom */}
                <ul className="flex flex-col gap-4 p-4 mt-auto">
                    <li className="hover:shadow-md p-2 rounded-xl">Dashboard</li>
                    <li className="hover:shadow-md p-2 rounded-xl">Settings</li>
                </ul>
            </div>
        </>
    );
};

export default index;
