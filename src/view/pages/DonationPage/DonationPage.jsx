import React from "react";
import { Link } from "react-router-dom";
import { useDonations } from "../../hooks/index";
import "./Donation.css";
const DonationPage = () => {
  const { data, isLoading, error } = useDonations();
 
  if (isLoading) {
    return <div className="spinner"></div>;
  }

  if (error) {
    return <div>Error fetching events: {error}</div>;
  }

  return (
    <div className="all-section-width">

      <div className="mt-5 p-3">
        {data && data.length > 0 ? (
          data.map((donation, index) => (
            <div key={index} className="event-item ">
                {donation.images && donation.images.length > 0 ? (
               <div className="event-images">
               {donation.images.map((img, index) => (
                 <img
                   key={index}
                   src={img}
                   alt={"event-image"} 
                   className="event-image"
                   loading="lazy"
                   style={{
                    width: "1495px",
                    maxHeight: "500px",
                    overflow: "hidden"
                  }}
                   
                 />
               ))}
             </div>
             
              ) : (
                <p>No images available</p>
              )}
              <h2 className="text-uppercase fs-1 mt-5 m-0 p-0">{donation.title}</h2>
              <p className="mb-3 fs-5">{donation.name}</p>
              <div className="border border-2 mt-3 p-3">
              <div
                dangerouslySetInnerHTML={{
                  __html: donation.description,
                }}
              />
             
               </div>
            </div>
          ))
        ) : (
          <p>No events found</p>
        )}
      </div>
      
      <button className="btn btn-primary" ><Link to="/donate" className="text-light fs-4 text-decoration-none">Donate</Link></button>

    </div>
    
  );
};


export default DonationPage;
