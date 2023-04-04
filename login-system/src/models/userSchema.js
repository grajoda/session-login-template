/*
    Template de schema mongoose
*/
const mongoose = require('mongoose');
const mongooseFieldEncryption = require("mongoose-field-encryption").fieldEncryption;

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String
    //data3: mongoose.Types.ObjectId
});

// userSchema.plugin(mongooseFieldEncryption, { 
//     fields: ["password"], 
//     secret: process.env.MONGOOSE_ENCRYPTION_KEY,
//     saltGenerator: function (secret) {
//       return "1234567890123456"; 
//       // should ideally use the secret to return a string of length 16, 
//       // default = `const defaultSaltGenerator = secret => crypto.randomBytes(16);`, 
//       // see options for more details
//     },
// });

const User = mongoose.model('User', userSchema);

module.exports = User;