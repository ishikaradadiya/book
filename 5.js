const axios = require('axios');

async function getBookReview(isbn) {
  try {
    // Replace with your actual API endpoint for getting review by ISBN
    const response = await axios.get(`https://example.com/api/books/${isbn}/review`);
    console.log(`Review for book ISBN ${isbn}:`);
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching book review:', error.message);
  }
}

// Example ISBN
getBookReview('978-0134685991');
