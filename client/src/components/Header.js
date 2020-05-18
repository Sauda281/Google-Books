import React from "react";
// import image from "../images/books-2.jpg";

const headerStyle = {
  "backgroundImage": `url("https://cdn.pixabay.com/photo/2016/01/19/01/42/library-1147815__480.jpg")`,
  "maxWidth": "100vw",
  height: "calc(100vw * .43333)",
  "backgroundSize": "cover",
  position: "relative"
}

function Header() {
    return (
        <header style={headerStyle}>
            <h1>(React) Google Books Search</h1>
            <p>Search for and Save Books of Interest</p>
        </header>
    );
}

export default Header;