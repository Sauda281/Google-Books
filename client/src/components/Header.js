import React from "react";


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
            <h1>Google Books React App</h1>
            <p>Search for your favorite book</p>
        </header>
    );
}

export default Header;