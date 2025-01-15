interface User {
  name: string;
  email: string;
  password: string;
  role: string;
}

const USERS_KEY = 'registeredUsers';
const CURRENT_USER_KEY = 'currentUser';

export const authService = {
  registerUser: (userData: User) => {
    try {
      // Get existing users or initialize empty array
      const existingUsers = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
      
      // Check if user already exists
      const userExists = existingUsers.some((user: User) => user.email.toLowerCase() === userData.email.toLowerCase());
      if (userExists) {
        throw new Error('User with this email already exists');
      }

      // Add new user to array
      existingUsers.push(userData);
      localStorage.setItem(USERS_KEY, JSON.stringify(existingUsers));
      
      // Set as current user
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userData));
      
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },

  loginUser: (email: string, password: string, role: string) => {
    try {
      const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
      const user = users.find(
        (u: User) => 
          u.email.toLowerCase() === email.toLowerCase() && 
          u.password === password &&
          u.role === role
      );

      if (!user) {
        throw new Error('Invalid credentials');
      }

      // Store current user
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
      return user;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  getCurrentUser: () => {
    try {
      const userStr = localStorage.getItem(CURRENT_USER_KEY);
      return userStr ? JSON.parse(userStr) : null;
    } catch (error) {
      console.error('Error getting current user:', error);
      return null;
    }
  },

  logout: () => {
    localStorage.removeItem(CURRENT_USER_KEY);
  }
};
