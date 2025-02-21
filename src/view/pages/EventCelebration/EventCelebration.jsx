import React from "react";
import useEvents from "../../hooks/HomeHook/useEvents";

const EventCelebration = () => {
  const { data, isLoading, error } = useEvents();
  console.log("sLoading:", isLoading);
  console.log("error:", error);
  console.log("data:", data);

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
               <div className="event-images">
               {event.images.map((img, index) => (
                 <img
                   key={index}
                   src={img}
                   alt={"event-image"} 
                   className="event-image"
                   style={{
                    width:"1495PX"
                   }}
                 />
               ))}
             </div>
             
              ) : (
                <p>No images available</p>
              )}
              <h2 className="text-uppercase fs-1 mt-5 ">{event.title}</h2>
              <p className="mb-3 fs-5">{event.name}</p>
              <div className="border border-2 mt-3 p-3">
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
