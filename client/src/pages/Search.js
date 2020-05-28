import React from "react";
import SearchForm from "../components/SearchForm";
import ResultsContainer from "../components/ResultsContainer";
import API from "../utils/API";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookInput: "",
            bookData: []
        }
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();

          var name=e.target.name
          var value=e.target.value
        this.setState({ [name]: e.target.value})
    }

    handleSearchClick(e) {
        e.preventDefault();
        API.searchBooks(this.state.bookInput)
            .then(
                (response) => {
                    this.setState({bookData: response.data});
                    this.setState({bookInput: ""});
                }
            );
    }

    render() {
        return(
            <main>
                <SearchForm handleChange={this.handleChange} bookInput={this.state.bookInput} handleSearchClick={this.handleSearchClick} />
                {(this.state.bookData.length > 0)?
                    <ResultsContainer bookData={this.state.bookData} path={this.props.match.path}/> : null
                }
            </main>
        );
    }
}

export default Search;