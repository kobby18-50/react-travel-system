import { useState } from "react";
import SideBar from "../Dashboard/SideBar";
import {FaChevronCircleLeft} from "react-icons/fa";

const Transaction = () => {

    const [open, setOpen] = useState(true);
    
    return ( 
        <div className="flex">
           <div className={`${open ? "w-72" : "w-20"}  duration-300 w-72 h-screen p-5 pt-8 bg-white relative`}>
           <span onClick={ () => setOpen(!open) }
            className = {`absolute cursor-pointer rounded-full -right-3 top-9 w-5   text-main-color ${!open && "rotate-180"}`}>
                <FaChevronCircleLeft />
            </span>

            <div className="flex gap-x-4 items-center">
                <img src="../images/world.png" alt="" className={`cursor-pointer duration-500 w-5 ${ open && "rotate-[360deg]" }`} />

            <h1 className={`origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>Kobby Air</h1>

            </div>

            {/* Sidebar links */}

            <SideBar open={open} />

            

           

           </div>

           <div className="p-7 text-2xl font-semibold flex-1 h-screen bg-new-color">
            <h1>Transactions</h1>
           </div>

           <div className="bg-white">
            hello
           </div>

        </div>
     );
}
 
export default Transaction;