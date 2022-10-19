import myAxios from './myAxios';

const BooksURL = "";


// get all books data

export const reqAllBooks = (data)=> myAxios.get(`${BooksURL}/api/search.json?title=${data}`);