import play_png from "../../assets/img/play.png";

const Index = ({ name, artistName, duration }) => {
    return (
        <>
            <div className="py-2">
                <div className="max-w-lg bg-[#323232] p-3 rounded-3xl flex justify-between items-center">
                    <button>
                        <img src={play_png} className="w-8 h-8" />
                    </button>
                    <p className="text-white font-bold">{name}</p>
                    <p className="text-white italic">{artistName}</p>
                    <p className="text-white">{duration}</p>
                </div>
            </div>
        </>
    );
};

export default Index;
