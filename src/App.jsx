

import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from "react-router-dom";

import './App.css'


const Login = lazy(() => import("./pages/Login.jsx"));
const   Home = lazy(() => import("./pages/Home.jsx"));

const App = () => {

 
  
  function AnonymousRoute () {
    const isAuthenticated = JSON.parse(localStorage.getItem('isAuthenticated'));
    return isAuthenticated ? <Navigate to="/dashboard" replace /> : <Outlet />;
  }


  return (
    <>
            <Router>
    
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
    
    
    </Route>

    <Route path='/' element={<Home />} />

            </Routes>
          </Suspense>
       

      </Router>

    </>

  );
};

export default App;