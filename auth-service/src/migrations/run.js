require('dotenv').config();
const connectDB = require('../config/database');
const createUsersCollection = require('./001_create_users');

const runMigrations = async () => {
  try {
    // Connect to MongoDB
    await connectDB();
    
    // Run migrations in sequence
    await createUsersCollection();
    
    console.log('All migrations completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
};

runMigrations(); 