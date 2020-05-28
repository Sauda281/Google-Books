import axios from "axios";

export default {
    getBooks: () => {
        return axios.get("/api/books");
    },
    searchBooks: (title) => {
        console.log(title)
        return axios.get("/api/googlebooks/"+title);
    },
    addBookToDB: (bookData) => {
        return axios.post("/api/books", bookData);
    },
    deleteBook: (id) => {
        return axios.delete(`/api/books/${id}`);
    }
}