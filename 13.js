const axios = require('axios');

async function getBooksByTitle(title) {
  try {
    const response = await axios.get(`https://example.com/api/books?title=${encodeURIComponent(title)}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching books by title:', error.message);
    throw error;
  }
}

// Usage:
getBooksByTitle('Effective Java')
  .then(books => {
    console.log(`Books with title "Effective Java":`);
    console.log(books);
  })
  .catch(error => {
    console.error('Failed to get books:', error);
  });
