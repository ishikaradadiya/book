const axios = require('axios');

async function loginUser(username, password) {
  try {
    const response = await axios.post('https://example.com/api/login', {
      username,
      password
    });

    console.log('Login successful:', response.data);
  } catch (error) {
    console.error('Login failed:', error.response?.data || error.message);
  }
}

// Example login credentials
loginUser('newuser123', 'securePassword');
