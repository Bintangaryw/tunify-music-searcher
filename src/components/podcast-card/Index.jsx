import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Index = ({ id, name, image }) => {
    return (
        <>
            <Link to={`/${id}`}>
                <div className="max-w-[200px] h-full mx-auto text-white rounded-xl shadow-lg overflow-hidden hover:bg-[#323232]">
                    {/* Gambar */}
                    <div className="p-6">
                        <img className="w-full h-full object-cover rounded-full" src={image} />
                    </div>

                    {/* Detail */}
                    <div className="pb-6 text-center">
                        <h2 className="text-lg font-bold">{name}</h2>
                    </div>
                </div>
            </Link>
        </>
    );
};
Index.propTypes = {
    id: PropTypes.any,
    name: PropTypes.any,
    image: PropTypes.any,
};

export default Index;
