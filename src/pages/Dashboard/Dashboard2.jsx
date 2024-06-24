
import { MdDoubleArrow } from "react-icons/md";
import SideBar from "./SideBar";
import AddDorm from "./AddDorm";

function Dashboard2() {

    return (
        <div className="dashbord-page drawer lg:drawer-open">
            <label htmlFor="my-drawer-2" className=" lg:hidden h-fit"><MdDoubleArrow className="text-[#ab8627] bg-[#0000001b] text-4xl p-2" /></label>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content md:px-8 w-full mt-10 -ml-5 lg:-ml-0">
                {/* Page content here */}

                <AddDorm></AddDorm>

            </div>

            <SideBar></SideBar>
        
        </div>
    )
}

export default Dashboard2
