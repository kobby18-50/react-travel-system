import { Link } from "react-router-dom";
import { FaRegCommentAlt, FaRegHeart, FaRegSun, FaHome} from "react-icons/fa";
import { HiOutlineTicket } from "react-icons/hi";
import { GiPayMoney } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { RouteNames } from "../Minor/constants";

const SideBar = ({open}) => {
    const Menus = [
        {
            title : 'Dashboard',
            icon : <FaHome/>,
            route : RouteNames.dash
        },

        {
            title : 'My Tickets',
            icon : <HiOutlineTicket />,
            route : RouteNames.tickets,
        },

        {
            title : 'Favourite',
            icon : <FaRegHeart/>,
            route : RouteNames.favourites,
            gap : true,
        },

        {
            title : 'Message',
            icon : <FaRegCommentAlt/>,
            route : RouteNames.message
        },

        {
            title : 'Transaction',
            route: RouteNames.transaction,
            icon : <GiPayMoney/>
        },

        {
            title : 'Settings',
            icon : <FaRegSun/>,
            route : RouteNames.settings
        },

        {
            title : 'Logout',
            icon : <FiLogOut/>,
            last : true,
            route : RouteNames.home
            
        }
    ]

    return ( 
        <ul className="pt-6">
                {Menus.map((menu, index) => (
                    <Link
                    to={menu.route} 
                    key={index}
                    className = 
                    {
                        `text-gray-300 text-md flex items-center gap-x-4 cursor-pointer p-2 hover:bg-h-color rounded-md ${menu.gap ? "mt-9" : "mt-2"}
                        ${menu.last ? "absolute bottom-0" : "text-black"}    `} >
                        {menu.icon}
                        <span className={`${!open && "hidden"} origin-left duration-200`}> {menu.title} </span>
                     </Link>
                ))}
            </ul>
     );
}
 
export default SideBar;