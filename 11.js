const axios = require('axios');

function getBookByISBN(isbn) {
  return axios.get(`https://example.com/api/books/${isbn}`)
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching book by ISBN:', error.message);
      throw error;
    });
}

// Usage:
getBookByISBN('978-0134685991')
  .then(book => {
    console.log('Book details:', book);
  })
  .catch(error => {
    console.error('Failed to get book:', error);
  });
