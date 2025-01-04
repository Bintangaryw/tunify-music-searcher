import Sidebar from "../../components/sidebar/index";

const index = () => {
    return (
        <>
            <div className="flex">
                <div className="p-8">
                    <Sidebar />
                </div>

                <div>
                    <p></p>
                </div>
            </div>
        </>
    );
};

export default index;
