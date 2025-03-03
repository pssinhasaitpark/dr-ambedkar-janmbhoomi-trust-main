import React, { useState } from "react";
import { useGallerys } from "../../hooks/index";
import "./GalleryPage.css";
import { pgallery } from "../../../assests/index";

const GalleryPage = () => {
  const [activeTab, setActiveTab] = useState("birthplace");
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
                <img src={row[0]} alt="gallery" className=" img-fluid img-gallery p-1 " />
              </div>
            )}
            {row[1] && (
              <div className={`col-sm-3 p-0 gallery-page-${rowIndex}`}>
                <img src={row[1]} alt="gallery" className=" img-fluid img-gallery p-1" />
              </div>
            )}
            {row[2] && (
              <div className={`col-sm-3 p-0 gallery-page-${rowIndex}`}>
                <img src={row[2]} alt="gallery" className=" img-fluid img-gallery p-1 " />
              </div>
            )}
          </>
        ) : (
          <>
            {row[0] && (
              <div className={`col-sm-3 p-0 gallery-page-${rowIndex}`}>
                <img src={row[0]} alt="gallery" className=" img-fluid img-gallery p-1 p-0" />
              </div>
            )}
            {row[1] && (
              <div className={`col-sm-3 p-0 gallery-page-${rowIndex}`}>
                <img src={row[1]} alt="gallery" className=" img-fluid img-gallery p-1 p-0 " />
              </div>
            )}
            {row[2] && (
              <div className={`col-sm-6 p-0 gallery-page-${rowIndex}`}>
                <img src={row[2]} alt="gallery" className=" img-fluid img-gallery p-1 p-0" />
              </div>
            )}
          </>
        )}
      </div>
    ));
  };

  const galleryInfo = data?.[0]?.gallery_info;
  const galleryDescription = data?.[0]?.gallery_description;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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

        <div className="custom-tabs mb-2 ">
          <div className="tab-nav d-lg-flex  justify-content-start fs-4">
            <div
              className={`tab-link p-0 me-lg-3 ms-lg-0 ms-3 ${activeTab === "birthplace" ? "active" : ""}`}
              onClick={() => handleTabClick("birthplace")}
            >
              BIRTHPLACE
            </div>
            <div
              className={`tab-link p-0 mx-3 ${activeTab === "events" ? "active" : ""}`}
              onClick={() => handleTabClick("events")}
            >
              EVENTS AND CELEBRATIONS
            </div>
            <div
              className={`tab-link p-0 mx-3 ${activeTab === "exhibitions" ? "active" : ""}`}
              onClick={() => handleTabClick("exhibitions")}
            >
              EXHIBITIONS
            </div>
            <div
              className={`tab-link p-0 mx-3 ${activeTab === "resources" ? "active" : ""}`}
              onClick={() => handleTabClick("resources")}
            >
              ONLINE RESOURCES
            </div>
          </div>

          <div className="tab-content ">
            {activeTab === "birthplace" && (
              <div className="row mt-4 m-0">{renderImages(data?.[0]?.birthplace_media || [])}</div>
            )}
            {activeTab === "events" && (
              <div className="row mt-4 m-0">{renderImages(data?.[0]?.events_media || [])}</div>
            )}
            {activeTab === "exhibitions" && (
              <div className="row mt-4 m-0">{renderImages(data?.[0]?.exhibitions_media || [])}</div>
            )}
            {activeTab === "resources" && (
              <div className="row mt-4 m-0">{renderImages(data?.[0]?.online_media || [])}</div>
            )}
          </div>
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