import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Index = ({ id, name, genres, image }) => {
    return (
        <>
            <Link to={`/${id}`}>
                <div className="max-w-sm h-full mx-auto bg-[#323232] text-white rounded-xl shadow-md overflow-hidden">
                    {/* Gambar */}
                    <div className="p-6">
                        <img className="w-full h-64 object-cover rounded-xl" src={image} />
                    </div>

                    {/* Detail */}
                    <div className="pb-6 text-center">
                        <h2 className="text-lg font-bold">{name}</h2>
                        <p className="text-gray-400 truncate">{genres}</p>
                    </div>
                </div>
            </Link>
        </>
    );
};
Index.propTypes = {
    id: PropTypes.any,
    name: PropTypes.any,
    genres: PropTypes.any,
    image: PropTypes.any,
};

export default Index;
