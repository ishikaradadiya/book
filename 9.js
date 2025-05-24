const axios = require('axios');

async function deleteReview(isbn, token) {
  try {
    // Assuming token is used for authentication in headers
    const response = await axios.delete(
      `https://example.com/api/books/${isbn}/review`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    console.log('Review deleted successfully:');
    console.log(response.data);
  } catch (error) {
    console.error('Failed to delete review:', error.response?.data || error.message);
  }
}

// Example usage
const userToken = 'your-authentication-token-here'; // Replace with actual token after login
deleteReview('978-0134685991', userToken);
