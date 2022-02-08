import React from "react";
import { IState as IProps } from "../App";

const Library: React.FC<IProps> = ({ books }) => {
  const renderLibrary = (): JSX.Element[] => {
    return books.map((book) => {
      return (
        <li className="library">
          <div className="library-header">
            <img
              className="library-cover-img"
              src={book.isbn}
              alt="book cover"
            />
            <h2>Title: {book.title}</h2>
          </div>
          <p>Author: {book.author}</p>
          <p className="library-isbn">ISBN: {book.isbn}</p>
        </li>
      );
    });
  };

  return <ul>{renderLibrary()}</ul>;
};

export default Library;
