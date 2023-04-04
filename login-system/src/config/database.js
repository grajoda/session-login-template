/*Template de configuração usando mongodb */

const mongoose = require('mongoose');

async function main() {
  await mongoose.connect('mongodb://localhost:27017/teste');
}

mongoose.set('strictQuery', false);
main().catch(err => console.log(err));


module.exports = mongoose;