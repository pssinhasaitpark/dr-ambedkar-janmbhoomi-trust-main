import React from "react";
import {visitor} from "../../../assests/index";
const VisitorPage = () => {
  return (
    <div>
      {" "}
      <div className="all-section-width ">
 <div className="img-banner ">
        <img src={visitor} alt="visitor-image" className="mb-2 all-image" />
      </div>
        <div className="mt-5 mb-4">
        <h2 className="text-uppercase fs-1 m-0 p-0 "> VISITOR INFORMATION</h2>
        <p className="mb-3 fs-5">Dr. Bhimrao Ambedkar</p>
        <p className=" fw-medium  mt-2 paragraph-birth ">
          <span className="fs-3">Visitor Information :</span> Dr. B.R. Ambedkar's birthplace
          in Mhow, Madhya Pradesh is a significant site for those wishing to pay
          homage to the architect of India's Constitution. Here's all the
          information you need for your visit
        </p>
      </div>
        <div className="info-container border mt-2 p-4">
          <div className="section-title fw-medium mb-1 fs-4">Visiting Hours:</div>
          <ul className="fs-5">
            <li>Open: Monday to Sunday</li>
            <li>Timings: 9:00 AM – 6:00 PM</li>
            <li>
              Closed on: National holidays (unless special events are held)
            </li>
          </ul>

          <div className="divider border-top my-4"></div>

          <div className=" fs-5 fw-medium">Attractions & Highlights:</div>
          <ul className="lh-base fs-5 m-0">
            <li>
               Dr. Ambedkar Memorial: The main memorial is dedicated to Dr.
              Ambedkar's life and work, showcasing his pivotal role in shaping
              modern India.
            </li>
            <li>
               Birthplace Site: Visit the location where Dr. Ambedkar was born,
              now preserved as part of the memorial.
            </li>
            <li>
               Museum & Exhibits: Learn about his contributions through curated
              exhibits, including photos, documents, and artifacts.
            </li>
            <li>
             Educational Center: An area dedicated to promoting Dr.
              Ambedkar's principles of social justice and equality.
            </li>
          </ul>

          <div className=" fs-5 fw-medium">
            Location and directions to the birthplace.:
          </div>
          <ul className="lh-base fs-5 m-0">
            <li>
               By Train: Mhow is well connected via rail. The Mhow Railway
              Station is the nearest station, approximately 3 km from the
              memorial.
            </li>
            <li>
               By Bus: Mhow is accessible by public buses and private
              transport. Mhow's main bus station is a short distance from the
              birthplace.
            </li>
            <li>
               By Air: The nearest major airport is Indore Airport, which is
              about 30 km from Mhow.
            </li>
          </ul>

          <div className=" fs-5 fw-medium">Facilities for Visitors:</div>
          <ul className="lh-base fs-5 m-0">
            <li> Parking: Ample parking is available near the memorial.</li>
            <li>
               Guides: Local guides are available to take you through the
              history and significance of the site.
            </li>
            <li>
               Accessibility: The memorial is wheelchair accessible for people
              with disabilities.
            </li>
            <li>
               Shops: Souvenir shops are available for visitors to buy
              memorabilia related to Dr. Ambedkar's life.
            </li>
          </ul>

          <div className=" fs-5 fw-medium">Events & Programs:</div>
          <ul className="lh-base fs-5 m-0">
            <li>
               Ambedkar Jayanti (April 14): The memorial sees significant
              activity during Dr. Ambedkar's birthday, with special ceremonies,
              speeches, and gatherings.
            </li>
            <li>
               Workshops & Seminars: Regular events focus on Dr. Ambedkar's
              contributions to education, social justice, and the Constitution
              of India.
            </li>
            <li>
               Social Justice Programs: Participate in awareness campaigns and
              community programs inspired by Dr. Ambedkar's teachings.
            </li>
          </ul>

          <div className=" fs-5 fw-medium">Visitor Guidelines:</div>
          <ul className="lh-base fs-5 m-0">
            <li>
               Respect the site: Please maintain decorum and respect the
              sanctity of the memorial.
            </li>
            <li>
               Photography: Photography is allowed in designated areas. Please
              avoid using flash inside the museum.
            </li>
            <li>No littering: Kindly dispose of waste responsibly.</li>
          </ul>

          <div className=" fs-5 fw-medium">
            Contact Information for Visitors:
          </div>
          <ul className="lh-base fs-5 m-0">
            <li>
              Address: Dr. B.R. Ambedkar Janmbhoomi, Mhow, Madhya Pradesh,
              India.
            </li>
            <li> Phone: [Insert Contact Number]</li>
            <li> Email: [Insert Contact Email]</li>
          </ul>

          <p className="fs-5 m-0 p-0">
            For more details and event updates, visit our official website:
            [Insert Website Link]
          </p>
          <p className="fs-5 m-0 p-0">
            We look forward to welcoming you to this significant site of India's
            history! ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default VisitorPage;