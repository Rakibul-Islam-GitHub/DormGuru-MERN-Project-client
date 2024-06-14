
import { FiSearch } from "react-icons/fi";
import accommodation from '../assets/icon/accommodation.png'
import hostela from '../assets/icon/hostela.png'


const Home = () => {
    return (
        <div className="home">
            <div className="home-bg">
                <div className="">
                    <h1>DormGuru</h1>
                    <p className="home-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae deserunt asperiores odit sit magnam ipsum labore molestias rem, nam quos dolorem accusamus!</p>
                </div>

                <div className="home-search">
                    <div className="home-icon-container">
                        <div className=" flex flex-col items-center">
                            <img src={accommodation} alt="" className=" w-16 sm:w-24"/>
                            <p>Student Accommodation</p>
                        </div>
                        <div className=" flex flex-col items-center">
                            <img src={hostela} alt="" className=" w-16 sm:w-24"/>
                            <p>Hostel</p>
                        </div>

                    </div>

                    <label className="search-container">
                        <input type="text" className="search-input" placeholder="Search by title" autoComplete="off"/>
                        <FiSearch className="search-icon" />
                    </label>
                </div>
            </div>
        </div>

    );
};

export default Home;