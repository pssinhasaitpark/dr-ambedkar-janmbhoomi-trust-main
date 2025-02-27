import React from "react";
import "./BirthPlace.css";
import { birth, birth1, birth2, dajt } from "../../../assests/index.js";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
const mapIconLogo = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const BirthPlacePage = () => {
  const position = [22.5505, 75.7625];
  return (
    <div className="all-section-width">
      <div className="img-banner ">
        <img src={dajt} alt="about-image" className="mb-2 all-image" />
      </div>
      <div className="mt-5 mb-4">
        <h2 className="text-uppercase fs-1  m-0 p-0">biography Dr Ambedkar</h2>
        <p className="mb-3 fs-5">Dr. Bhimrao Ambedkar</p>
        <p className=" fw-medium  mt-2 paragraph-birth ">
          <span className="fs-3">Birthplace : </span> Dr. B.R. Ambedkar – Mhow,
          Madhya Pradesh <br /> Dr. Bhimrao Ramji Ambedkar was born on April 14,
          1891, in Mhow, a British military cantonment in present-day Madhya
          Pradesh, India. His birthplace holds great historical significance as
          the origin of one of India's greatest social reformers, who later
          became the architect of the Indian Constitution and a champion of
          Dalit rights, social justice, and equality.
        </p>
      </div>
      <div className="border p-4 mt-4 shadow-sm mb-4 ">
        <h5 className="fs-3">
          Historical Significance of Dr. B.R. Ambedkar’s Birthplace
        </h5>
        <ul className="m-0">
          <li className="fs-5 lh-base me-2  ">
            {" "}
            Dr. B.R. Ambedkar was born on April 14, 1891, in Mhow (now Dr.
            Ambedkar Nagar), Madhya Pradesh, which was a British military
            cantonment at the time. His birthplace holds immense historical and
            social significance for several reasons:
          </li>
          <ol type="a">
            <li className="fs-5 m-0 lh-base ">
              Symbol of Social Justice Movement: Mhow is where the journey of
              India’s foremost social reformer and the father of the Indian
              Constitution began. His early life experiences with caste
              discrimination shaped his lifelong fight for equality, justice,
              and human rights.{" "}
            </li>
            <li className="fs-5 m-0 lh-base">
              Inspiration for Dalit Rights: Being born in an oppressed
              community, Ambedkar’s life from Mhow to global academic
              institutions became an inspiration for marginalized communities to
              pursue education and self-respect{" "}
            </li>
            <li className="fs-5 m-0 lh-base">
              Now a National Memorial: Today, his birthplace is recognized as
              "Dr. Ambedkar Nagar," featuring monuments and memorials that
              attract visitors, scholars, and leaders who seek to understand and
              honor his legacy.
            </li>
          </ol>
        </ul>

        <ul>
          <li className="fs-5  lh-base">
            {" "}
            Mhow remains a sacred site for social justice movements, symbolizing
            Ambedkar’s transformative vision for an equal and democratic India.{" "}
          </li>
        </ul>
      </div>
      <div className="row mt-5 m-0">
        <div className="col-sm-4 p-0">
          <img src={birth} alt="birth-image" className="w-100" />
        </div>
        <div className="col-sm-4 p-0">
          <img src={birth1} alt="birth-image" className="w-100" />
        </div>
        <div className="col-sm-4 p-0">
          <img src={birth2} alt="birth-image" className="w-100" />
        </div>
      </div>

      <div className="border p-4 mt-4 ">
        <h5 className="fs-4">
          Timeline of the Development of Dr. B.R. Ambedkar’s Birthplace (Mhow,
          Madhya Pradesh){" "}
        </h5>
        <p className="fs-5 lh-base">
          Dr. B.R. Ambedkar’s birthplace in Mhow (now Dr. Ambedkar Nagar),
          Madhya Pradesh, has evolved over the years into a site of national
          significance, with several initiatives aimed at preserving his legacy.
          Here’s a timeline of its development
        </p>
        <h5 className="fs-4 ">1. British Era & Early Years (1891–1947)</h5>
        <p className="fs-5 lh-base p-0 m-0">
          ✅ April 14, 1891 – Dr. B.R. Ambedkar was born in Mhow, a British
          military cantonment.
        </p>
        <p className="fs-5 lh-base p-0 m-0">
          ✅ 1891–1906 – Lived in Mhow before moving for education; birthplace
          remained a regular military area.
        </p>
        <p className="fs-5 lh-base p-0 m-0">
          ✅ 1947 – India gained independence, but Mhow continued as a military
          base with no official recognition of Ambedkar's birthplace.
        </p>
        <h5 className="fs-4 mt-5">
          2. Recognition & Initial Developments (1950s–1990s)
        </h5>
        <p className="fs-5 lh-base p-0 m-0">
          ✅ 1956 – Ambedkar passed away on December 6, 1956; followers began
          visiting Mhow as a mark of respect.
        </p>
        <p className="fs-5 lh-base p-0 m-0">
          ✅ 1970s–1980s – Ambedkarite movements and Dalit organizations started
          demanding official recognition of his birthplace.
        </p>
        <p className="fs-5 lh-base p-0 m-0">
          ✅ April 14, 1991 – On his 100th birth anniversary, large-scale
          celebrations took place in Mhow.
        </p>
        <h5 className="fs-4 mt-5">
          3. Renaming & Infrastructure Development (2000–2015)
        </h5>
        <p className="fs-5 lh-base p-0 m-0">
          ✅ 2003 – The Government of Madhya Pradesh renamed Mhow as "Dr.
          Ambedkar Nagar" in his honor.
        </p>
        <p className="fs-5 lh-base p-0 m-0">
          ✅ 2007 – Dr. Ambedkar Memorial Park was built at his birthplace.
        </p>

        <p className="fs-5 lh-base mt-1 p-0 m-0">
          ✅ 2012 – The site was officially declared a national heritage
          location by the state government.
        </p>
        <p className="fs-5 lh-base p-0 m-0">
          ✅ 2015 – A grand Ambedkar Smarak (memorial complex) was inaugurated,
          including a library and museum.
        </p>
        <h5 className="fs-4 mt-5">
          4. Modernization & Global Recognition (2016–Present)
        </h5>
        <p className="fs-5 lh-base p-0 m-0">
          ✅ 2016 – The Central Government announced the development of the site
          as a major pilgrimage and tourist center.
        </p>
        <p className="fs-5 lh-base p-0 m-0">
          ✅ 2018 – Upgraded infrastructure, better roads, and visitor
          facilities were introduced.
        </p>
        <p className="fs-5 lh-base p-0 m-0">
          ✅ 2021 – Plans for a new multimedia museum and educational research
          center on Ambedkar’s life and works.
        </p>
        <p className="fs-5 lh-base p-0 m-0">
          ✅ 2023 – Digital exhibits and virtual tours were introduced, making
          it more accessible globally.
        </p>
        <p className="fs-5 lh-base p-0 m-0">
          ✅ April 14, Every Year – Thousands of followers and political leaders
          gather to celebrate Ambedkar Jayanti at the site.
        </p>
      </div>
      <div className="row border mt-4 m-0">
        <div className="col-sm-6 p-0 mt-4">
          <h5 className="fs-4 ms-4">
            Virtual tour or interactive map of the location.

          </h5>
          <p className="fs-5 ms-4 fw-small"> While a fully immersive virtual tour of Dr. B.R. Ambedkar's birthplace in Mhow, Madhya Pradesh, may not be available, you can explore the area through various online resources:</p>
          <ol className="ms-3">
            <li className="fs-5 m-0 lh-lg ">
              Mhow City Tour Video: This video provides a visual tour of Mhow, offering insights into the town's layout and significant landmarks.
            </li>
            <li className="fs-5 m-0 lh-lg">
              Interactive Map: The Mhow Cantonment Board provides a detailed city map, highlighting key areas and infrastructure.
            </li>

          </ol>
          <div className="mt-5">
            <ol className="ms-3">
              <li className="fs-5 m-0 lh-lg ">

                Dr. Ambedkar Nagar Railway Station Video: This video showcases the railway station in Mhow, giving a glimpse into the town's connectivity and environment.
              </li>
              <li className="fs-5 m-0 lh-lg">
                These resources offer a closer look at Dr. Ambedkar Nagar (Mhow) and its significance as Dr. B.R. Ambedkar's birthplace.
              </li>

            </ol>
          </div>
        </div>
        <div className="col-sm-6 p-0 mt-3 mb-3 p-4 ">
          <MapContainer
            center={position}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
            key={position}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={position} icon={mapIconLogo}>
              <Popup>Our Location</Popup>
            </Marker>
          </MapContainer>
        </div>

      </div>
    </div>
  );
};

export default BirthPlacePage;
