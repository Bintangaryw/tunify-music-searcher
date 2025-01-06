import notification_png from "../../assets/img/bell.png";
import avatar_png from "../../assets/img/cat.png";

const index = () => {
    return (
        <>
            <div className="flex">
                <div className="basis-3/4">
                    <input type="text" placeholder="Search for tracks, artists, or albums" className="rounded-3xl bg-[#323232] py-3 px-3 w-full text-[#bebebe]" />
                </div>
                <div className="basis-1/4">
                    <div className="flex h-full w-full items-center justify-end">
                        <div className="flex items-center pr-9">
                            <button className="flex items-center">
                                <img src={notification_png} className="w-8 h-8" />
                                <p className="text-white pl-5">Notifications</p>
                            </button>
                        </div>

                        <button>
                            <img src={avatar_png} className="w-8 h-8" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;
