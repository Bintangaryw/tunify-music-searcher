import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Index = ({ id, name, artistName, image }) => {
    return (
        <>
            <Link to={`/${id}`}></Link>
            <div className="max-w-lg mx-auto bg-[#323232] text-white rounded-xl shadow-md flex">
                {/* Gambar */}
                <img className="w-64 h-64 object-cover rounded-xl m-6" src={image} alt="Album Art" />

                {/* Detail */}
                <div className="p-4 flex flex-col justify-center">
                    <h2 className="text-lg font-bold">{name}</h2>
                    <p className="text-gray-400">{artistName}</p>

                    {/* Tombol Play */}
                    <button className="mt-4 px-4 py-2 bg-white text-gray-800 font-medium rounded-full shadow-sm hover:bg-gray-200">Play</button>
                </div>
            </div>
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
