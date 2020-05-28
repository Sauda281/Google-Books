import React from "react";

function SearchForm(props) {
    return(
        <div id="searchContainer">
            <h3>Book Search</h3>
            <form id="bookSearch">
                <label htmlFor="bookInput" form="bookSearch">Enter a book to search:</label>
                <br></br>
                <input type="text" name="bookInput" value={props.bookInput} id="bookInput" form="bookSearch" onChange={props.handleChange} placeholder="Book Title" required/>
                <br></br>
                <button type="submit" onClick={ props.handleSearchClick}>Search</button>
            </form>
        </div>
    );
}

export default SearchForm;