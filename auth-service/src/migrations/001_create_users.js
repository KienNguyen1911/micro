const mongoose = require('mongoose');
const User = require('../models/User');

const createUsersCollection = async () => {
  try {
    // Create indexes
    await User.collection.createIndex({ email: 1 }, { unique: true });
    
    // Create a default admin user if it doesn't exist
    const adminExists = await User.findOne({ email: 'admin@example.com' });
    if (!adminExists) {
      const bcrypt = require('bcryptjs');
      const hashedPassword = await bcrypt.hash('admin123', 10);
      
      await User.create({
        name: 'Admin User',
        email: 'admin@example.com',
        password: hashedPassword,
        role: 'admin'
      });
      
      console.log('Default admin user created');
    }
    
    console.log('Users collection migration completed successfully');
  } catch (error) {
    console.error('Migration failed:', error);
    throw error;
  }
};

module.exports = createUsersCollection; 