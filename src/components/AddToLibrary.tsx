import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  books: Props["books"];
  setBooks: React.Dispatch<React.SetStateAction<Props["books"]>>;
}

const AddToLibrary: React.FC<IProps> = ({ books, setBooks }) => {
  const [input, setInput] = useState({
    title: "",
    author: "",
    isbn: "",
    coverImage: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const handleClick = () => {
    if (!input.title || !input.author || !input.isbn || !input.coverImage) {
      return;
    }

    setBooks([
      ...books,
      {
        title: input.title,
        author: input.author,
        isbn: input.isbn,
        coverImage: input.coverImage
      }
    ]);

    setInput({
      title: "",
      author: "",
      isbn: "",
      coverImage: ""
    });
  };

  return (
    <div className="add-to-library">
      <input
        type="text"
        placeholder="Title"
        className="add-to-library-input"
        value={input.title}
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="Author"
        className="add-to-library-input"
        value={input.author}
        onChange={handleChange}
        name="author"
      />
      <input
        type="text"
        placeholder="ISBN"
        className="add-to-library-input"
        value={input.isbn}
        onChange={handleChange}
        name="isbn"
      />
      <input
        type="text"
        placeholder="Image of book cover"
        className="add-to-library-input"
        value={input.coverImage}
        onChange={handleChange}
        name="coverImage"
      />
      <button className="add-to-library-btn" onClick={handleClick}>
        Add to library
      </button>
    </div>
  );
};

export default AddToLibrary;
