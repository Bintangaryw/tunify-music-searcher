import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Index = ({ id, name, artistName, image }) => {
    return (
        <>
            <Link to={`/${id}`}>
                <div className="w-full h-full mx-auto text-white rounded-xl shadow-md flex hover:bg-[#323232]">
                    {/* Gambar */}
                    <img className="w-32 h-32 object-cover rounded-xl m-6" src={image} alt="Album Art" />

                    {/* Detail */}
                    <div className="w-full p-4 flex flex-col justify-center">
                        <h2 className="text-lg font-bold">{name}</h2>
                        <p className="text-gray-400">{artistName}</p>
                    </div>
                </div>
            </Link>
        </>
    );
};

Index.propTypes = {
    id: PropTypes.any,
    name: PropTypes.any,
    artistName: PropTypes.any,
    image: PropTypes.any,
};

export default Index;
