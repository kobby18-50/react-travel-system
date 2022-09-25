import { Link } from "react-router-dom";
import { FiCornerUpRight } from "react-icons/fi";

const TourList = ( { tours, icon1, icon2 } ) => {
    return ( 
        <div className="flex space-x-2 pt-5">
            
            {tours.map((tour) => (
            <div key={tour.id} className="card w-96 h-72 shadow-xl image-full">

                

                <figure> <img src={tour.image} alt="" /> </figure>
                <div className="card-body">
                    <div className="absolute bottom-5">
                    <p className="text-md"> {tour.title} </p>
                    <div className="flex space-x-20">
                    
                    <p className="text-xs flex gap-1">
                         <span>{icon2} </span>
                         <span> {tour.city} </span>
                         
                    </p>

                    <p className="text-xs flex gap-1">
                         <span> {icon1}</span>
                         <span>{tour.rating}</span>
                    </p>

                    <Link to={`/tours/${tour.id}`}>
                         <span> <FiCornerUpRight/> </span>
                    </Link>
                    

                    </div>
                    </div>
                    
                </div>
                
              
                
                
                    
            </div>
          

        ))}
        
    </div> 
     );
}
 
export default TourList;