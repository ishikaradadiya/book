const axios = require('axios');

async function getBooksByAuthor(author) {
  try {
    // Replace with your actual API endpoint and use query param for author
    const response = await axios.get(`https://example.com/api/books?author=${encodeURIComponent(author)}`);
    console.log(`Books by author "${author}":`);
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching books by author:', error.message);
  }
}

// Example author to fetch books for
getBooksByAuthor('Joshua Bloch');
