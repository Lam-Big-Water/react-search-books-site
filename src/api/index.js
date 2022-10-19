import myAxios from './myAxios';

const BooksURL = "https://openlibrary.org";


// get all books data

export const reqAllBooks = (data)=> myAxios.get(`${BooksURL}/search.json?title=${data}`);