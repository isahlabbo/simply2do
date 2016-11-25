const mongoose = require('mongoose')

// ----------------------
// USERS
// ----------------------
const usersSchema = new mongoose.Schema({
  // required for authentication
  email:     { type: String, required: true },
  password:  { type: String, required: true },
  // x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x

  // example of optional fields
  name:      { type: String },
  createdAt: { type: Date, default: Date.now }

})

const taskSchema = new mongoose.Schema({
	user_id: { type: String, required: true },
	description: { type: String, required: true },
	complete: { type: Boolean, default: false }
})

module.exports = {
  User: mongoose.model('User', usersSchema),
  Task: mongoose.model('Task', taskSchema)
}