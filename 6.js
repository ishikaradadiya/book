const axios = require('axios');

async function registerUser(username, password, email) {
  try {
    const response = await axios.post('https://example.com/api/register', {
      username,
      password,
      email
    });

    console.log('Registration successful:', response.data);
  } catch (error) {
    console.error('Registration failed:', error.response?.data || error.message);
  }
}

// Example user data
registerUser('newuser123', 'securePassword', 'newuser@example.com');
