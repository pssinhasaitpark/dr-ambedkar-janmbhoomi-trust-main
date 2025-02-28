import React from 'react';
import { useParams } from 'react-router-dom';
import { useNewsLists } from '../../hooks/index';

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
      <h3>{data.headline}</h3>
      <img src={data.images[0]} alt={data.headline} />
      <div dangerouslySetInnerHTML={{ __html: data.description }} className='fs-4'/>
      <p className='fs-4'>{data.latest_news}</p>
    </div>
  );
};

export default NewsList;
