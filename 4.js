const axios = require('axios');

async function getBooksByTitle(title) {
  try {
    // Replace with your actual API endpoint and use query param for title
    const response = await axios.get(`https://example.com/api/books?title=${encodeURIComponent(title)}`);
    console.log(`Books with title "${title}":`);
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching books by title:', error.message);
  }
}

// Example title to fetch books for
getBooksByTitle('Effective Java');
