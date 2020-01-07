import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>Ninja Reading List</h1>
      <p>Currenly we have {books.length} books to get through...</p>
    </div>
  );
};

export default Navbar;
