const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: 'string'
});

// Telling Mongoose to use/create a model called users using the userSchema
mongoose.model('users', userSchema);
