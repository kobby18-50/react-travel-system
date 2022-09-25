import { useState } from "react";
import SideBar from "../Dashboard/SideBar";
import {FaChevronCircleLeft} from "react-icons/fa";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

const MyTickets = () => {

    const [open, setOpen] = useState(true);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [from, setFrom] = useState('Ghana');
    const [to, setTo] = useState('Dubai');
    const [passengers, setPassengers] = useState();
    const [price, setPrice] = useState(0.00);

    const handleSubmit = (e) => {
        e.PreventDefault();
        console.log('submitted');
    }

    const user = 'Edward Kobby';
    

    // const {tours} = useFetch('http://localhost:8000/tours');

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
            <h1>Tickets</h1>

            <p>Book your ticket now!</p>

            <div className="flex space-x-40">
                <div>
                <form onSubmit={handleSubmit}>
            <div className="py-2">
                <label className="text-base">Current location</label><br />
            <input type="text" value={from} onChange = { e => setFrom(e.target.value)} className="duration-200 border-b border-b-gray-dark w-80 p-2 focus:outline-none text-sm text-black mb-5 focus:border-b-main-color focus:border-b-2" placeholder="From" required/>
            </div> 

            <div className="py-2">
            <label className="text-base">Destination</label><br />
                <select value={to} onChange = {e => setTo(e.target.value)} className="duration-200 w-80 p-2 text-sm text-black mb-5 focus:outline-none focus:border-b-main-color focus:border-b-2">
                    <option value="Dubai">Dubai</option>
                    <option value="Venice">Venice</option>
                    <option value="Cancun">Cancun</option>
                    <option value="United States">United States</option>
                </select>
            </div>
 
            <label className="text-base">Start Date</label><br />
            <DatePicker className="py-2 border-b border-b-gray-dark w-80 focus:outline-none text-sm text-black p-2 duration-200 mb-5 focus:border-b-main-color focus:border-b-2"
            selected={startDate}
            onChange = { e => setStartDate(e) }
            selectsStart
            startDate={startDate}
            endDate = {endDate}
            dateFormat = "dd MMM yyy"
            withPortal
    
            />   

            <label className="text-base">End Date</label><br />
            <DatePicker className="py-2 border-b border-b-gray-dark w-80 focus:outline-none text-sm text-black p-2 duration-200 mb-5 focus:border-b-main-color focus:border-b-2"
            selected={endDate}
            onChange = { e => setEndDate(e) }
            selectsEnd
            startDate= {startDate}
            endDate = {endDate}
            minDate = {startDate}
            dateFormat = "dd MMM yyy"
            withPortal
            />   

            <div className="py-2 ">
            <label className="text-base">Number Of Passengers</label><br />
                <select value={passengers} onChange = {e => setPassengers(e.target.value)} className="duration-200 w-40 p-2 text-sm text-black mb-5 focus:outline-none focus:border-b-main-color focus:border-b-2">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>

            <div className="py-2 flex space-x-10">
                <label className="text-base">Price</label><br />
            <input type="text" value={price} onChange = { e => setPrice(e.target.value)} className="duration-200 border-b border-b-gray-dark w-40 p-2 focus:outline-none text-sm text-black mb-5 focus:border-b-main-color focus:border-b-2" required/>

            <button className="btn w-32 rounded-full bg-main-color border-none py-2 hover:bg-h-color hover:font-bold" >
                    Book now!
            </button>

            </div> 

                
            </div>
            </form>
            </div>

            <div>
            <table className="border">
                <tr>
                    <td className="text-xs">Passenger</td>
                    <td className="text-xs">Start Date</td>
                </tr>

                <tr className="font-semibold text-lg">
                    <td>{user}</td>
                    <td>{startDate.toDateString()}</td>
                </tr>

                <tr className="text-xs">
                    <td>Flight</td>
                    <td>End Date</td>
                </tr>

                <tr className="font-semibold text-lg">
                    <td>999898898</td>
                    <td>{endDate.toDateString()}</td>
                </tr>

                <tr className="text-xs">
                    <td>Class</td>
                    <td>Seats</td>
                </tr>

                <tr className="font-semibold text-lg">
                    <td>Economy</td>
                    <td>17B</td>
                </tr>
            </table>
            </div>
            
            </div>         
           </div>
           

           {/* <div className="bg-white">
            hello
           </div> */}

        </div>

     );
}
 
export default MyTickets;