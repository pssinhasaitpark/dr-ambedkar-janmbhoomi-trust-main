import React from "react";
import { useParams } from "react-router-dom";
import { useBookLists } from "../../hooks/index";
import "./BookDetails.css";

const BookDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useBookLists(id);
  
  if (isLoading) {
    return <div className="spinner"></div>;
  }

  if (error) {
    const errorMessage = error.message || "An unknown error occurred.";
    return <div>{errorMessage}</div>;
  }

  if (!data) {
    return <p>No news available.</p>;
  }

  const toTitleCase = (str) => {
    if (!str) return "";
    return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <div className="all-section-width">
      <div className="mx-auto text-center " style={{ maxWidth: "400px" }}>
        <img 
          src={data.cover_image} 
          alt={data.book_title} 
          className="img-fluid" 
          style={{ maxHeight: "500px", objectFit: "cover" }} 
        />
      </div>
      <div>
        <h4 className="mt-2 ms-3">Book Title: {toTitleCase(data.book_title)}</h4>
        <h5 className="text-muted ms-3">Author: {toTitleCase(data.author_name)}</h5>
      </div>
      <div className="border border-dark fs-4 p-4 mt-3">
        <div dangerouslySetInnerHTML={{ __html: data.description }} />
      </div>
    </div>
  );
};

export default BookDetailPage;
