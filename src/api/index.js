import myAxios from './myAxios';

const BooksURL = "http://openlibrary.org/search.json?title=";


// get all books data

export const reqAllBooks = (data)=> myAxios.get(`${BooksURL}${data}`);