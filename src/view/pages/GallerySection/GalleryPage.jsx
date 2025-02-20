import { useState } from "react";
import React from "react";
import {
  pgallery,
  pgallery1,
  pgallery2,
  pgallery3,
  pgallery4,
  pgallery5,
  pgallery6,
  pgallery8,
  pgallery7,
} from "../../../assests/index";
import "./GalleryPage.css";

import { Tab, Tabs } from "react-bootstrap";
const GalleryPage = () => {
  const [key, setKey] = useState("birthplace");
  return (
    <div>
      <div className="all-section-width">
        <div className="img-banner ">
          <img src={pgallery} alt="about-image" className="mb-2 all-image" />
        </div>
        <div className="mt-5 mb-4">
          <h2 className="text-uppercase fs-1  ">Photo Gallery</h2>
          <p className=" fs-5">Dr. Bhimrao Ambedkar</p>
          <p className=" fw-medium fs-5 mt-2 paragraph-birth p-0 m-0">
            Dr. B.R. Ambedkar's legacy is celebrated through various photo and
            video galleries that showcase his birthplace, significant events,
            and exhibitions dedicated to his life and work.
          </p>
        </div>

        <Tabs
          activeKey={key}
          onSelect={(k) => setKey(k)}
      className="mb-2 custom-tabs"
        >
          <Tab eventKey="birthplace" title="BIRTHPLACE">
            <p>Content about Dr. Ambedkar's birthplace.</p>
          </Tab>
          <Tab eventKey="events" title="EVENTS AND CELEBRATIONS">
            <p>
              Details about events and celebrations related to Dr. Ambedkar.
            </p>
          </Tab>
          <Tab eventKey="exhibitions" title="EXHIBITIONS">
            <p>
              Information about exhibitions dedicated to Dr. Ambedkar's life.
            </p>
          </Tab>
          <Tab eventKey="resources" title="ONLINE RESOURCES">
            <p>Links and information about online resources on Dr. Ambedkar.</p>
          </Tab>
        </Tabs>

        <div className="row mt-4 m-0 ms-4 me-4 mb-5">
          <div className="col-sm-6 column-width p-0">
            <img src={pgallery1} alt="birth-image" className="h-100 museum-image" />
          </div>
          <div className="col-sm-3 p-0">
            <img src={pgallery6} alt="birth-image" className="h-100 museum-image" />
          </div>
          <div className="col-sm-3 p-0">
            <img src={pgallery3} alt="birth-image" className="h-100 museum-image" />
          </div>
        </div>
        <div className="row mt-4 m-0 ms-4 me-4 mb-5">
          <div className="col-sm-3 column-width p-0">
            <img src={pgallery2} alt="birth-image" className="h-100 museum-image" />
          </div>
          <div className="col-sm-3 p-0">
            <img src={pgallery4} alt="birth-image" className="h-100 museum-image" />
          </div>
          <div className="col-sm-6 p-0">
            <img src={pgallery5} alt="birth-image" className="h-100 museum-image" />
          </div>
        </div>
        <div className="border border-2 mt-5">
          <div className="mt-4 mb-4 ms-4">
            <p className="m-0 fs-4 fw-medium">
              Photo and video galleries of the birthplace, events, and
              exhibitions.
            </p>

            <p className="p-0 m-0  fw-medium fs-5 mb-1">Birthplace:</p>
            <ul className="m-0">
              <li className="fs-5 lh-base me-2 mb-1">
                Bhim Janmabhoomi, Mhow: Dr. Ambedkar was born on April 14, 1891,
                in Mhow, Madhya Pradesh. The site has been transformed into a
                grand memorial, inaugurated on his 100th birth anniversary in
                1991. The architecture, designed by E.D. Nimgade, reflects the
                significance of his early life.
              </li>
            </ul>
            <p className="p-0 m-0 fw-medium fs-5 mb-1">
              Events and Celebrations:
            </p>
            <ul>
              <li className="fs-5 lh-base me-2 mb-1">
                Ambedkar Jayanti Celebrations: Annual events commemorate Dr.
                Ambedkar's birth anniversary on April 14th. For instance, in
                2023, the 132nd birth anniversary was celebrated in Seattle,
                featuring various cultural programs.
              </li>
            </ul>

            <p className="p-0 m-0 fw-medium fs-5 mb-1">Exhibitions:</p>
            <ul>
              <li className="fs-5  me-2  mb-1">
                Dr. Babasaheb Ambedkar Museum & Memorial, Pune: This museum
                offers a comprehensive view of Dr. Ambedkar's life through
                photographs, personal artifacts, and documents. Their official
                website hosts a collection of videos detailing his journey and
                contributions.
              </li>
            </ul>
            <p className="p-0 m-0 fw-medium fs-5 mb-1">Online Resources:</p>
            <ul>
              <li className="fs-5 lh-base me-2  mb-1">
                LSE Library's Online Exhibition: The London School of Economics
                has curated an online exhibition titled "Educate. Agitate.
                Organise." which delves into Dr. Ambedkar's time at LSE and his
                enduring legacy.
              </li>
            </ul>
          </div>
        </div>
        <div className="border border-2 mt-5">
          <div className="mt-4 mb-4 ms-4">
            <div className="row mt-4 m-0 ms-4 me-4 mb-5">
              <div className="col-sm-6 column-width p-0">
                <img src={pgallery7} alt="birth-image" className="h-100 p-2 museum-image" />
              </div>
              <div className="col-sm-5 p-0">
                <img src={pgallery8} alt="birth-image" className="h-100 p-2 museum-image" />
              </div>
              <div>
              <div>
              <div>
              <p className="m-0 fs-4 fw-medium mt-4">
              To engage with Dr. B.R. Ambedkar's legacy through virtual tours and interactive media, consider the following resources:1. Dr. Bhim Rao Ambedkar College Virtual Tour:   </p>
              </div>
              <ul className="m-0">
              <li className="fs-5 lh-base me-2  mb-1">
              Explore the campus of Dr. Bhim Rao Ambedkar College in Delhi through their virtual tour, offering insights into the institution's facilities and environment.
              </li>
            </ul>
           </div>
            <ul className="m-0 mt-5">
              <li className="fs-5 lh-base me-2 mb-1">
              2. Multimedia Study Environment on "The Annihilation of Caste":
              </li>
              <li className="fs-5 lh-base me-2 mb-1">
              Columbia University provides an interactive platform featuring Dr. Ambedkar's seminal work, "The Annihilation of Caste." This resource includes the full text accompanied by annotations, a historical timeline, and related materials, enhancing understanding of his critique on social structures.
              </li>
             
            </ul>
            <ul className="m-0 mt-5">
              <li className="fs-5 lh-base me-2 mb-1">
           
3. Dr. B.R. Ambedkar Popular Digital Media Resource:
              </li>
              <li className="fs-5 lh-base me-2 mb-1">
              This platform consolidates various audio-visual and textual media about Dr. Ambedkar, offering a comprehensive digital repository for those interested in his life and work.
              </li>
             
            </ul>
            <ul className="m-0 mt-5">
              <li className="fs-5 lh-base me-2 mb-1">
           
              4. Virtual Tour of Dr. Babasaheb Ambedkar Museum:
              </li>
              <li className="fs-5 lh-base me-2 mb-1">
              Embark on an immersive virtual journey through the Dr. Babasaheb Ambedkar Museum and Memorial in Pune, which showcases artifacts and exhibits related to his life and contributions.
              </li>
              <li className="fs-5 lh-base me-2 mb-1">These resources provide immersive experiences to deepen your understanding of Dr. Ambedkar's life, work, and enduring impact on society.
              </li>
             
            </ul>
            </div>
            
            
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
