import React from "react";
import { Link } from "react-router-dom";
import styled from "./nav.module.css";
import SearchBar from "../searchbar/SearchBar";

export default function Nav({ onSearch }) {
  return (
    <div className={styled.nav}>
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}
