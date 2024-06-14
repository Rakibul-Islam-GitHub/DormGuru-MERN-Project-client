
import { FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"


function NavBar() {




    return (
        <div className="nav-container">

            <div className="navbar text-white z-50">
                <div className="flex-1">
                    <Link to="/" className="logo">DormGuru</Link>
                </div>
                <div className="flex-none gap-3">
                    <Link to="/login" className="nav-link">Login</Link>
                    <Link to="/" className="nav-link"><FaUser /></Link>


                </div>
            </div>

        </div>
    )
}

export default NavBar
