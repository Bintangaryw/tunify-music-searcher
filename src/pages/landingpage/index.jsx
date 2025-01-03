import tunify_logo_clear from "../../assets/img/tunify_logo_clear.png";

const index = () => {
    return (
        <>
            <div className="h-screen flex justify-center items-center bg-[#161616]">
                <div className="w-full max-w-4xl overflow-hidden bg-[#323232] rounded-lg shadow-lg ">
                    <img className="object-cover w-[30%] mx-auto py-10" src={tunify_logo_clear} />

                    {/* Username input */}
                    <div className="py-5">
                        <div className="text-center">
                            <label className="block text-md font-bold text-gray-500 dark:text-gray-300">Username</label>

                            <input
                                type="text"
                                placeholder="Username"
                                className="w-[500px] block mt-2 mx-auto placeholder-gray-400/70 dark:placeholder-gray-500 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40 "
                            />
                        </div>
                    </div>
                    {/* Password input */}
                    <div className="py-3">
                        <div className="text-center">
                            <label className="block text-md font-bold text-gray-500 dark:text-gray-300">Password</label>

                            <input
                                type="password"
                                placeholder="Password"
                                className="w-[500px] block mt-2 mx-auto placeholder-gray-400/70 dark:placeholder-gray-500 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40 "
                            />
                        </div>
                    </div>
                    {/* Login button */}
                    <div className="py-3">
                        <div className="flex justify-center items-center">
                            <button className=" w-72 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-700 transform bg-[#94C3D2] rounded-full hover:bg-[#010C07] ">Login</button>
                        </div>
                    </div>
                    {/* Sign Up button */}
                    <div className="py-3 pb-10">
                        <div className="flex justify-center items-center">
                            <button className=" w-72 px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-700 transform bg-[#94C3D2] rounded-full hover:bg-[#010C07] ">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;
