import React from 'react';
import { useParams } from 'react-router-dom';
import { useNewsLists } from '../../hooks/index';

const NewsList = () => {
  const { id } = useParams(); // Extract news item ID from the URL parameters
  const { data, isLoading, error } = useNewsLists(id); // Pass id to the custom hook

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error?.message || "An unknown error occurred"}</p>;
  }

  if (!data) {
    return <p>No news available.</p>; // Adjust this if data should exist
  }

  return (
    <div className='all-section-width'>
      <h1>{data.headline}</h1>
      <img src={data.images[0]} alt={data.headline} />
      <div dangerouslySetInnerHTML={{ __html: data.description }} />
      <p>{data.latest_news}</p>
    </div>
  );
};

export default NewsList;
