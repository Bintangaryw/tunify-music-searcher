import play_png from "../../assets/img/play.png";

const index = () => {
    return (
        <>
            <div className="py-2">
                <div className="max-w-lg bg-[#323232] p-3 rounded-3xl flex justify-between items-center">
                    <button>
                        <img src={play_png} className="w-8 h-8" />
                    </button>
                    <p className="text-white font-bold">Paris</p>
                    <p className="text-white italic">The Chainsmokers</p>
                    <p className="text-white">4:28</p>
                </div>
            </div>
        </>
    );
};

export default index;
