import React, { useState, useMemo } from "react";
import "./App.css";
import Library from "./components/Library";
import AddToLibrary from "./components/AddToLibrary";

export interface IState {
  books: {
    title: string;
    author: string;
    isbn: string;
    coverImage: string;
  }[];
}

export default function App() {
  const [books, setBooks] = useState<IState["books"]>([
    {
      title: "Harry Potter",
      author: "J.k. Rowling",
      isbn: "978-3-16-148410-0",
      coverImage:
        "https://www.pngitem.com/pimgs/m/300-3007988_harry-potter-philosophers-stone-title-hd-png-download.png"
    }
  ]);

  const [searchBook, setSearchBook] = useState("");

  const searchLibrary = useMemo(() => {
    if (!searchBook) {
      return books;
    }
    return books.filter((book) => {
      return book.title.toLowerCase().includes(searchBook.toLowerCase());
    });
  }, [searchBook, books]);

  return (
    <div className="App">
      <input
        className="library-search"
        type="text"
        placeholder="Search Book"
        onChange={(e) => {
          setSearchBook(e.target.value);
        }}
        value={searchBook}
      ></input>
      <Library books={searchBook === "" ? books : searchLibrary} />
      <AddToLibrary books={books} setBooks={setBooks} />
    </div>
  );
}
