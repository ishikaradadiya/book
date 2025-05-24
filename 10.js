const axios = require('axios');

function getAllBooksCallback(callback) {
  axios.get('https://example.com/api/books')
    .then(response => {
      callback(null, response.data);
    })
    .catch(error => {
      callback(error);
    });
}

// Usage of the callback function
getAllBooksCallback((error, books) => {
  if (error) {
    console.error('Error fetching books:', error.message);
  } else {
    console.log('Books available in the shop:');
    console.log(books);
  }
});
