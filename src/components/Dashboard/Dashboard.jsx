import { useState } from "react";
import {FaChevronCircleLeft} from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import { ImStarEmpty } from "react-icons/im";
import TourList from "../Minor/TourList";
import Table from "./Table";
import SideBar from "./SideBar";
import useFetch from "../Minor/useFetch";


const Dashboard = () => {

    const [open, setOpen] = useState(true);
    

    const user = "Edward";

   const {tours, isLoading, error} = useFetch('http://localhost:8000/tours');

   const icon1 = <ImStarEmpty />;
   const icon2 = <GoLocation />;
    
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
            {/* Side bar sub links */}
            <SideBar  open = {open} />
           </div>

           {/* Dash board details */}

           <div className="p-7 flex-1 h-screen bg-new-color rounded-md shadow-md w-2/5">

            <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">Hello {user}!</h1>
            
            <div className="flex space-x-2">
            <input type="text"  placeholder="Search Destinations..." className="focus:outline-none rounded-lg p-3"/>
            <div className="text-2xl pt-2 border bg-white border-white rounded-lg p-3 cursor-pointer">
            <IoNotificationsOutline />
            </div>

            </div>
            </div>

            <span className="text-sm text-gray-500 mb-5">Welcome back and explore the world</span>

            {/* loading message */}

            {isLoading && <div>Data is now loading please wait.....</div>}


            {/* Display Tour List */}

            {/* error message */}
            {error && <div> {error} </div>}

           {tours && <TourList tours={ tours } icon1 = {icon1} icon2 = {icon2} />}  

                {/* table */}

            {tours && <Table tours={tours} icon1 = {icon1}/>}
           </div>

           {/* End of second box */}

           {/* <div className="bg-white w-72">
            {tours && <Previous tours= {tours} />}
           </div> */}

        </div>
     );
}
 
export default Dashboard;