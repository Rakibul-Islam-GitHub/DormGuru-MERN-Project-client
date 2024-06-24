import { useContext } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registration } from "../store/slices/auth-slice";


function SignUp() {
    const dispatch = useDispatch()
    const { signUp, getName} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const fName = form.fname.value;
        const LName = form.lname.value;
        const email = form.email.value;
        const password = form.password.value;
        const dob = form.dob.value;
        const country = form.country.value;
        const profilePic = form.profilePic.value;
        const userName = form.userName.value;

        const info = {
            firstName: fName,
            lastName: LName,
            userName : userName,
            profilePic : profilePic,
            email: email,
            password: password,
            dob: dob,
            country: country
        }
 
        if(info.firstName && info.lastName && info.userName && info.profilePic && info.email && info.password && info.dob && info.country){
            dispatch(registration({info, navigate}))
        }

    

    }

    return (
        <div className="sign-up">
            <div className="signup-form">
                <p className='text-3xl text-center mb-7'>Registration Here</p>

                {/* Registration form 
                    ------------------------------ */}
                <form onSubmit={handleSignUp} className="space-y-4 text-xs">

                    <div className="input-flex">
                        <div className="w-full">
                            <p>Frist Name :</p>
                            <input type="text" name='fname' className='signup-input' autoComplete='off' placeholder='Frist Name' />
                        </div>
                        <div className="w-full">
                            <p>Last Name :</p>
                            <input type="text" name='lname' className='signup-input' autoComplete='off' placeholder='Last Name' />
                        </div>
                    </div>
                    <div className="input-flex">
                    <div className="w-full">
                            <p>user Name :</p>
                            <input type="text" name='userName' className='signup-input' autoComplete='off' placeholder='Frist Name' />
                        </div>
                        <div className="w-full">
                            <p>Password :</p>
                            <input type="password" name="password" placeholder='Password' className='signup-input' autoComplete='off' />
                        </div>
                    </div>
                    <div className="input-flex">
                    <div className="w-full">
                            <p>Email Address :</p>
                            <input type="email" name="email" placeholder='Email' className='signup-input' autoComplete='off' />
                        </div>
                    
                        <div className="w-full">
                            <p>Profile Picture :</p>
                            <input type="text" name='profilePic' className='signup-input' autoComplete='off' placeholder='Last Name' />
                        </div>
                    </div>
                    <div className="input-flex">
                        <div className="w-full">
                            <p>Date of Birth :</p>
                            <input type="date" name="dob" id="" className='signup-input' autoComplete='off' />
                        </div>
                        <div className="w-full">
                            <p>Birth Country :</p>
                            <input type="text" name="country" id="" placeholder='Select Country' className='signup-input' autoComplete='off' />
                        </div>
                    </div>

                    <input type="submit" value="Registration" className='signup-btn' />

                    <p className='text-xs pt-3 text-center'>Already have an acount? <Link className='toggle-link' to="/login">Login</Link></p>

                </form>

            </div>
        </div>
    )
}

export default SignUp
