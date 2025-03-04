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
    <div className='all-section-width '>

     
      <img src={data.images[0]} alt={data.headline} className='news-image ms-lg-1 ms-0'/>      <div className='border border-dark mt-3 p-2'>
      <h5 className='p-0 m-0 ms-lg-1 ms-1 my-3 fs-4 '>{data.headline}</h5>
      <div dangerouslySetInnerHTML={{ __html: data.description }} className='fs-4 mt-3 ms-lg-2 ms-1 p-1'/>
      <p className='fs-4 p-0 m-0 ms-lg-1 ms-1 'style={{ marginLeft: 0 }}>{data.latest_news}</p>
    </div>
    </div>
  );
};

export default NewsList;
