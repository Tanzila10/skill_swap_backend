const users = [];

// Add user to active users list
export const addUser = (socketId, userId) => {
  // Remove existing user if any
  const existingUserIndex = users.findIndex(user => user.userId === userId);
  if (existingUserIndex !== -1) {
    users.splice(existingUserIndex, 1);
  }
  
  // Add new user
  users.push({ socketId, userId });
  return users.find(user => user.userId === userId);
};

// Remove user by socket ID
export const removeUser = (socketId) => {
  const index = users.findIndex(user => user.socketId === socketId);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
  return null;
};

// Get user by user ID
export const getUser = (userId) => {
  return users.find(user => user.userId === userId);
};