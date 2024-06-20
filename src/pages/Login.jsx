
import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { PiNavigationArrowFill } from 'react-icons/pi';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../ContextProvider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { login, googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const info = {
            Email: email,
            Password: password
        }
        console.log(info);

        // firebase login
        // password login
        login(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // console.log(user);
                navigate("/")

            })
            .catch((error) => {
                console.log(error.message);
                if (error) {
                    Swal.fire("Your email or password is invalid! please try again with coreect information");
                }
                form.reset()
            });

    }

    /// google login 
    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                // console.log(user);

                Swal.fire({
                    title: 'success!',
                    text: 'A verification email sent to your email acount. Please verify your email!',
                    icon: 'success',
                    confirmButtonText: 'ok'
                })
                navigate("/")


            }).catch((error) => {
                console.log(error.message);
                // ...
            });
    }
    return (
        <div className="w-full  pt-40">

            <div className="login-container">
                {/* left-side  */}
                <div className="login-left pl-12">
                    <PiNavigationArrowFill className='text-8xl rotate-[225deg]' />
                    {/* <div onClick={handleGoogleLogin} className="google-login">
                        <FcGoogle className='text-2xl' />
                        <span>Login with Google</span>
                    </div> */}
                    <p className='text-xs pt-9'>Don&apos;t have any acound? <Link className='toggle-link' to="/sign-up">Sing Up</Link></p>
                </div>

                {/* right side  */}
                <div className="login-form">
                    <p className='text-3xl text-center mb-7'>Login Here</p>

                    {/* login form 
                    ------------------- */}
                    <form onSubmit={handleLogin}>
                        <input type="email" name="email" id="" placeholder='your email' className='login-input' autoComplete='off' />

                        <input type="password" name="password" id="" placeholder='your password' className='login-input' autoComplete='off' />

                        <input type="submit" value="Login" className='login-btn' />
                    </form>

                </div>
            </div>

        </div>
    );
};

export default Login;