import { useState } from "react";
import React from "react";
import { useGallerys } from "../../hooks/index";
import { Tab, Tabs } from "react-bootstrap";
import "./GalleryPage.css";
import { pgallery } from "../../../assests/index";
const GalleryPage = () => {
  const [key, setKey] = useState("birthplace");
  const { data, isLoading, error } = useGallerys();

  if (isLoading) {
    return <div className="spinner"></div>;
  }

  if (error) {
    return <div>Error fetching events: {error}</div>;
  }

  const renderImages = (mediaArray) => {
    const rows = [];
    for (let i = 0; i < mediaArray.length; i += 3) {
      rows.push(mediaArray.slice(i, i + 3));
    }

    return rows.map((row, rowIndex) => (
      <div key={rowIndex} className="row mt-4 m-0 p-0">
        {rowIndex === 0 ? (
          <>
            {row[0] && (
              <div className={`col-sm-6 p-0 gallery-page-${rowIndex}`}>
                <img src={row[0]} alt="gallery" className=" img-fluid p-1 " />
              </div>
            )}
            {row[1] && (
              <div className={`col-sm-3 p-0 gallery-page-${rowIndex}`}>
                <img src={row[1]} alt="gallery" className=" img-fluid p-1" />
              </div>
            )}
            {row[2] && (
              <div className={`col-sm-3 p-0 gallery-page-${rowIndex}`}>
                <img src={row[2]} alt="gallery" className=" img-fluid p-1 p-0" />
              </div>
            )}
          </>
        ) : (
          <>
            {row[0] && (
              <div className={`col-sm-3 p-0 gallery-page-${rowIndex}`}>
                <img src={row[0]} alt="gallery" className=" img-fluid p-1 p-0" />
              </div>
            )}
            {row[1] && (
              <div className={`col-sm-3 p-0 gallery-page-${rowIndex}`}>
                <img src={row[1]} alt="gallery" className=" img-fluid p-1 p-0 " />
              </div>
            )}
            {row[2] && (
              <div className={`col-sm-6 p-0 gallery-page-${rowIndex}`}>
                <img src={row[2]} alt="gallery" className=" img-fluid p-1 p-0" />
              </div>
            )}
          </>
        )}
      </div>
    ));
  };
  const galleryInfo = data?.[0]?.gallery_info;
  const galleryDescription = data?.[0]?.gallery_description;
  return (
    <div>
      <div className="all-section-width">
        <div className="img-banner ">
          <img src={pgallery} alt="about-image" className="mb-2 all-image" />
        </div>
        <div className="mt-5 mb-4">
          <h2 className="text-uppercase fs-1  p-0 m-0">Photo Gallery</h2>
          <p className=" fs-5">Dr. Bhimrao Ambedkar</p>
          <p className=" fw-medium fs-5 mt-2 paragraph-birth p-0 m-0">
            Dr. B.R. Ambedkar's legacy is celebrated through various photo and
            video galleries that showcase his birthplace, significant events,
            and exhibitions dedicated to his life and work.
          </p>
        </div>


        <div className="all-wid gallery-images">
          <Tabs
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-2 custom-tabs me-4 fw-normal fs-4"
          >
            <Tab eventKey="birthplace" title="BIRTHPLACE">
              <div className="row mt-4 m-0  ">
                {renderImages(data?.[0]?.birthplace_media || [])}
              </div>
            </Tab>

            <Tab eventKey="events" title="EVENTS AND CELEBRATIONS">
              <div className="row mt-4 m-0 ">
                {renderImages(data?.[0]?.events_media || [])}
              </div>
            </Tab>

            <Tab eventKey="exhibitions" title="EXHIBITIONS">
              <div className="row mt-4 m-0 ">
                {renderImages(data?.[0]?.exhibitions_media || [])}
              </div>
            </Tab>

            <Tab eventKey="resources" title="ONLINE RESOURCES">
              <div className="row mt-4 m-0 ">
                {renderImages(data?.[0]?.online_media || [])}
              </div>
            </Tab>
          </Tabs>
        </div>


        <div className="border border-2 mt-5 pe-1">
          {galleryInfo && (
            <p
              className="fs-5 px-3 mt-2"
              dangerouslySetInnerHTML={{
                __html: galleryInfo,
              }}
            />
          )}
           </div>


        <div className="border border-2 mt-5 pe-1">
          {galleryDescription && (
            <p
            className="fs-5 px-3 mt-2"
              dangerouslySetInnerHTML={{
                __html: galleryDescription,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
