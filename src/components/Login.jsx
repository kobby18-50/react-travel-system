// import { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {

    // const [email, setEmail] = useState('');

    // const handleSubmit = () => console.log(email);

    return ( 
        <div className="flex pl-7">
            <div className="pt-10">
                <h1 className="font-bold text-3xl">Log in</h1>
                <p className="text-sm pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quis sunt quaerat? <br /> Enim, impedit excepturi pariatur dignissimos expedita dolores suscipit.</p>

                <form className="py-5 pt-5">

                  {/* Email */}
                <div className="py-2">
                  <input type="email" 
                  className="border-b border-b-gray-dark w-80 p-2 focus:outline-none text-sm text-black mb-5 focus:border-b-main-color focus:border-b-2" placeholder="Email" required/>
                 </div>

                 {/* Password */}
                <div className="py-2">
                  <input type="password" 
                  className="border-b border-b-gray-dark w-80 p-2 focus:outline-none text-sm text-black mb-5 focus:border-b-main-color focus:border-b-2" placeholder="Password" required/>
                 </div>

                 {/* Login btn */}
                <Link to={'/dash-board'}>
                 <div 
                 className="btn btn-wide rounded-full bg-main-color border-none py-2 hover:bg-h-color hover:font-bold">
                    login
                 </div>
                </Link>
                
                              
                <div className="flex justify-between py-7">
                 {/* Checkbox */}
                  <div>
                  <input type="checkbox" name="remember" id="" />
                 <label>Remember me</label>
                  </div>


                  {/* Forgot Password */}

                  <Link to={'/forgot'}>
                <span 
                className="font-medium text-md text-main-color hover:text-h-color">Forgot Password?</span>
                </Link>
                 
                
                </div>

                {/* Last section */}

                <div className="text-center space-x-3">
                  <span>Don't have an account? </span>

                  <Link to={'/sign-up'}>
                  <span className="font-medium text-main-color hover:text-h-color">Sign up</span>
                  </Link>
                </div>
                </form>


                

            </div>
            <div>
                <img src="../images/travel.jpg" alt="travel"  className="hidden lg:block h-screen rounded-l-lg float-right" />
            </div>
        </div>
        
     );
}
 
export default Login;