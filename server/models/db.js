
const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log('connected to database')
})
.catch(() => {
  console.log('failed to connect')
})

require('./user.model')