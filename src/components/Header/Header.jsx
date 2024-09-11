import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">Discover Your Next Favorite Book</h2>
          <br />
          <p className="header-text fs-18 fw-3">
            Search through our extensive library collection and find the perfect book for your next
            read. Start your literary journey today!
          </p>
          <SearchForm />
        </div>
      </header>
    </div>
  );
};

export default Header;
