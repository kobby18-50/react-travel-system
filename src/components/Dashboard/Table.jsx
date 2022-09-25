import { Link } from "react-router-dom";

const Table = ({tours, icon1}) => {
    return ( 
        <div className="overflow-x-auto w-full pt-5">
                  {tours.map((tour) => (
                    <table key={tour.id} className="table w-full py-5">
                      {/* start of table body */}

                      <tbody className="pb-5">
                        <tr>
                          <td>
                            <div className="flex items-center space-x-3">
                              <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                  <img src={tour.image} alt="" />
                                </div>
                              </div>

                              <div>
                                <div className="font-bold">
                                  {tour.title}
                                </div>
                                <div className="text-sm opacity-50">
                                  {tour.city}
                                </div>
                              </div>
                            </div>
                          </td>

                          <td className="m-auto">

                            {tour.subcontent}
                            <br/>

                            <span className="badge badge-ghost badge-sm">
                            <p className="text-xs flex gap-1 text-bubble-gum">
                              <span> {icon1}</span>
                              <span>{tour.rating}</span>
                           </p>
                            </span>
                          </td>

                          <td>
                            ${tour.price + '/day'} 
                          </td>

                          <th>
                            <div className="btn btn-ghost btn-xs">
                              <Link to={`/tours/${tour.id}`}>
                              view
                              </Link>
                            </div>
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  ))}
                </div>
     );
}
 
export default Table;