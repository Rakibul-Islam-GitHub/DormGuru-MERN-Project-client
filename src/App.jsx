

import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from "react-router-dom";

import './App.css'
import NavBar from "./component/NavBar/NavBar.jsx";



const Login = lazy(() => import("./pages/Login.jsx"));
const SignUp = lazy(() => import("./pages/SignUp.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));
const DormDetails = lazy(() => import("./pages/dormdetails/DormDetails.jsx"));
const DormListing = lazy(() => import("./pages/dorm-listing/DormListing.jsx"));
const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard.jsx"));


import Dashboard2 from "./pages/Dashboard/Dashboard2.jsx";
import Dashboard3 from "./pages/Dashboard/Dashboard3.jsx";
import Dashboard4 from "./pages/Dashboard/Dashboard4.jsx";
import DashboardReport from "./pages/Dashboard/DashboardReport.jsx";


const App = () => {



  function AnonymousRoute() {
    const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'));
    return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Outlet />;
  }


  return (
    <>
      <Router>

        <NavBar></NavBar>

        <Suspense
          fallback={
            <div className="dorm-preloader-wrapper">
              <div className="dorm-preloader">
                <span></span>
                <span></span>
              </div>
            </div>
          }
        >
          <Routes>
          <Route path='/login' element={<Login />} />
              <Route path='/sign-up' element={<SignUp />} />
            <Route element={<AnonymousRoute />}>
            </Route>

            <Route path='/' element={<Home />} />
            <Route path='/dorm/:id' element={<DormDetails />} />
            <Route path='/alldorm' element={<DormListing />} />

            {/* dashboard */}
            <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/add-dorm" element={<Dashboard2/>} />
              <Route path="/review" element={<Dashboard4 />} />
              <Route path="/q-and-a" element={<Dashboard3/>} />
              <Route path="/dashboard/report" element={<DashboardReport/>} />

          </Routes>
        </Suspense>


      </Router>

    </>

  );
};

export default App;