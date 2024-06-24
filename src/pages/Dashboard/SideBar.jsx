import { Link } from "react-router-dom"


function SideBar() {
    return (
        <div className="drawer-side">


            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

            <ul className="menu py-4 w-80 min-h-full bg-[#7b5b1b] text-white ">
                {/* Sidebar content here */}

                <Link to="/dashboard/report" className="block px-4  py-4 border-b  hover:bg-gray-200 hover:text-gray-700">
                    Home
                </Link>
                <Link to="/dashboard" className="block px-4  py-4 border-b  hover:bg-gray-200 hover:text-gray-700">
                    Dorm List
                </Link>

                <Link to="/add-dorm" className="block px-4  py-4 border-b  hover:bg-gray-200 hover:text-gray-700">
                    Add New Dorm
                </Link>

                <Link to="/review" className="block px-4  py-4 border-b  hover:bg-gray-200 hover:text-gray-700">
                    Review List
                </Link>

                <Link to="/q-and-a" className="block px-4  py-4 border-b  hover:bg-gray-200 hover:text-gray-700">
                    Q & A Table
                </Link>

            </ul>

        </div>
    )
}

export default SideBar
