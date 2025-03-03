import React from 'react';
import { useParams } from 'react-router-dom';
import { useNewsLists } from '../../hooks/index';
import './NewsPage.css'
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

  return (
    <div className='all-section-width'>
      <h5 className='p-0 m-0 ms-lg-5 ms-3 my-3'>{data.headline}</h5>
      <img src={data.images[0]} alt={data.headline} className='news-image ms-lg-5 ms-3'/>
     
      <div dangerouslySetInnerHTML={{ __html: data.description }} className='fs-4 mt-3'/>
      <p className='fs-4 p-0 m-0 'style={{ marginLeft: 0 }}>{data.latest_news}</p>
    </div>
  );
};

export default NewsList;
