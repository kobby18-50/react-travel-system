import { useParams } from "react-router-dom";
import useFetch from "../Minor/useFetch";

const TourDetails = () => {

    const { id } = useParams();
     const {tours, error, isLoading} = useFetch('http://localhost:8000/tours/' + id);
    return ( 
        <div>
          <>
            {error && <div> Please select from the dashboard table  </div>}
            {isLoading && <div>Please wait ...</div>}
            {tours && (
                <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <img src= {tours.image} className="max-w-sm rounded-lg shadow-2xl" alt="tour_image" />
                  <div>
                    <h1 className="text-5xl font-bold"> {tours.title} </h1>
                    <p className="py-6"> {tours.content} </p>
                    <p> Price : $ {tours.price} </p>
                    
                  </div>
                </div>
              </div>
            ) }
        </>

        
        </div>
     );
}
 
export default TourDetails;