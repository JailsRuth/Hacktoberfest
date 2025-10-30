const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = 'mongodb://localhost:27017/myapp'; // change DB name as needed
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ Connected to MongoDB');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1); // Exit process if DB connection fails
  }
};

module.exports = connectDB;
