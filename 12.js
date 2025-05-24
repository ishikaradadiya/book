const axios = require('axios');

async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(`https://example.com/api/books?author=${encodeURIComponent(author)}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching books by author:', error.message);
    throw error;
  }
}

// Usage:
getBooksByAuthor('Joshua Bloch')
  .then(books => {
    console.log(`Books by Joshua Bloch:`);
    console.log(books);
  })
  .catch(error => {
    console.error('Failed to get books:', error);
  });
