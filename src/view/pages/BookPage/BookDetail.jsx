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
    return <p>Error: {error?.message || "An unknown error occurred"}</p>;
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
      <div className="mx-auto w-25 h-25">
        <img src={data.cover_image} alt={data.cover_image} className="w-100 h-100" />
      </div>
      <div className="">
        <h4 className="mt-2">Book Title:- {toTitleCase(data.book_title)}</h4>
        <h5 className="text-muted">Author:- {toTitleCase(data.author_name)}</h5>
      </div>
      <div className="border border-dark fs-4 p-0 m-0 mt-3 p-4">
        <div dangerouslySetInnerHTML={{ __html: data.description }} />
      </div>
    </div>
  );
};

export default BookDetailPage;
