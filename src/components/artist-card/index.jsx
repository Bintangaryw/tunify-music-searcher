const index = () => {
    return (
        <>
            <div className="max-w-sm mx-auto bg-[#323232] text-white rounded-xl shadow-md overflow-hidden">
                {/* Gambar */}
                <div className="p-6">
                    <img className="w-full h-64 object-cover rounded-xl" src="https://via.placeholder.com/300" alt="Album Art" />
                </div>

                {/* Detail */}
                <div className="pb-6 text-center">
                    <h2 className="text-lg font-bold">The Rolling Stones</h2>
                    <p className="text-gray-400">Rock Legends</p>
                </div>
            </div>
        </>
    );
};

export default index;
