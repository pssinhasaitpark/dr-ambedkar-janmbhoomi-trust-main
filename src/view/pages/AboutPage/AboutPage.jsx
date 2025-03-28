
import React from "react";
import "./AboutPage.css";
import { useAbouts } from "../../hooks/index.js";

const HomeDashboard = () => {
  const { data, isLoading, error } = useAbouts();

  if (isLoading) {
    return <div className="spinner"></div>;
  }

  // if (error) {
  //   return <div>Error fetching events: {error}</div>;
  // }
  if (error) {
    const errorMessage = error.message || "An unknown error occurred.";
    return <div>{errorMessage}</div>;
  }


  return (
    <div className="all-section-width">
      <div className="">
        {data && data.length > 0 ? (
          data.map((about, index) => (
            <div key={index} className="about-item">
              {about.images && about.images.length > 0 ? (
                <div className="event-banner">
                  <img
                    src={about.images[0]}
                    alt={"about-banner"}
                    className="event-banner-image"
                    loading="lazy"
                    style={{
                      width: "100%",
                      maxHeight: "500px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ) : (
                <p>No images available</p>
              )}

              <h2 className="text-uppercase fs-1 mt-4 p-0 m-0">{about.title}</h2>
              <p className="mb-3 fs-5">{about.name}</p>
              <div className="border border-2 mt-3 p-3">
                <div
                  className="about-desy"
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







// import React from "react";
// import "./AboutPage.css";
// import { useAbouts } from "../../hooks/index.js";
// const HomeDashboard = () => {
//   const { data, isLoading, error } = useAbouts();

//   if (isLoading) {
//     return <div className="spinner"></div>;
//   }

//   if (error) {
//     return <div>Error fetching events: {error}</div>;
//   }

//   return (
//     <div className="all-section-width">
//       <div className="mt-5 p-3">
//         {data && data.length > 0 ? (
//           data.map((about, index) => (
//             <div key={index} className="about-item">
//               {about.images && about.images.length > 0 ? (
//                 <div className="event-banner">
//                   <img
//                     src={about.images[0]} 
//                     alt={"about-banner"}
//                     className="event-banner-image"
//                     loading="lazy"
//                     style={{
//                       width: "100%",
//                       maxHeight: "500px",
//                       objectFit: "cover", 
//                     }}
//                   />
//                 </div>
//               ) : (
//                 <p>No images available</p>
//               )}

//               <h2 className="text-uppercase fs-1 mt-5 p-0 m-0">{about.title}</h2>
//               <p className="mb-3 fs-5">{about.name}</p>
//               <div className="border border-2 mt-3 p-3">
//                 <div
//                   dangerouslySetInnerHTML={{
//                     __html: about.biography,
//                   }}
//                 />
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No events found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomeDashboard;





















