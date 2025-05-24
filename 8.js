const axios = require('axios');

async function addOrModifyReview(isbn, reviewText, token) {
  try {
    // Assuming token is used for authentication in headers
    const response = await axios.put(
      `https://example.com/api/books/${isbn}/review`,
      { review: reviewText },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    console.log('Review added/modified successfully:');
    console.log(response.data);
  } catch (error) {
    console.error('Failed to add/modify review:', error.response?.data || error.message);
  }
}

// Example usage
const userToken = 'your-authentication-token-here'; // Replace with actual token after login
addOrModifyReview('978-0134685991', 'This book is a fantastic resource for Java developers.', userToken);
