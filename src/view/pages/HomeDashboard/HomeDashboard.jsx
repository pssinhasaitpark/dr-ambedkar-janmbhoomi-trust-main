import React from "react";
import "./HomeDashboard.css";
import { useAbouts } from "../../hooks/index.js";
// import { image404 } from "../../../assests/index.js";
const HomeDashboard = () => {
  const { data, isLoading, error } = useAbouts();
 
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
          data.map((about, index) => (
            <div key={index} className="about-item ">
                {about.images && about.images.length > 0 ? (
               <div className="event-images">
               {about.images.map((img, index) => (
                 <img
                   key={index}
                   src={img}
                   alt={"about-image"} 
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
              <h2 className="text-uppercase fs-1 mt-5 ">{about.title}</h2>
              <p className="mb-3 fs-5">{about.name}</p>
              <div className="border border-2 mt-3 p-3">
              <div
                dangerouslySetInnerHTML={{
                  __html: about.biography,
                }}
              />
             
               </div>
            </div>
          ))
        ) : (
          <p>No events found</p>
        )}
      </div>
    </div>
    
  );
};

export default HomeDashboard;
