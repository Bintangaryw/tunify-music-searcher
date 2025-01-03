const index = () => {
    return (
        <>
            <div className="max-w-sm mx-auto bg-[#323232] text-white rounded-xl shadow-md overflow-hidden">
                {/* Gambar Album */}
                <img className="w-full h-64 object-cover" src="https://via.placeholder.com/300" alt="Album Art" />

                {/* Detail Album */}
                <div className="p-4">
                    <h2 className="text-lg font-bold">Urban Sunset</h2>
                    <p className="text-gray-400">Artist: The City Lights</p>

                    {/* Tombol Play */}
                    <button className="mt-4 px-4 py-2 bg-white text-gray-800 font-medium rounded-full shadow-sm hover:bg-gray-200">Play</button>
                </div>
            </div>
        </>
    );
};

export default index;
