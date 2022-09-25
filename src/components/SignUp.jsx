import { useState } from "react";
// import { Link } from "react-router-dom";

const SignUp = () => {
    
const [name, setName] = useState('');
const [email, setEmail] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, name);
}




    return ( 
        <div className="flex">

            <div>
                <img src="../images/travel.jpg" alt="travel"  className="hidden lg:block h-screen rounded-l-lg" />
            </div>


            <div className="pt-10 pr-2">
                <h1 className="font-bold text-3xl">Sign up</h1>
                <p className="text-sm pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quis sunt quaerat? <br /> Enim, impedit excepturi pariatur dignissimos expedita dolores suscipit.</p>

                <form onSubmit={handleSubmit} className="py-5 pt-5">

                    {/* Name */}
                <div className="py-2">
                  <input type="text" 
                  className="border-b border-b-gray-dark w-80 p-2 focus:outline-none text-sm text-black mb-5 focus:border-b-main-color focus:border-b-2" placeholder="Name" required 
                  value={name} onChange = { (e) => setName(e.target.value) }
                  />
                 </div>

                  {/* Email */}
                <div className="py-2">
                  <input type="email" 
                  className="border-b border-b-gray-dark w-80 p-2 focus:outline-none text-sm text-black mb-5 focus:border-b-main-color focus:border-b-2" placeholder="Email" required
                  value={email} onChange = { (e) => setEmail(e.target.value) }
                  />
                 </div>

                 {/* Password */}
                <div className="py-2">
                  <input type="password" 
                  className="border-b border-b-gray-dark w-80 p-2 focus:outline-none text-sm text-black mb-5 focus:border-b-main-color focus:border-b-2" placeholder="Password" />
                 </div>

                 <div className="py-2">
                  <input type="password" 
                  className="border-b border-b-gray-dark w-80 p-2 focus:outline-none text-sm text-black mb-5 focus:border-b-main-color focus:border-b-2" placeholder="Confirm Password"/>
                 </div>

                 {/* Button */}

                 <button 
                 className="btn btn-wide rounded-full bg-main-color border-none py-2 hover:bg-h-color hover:font-bold">
                    Create Account
                 </button>
                
                </form>

            </div>

           

            
        </div>
     );
}
 
export default SignUp;