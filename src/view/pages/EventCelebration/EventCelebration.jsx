import React from "react";
import { useEvents } from "../../hooks/index";

const EventCelebration = () => {
  const { data, isLoading, error } = useEvents();
 
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
          data.map((event, index) => (
            <div key={index} className="event-item ">
                {event.images && event.images.length > 0 ? (
               <div className="all-images">
               {event.images.map((img, index) => (
                 <img
                   key={index}
                   src={img}
                   alt={"event-image"} 
                   className="all-image"
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
              <h2 className="text-uppercase fs-1 mt-5 m-0 p-0 ">{event.title}</h2>
              <p className="mb-3 fs-5">{event.name}</p>
              <div className="border border-2 mt-3 px-3">
              <div
                dangerouslySetInnerHTML={{
                  __html: event.description,
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

export default EventCelebration;