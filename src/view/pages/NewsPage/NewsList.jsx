import React from 'react';
import { useParams } from 'react-router-dom';
import { useNewsLists } from '../../hooks/index';
import './NewsPage.css';

const NewsList = () => {
  const { id } = useParams(); 
  const { data, isLoading, error } = useNewsLists(id); 

  if (isLoading) {
    return <div className="spinner"></div>;
  }
  if (error) {
    return <p>Error: {error?.message || "An unknown error occurred"}</p>;
  }
  if (!data) {
    return <p>No news available.</p>;
  }
  const chunkImages = (images, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < images.length; i += chunkSize) {
      chunks.push(images.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const imageChunks = chunkImages(data.images, 3);

  const isSingleImage = data.images.length === 1;

  return (
    <div className='all-section-width'>
      <div className="text-center">
        {imageChunks.map((chunk, chunkIndex) => (
          <div key={chunkIndex} className={`row mb-4 ${isSingleImage ? 'justify-content-center' : ''}`}>
            {chunk.map((image, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <img
                  src={image}
                  alt={data.headline}
                  className={`news-image w-100 h-auto object-fit-cover ${isSingleImage ? 'single-image' : ''}`}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className='border border-dark mt-3 p-2'>
        <h5 className='p-0 m-0 ms-lg-1 ms-1 my-3 fs-4'>{data.headline}</h5>
        <div dangerouslySetInnerHTML={{ __html: data.description }} className='fs-4 mt-3 ms-lg-2 ms-1 p-1'/>
        <p className='fs-4 p-0 m-0 ms-lg-1 ms-1' style={{ marginLeft: 0 }}>
          {data.latest_news}
        </p>
      </div>
    </div>
  );
};

export default NewsList;
