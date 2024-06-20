

import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from "react-router-dom";

import './App.css'
import NavBar from "./component/NavBar/NavBar.jsx";



const Login = lazy(() => import("./pages/Login.jsx"));
const SignUp = lazy(() => import("./pages/SignUp.jsx"));
const Home = lazy(() => import("./pages/Home.jsx"));
const DormDetails = lazy(() => import("./pages/dormdetails/DormDetails.jsx"));

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

            <Route element={<AnonymousRoute />}>

              <Route path='/login' element={<Login />} />
              <Route path='/sign-up' element={<SignUp />} />


            </Route>

            <Route path='/' element={<Home />} />
            <Route path='/dorm/:id' element={<DormDetails />} />

          </Routes>
        </Suspense>


      </Router>

    </>

  );
};

export default App;