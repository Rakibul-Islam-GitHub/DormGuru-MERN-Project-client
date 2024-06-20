import { useContext } from "react";
import { AuthContext } from "../ContextProvider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";


function SignUp() {
    const { signUp, getName} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const fName = form.fname.value;
        const LName = form.lname.value;
        const email = form.email.value;
        const password = form.password.value;
        const url = form.photo.value;
        const dob = form.dob.value;
        const country = form.country.value;

        const info = {
            FirstName: fName,
            LastName: LName,
            Email: email,
            Password: password,
            Photo_Url: url,
            Date_Of_Birth: dob,
            Country: country
        }
        console.log(info);

        // firebase signup 
        signUp(email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                console.log(user);
                if (user) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Acount created successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                }

                // update user name
                getName(fName)

                navigate("/")

            })
            .catch((error) => {
                console.log(error.message);

            });

        
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
                            <p>Email Address :</p>
                            <input type="email" name="email" placeholder='Email' className='signup-input' autoComplete='off' />
                        </div>
                        <div className="w-full">
                            <p>Password :</p>
                            <input type="password" name="password" placeholder='Password' className='signup-input' autoComplete='off' />
                        </div>
                    </div>

                    <div className="w-full">
                        <p>Photo URL :</p>
                        <input type="url" name='photo' className='signup-input' autoComplete='off' placeholder='Photo link' />
                    </div>

                    <div className="input-flex">
                        <div className="w-full">
                            <p>Date of Birth :</p>
                            <input type="date" name="dob" id="" className='signup-input' autoComplete='off' />
                        </div>
                        <div className="w-full">
                            <p>Select Country :</p>
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
