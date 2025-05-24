const axios = require('axios');

async function getBookByISBN(isbn) {
  try {
    // Replace with your actual API endpoint
    const response = await axios.get(`https://example.com/api/books/${isbn}`);
    console.log(`Details for ISBN ${isbn}:`);
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching book by ISBN:', error.message);
  }
}

// Example ISBN to fetch
getBookByISBN('978-0134685991');
