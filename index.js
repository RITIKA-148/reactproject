// To connect with your mongoDB database
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017', {
// 	name: 'ritikadeep',
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true
// }, err => err ? console.log(err) :
// 	console.log('Connected to ritikadeep database'));
const mongoose = require('mongoose');
const mongoDBUrl = 'mongodb://localhost:27017/ritikadeep'; // Replace with your MongoDB URL

mongoose.connect(mongoDBUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});
// Schema for users of app
const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	bankaccount: {
		type: Number,
		required: true,
	},
	Address1: {
		type: Date,
		default: Date.now,
	},
});
const User = mongoose.model('users', UserSchema);
User.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {

	resp.send("App is Working");

});

// app.post("/register", async (req, resp) => {
	// try {
	// 	const user = new User(req.body);
	// 	let result = await user.save();
	// 	result = result.toObject();
	// 	if (result) {
	// 		delete result.password;
	// 		resp.send(req.body);
	// 		console.log(result);
	// 	} else {
	// 		console.log("User already register");
	// 	}

	// } catch (e) {
		// resp.send("Something Went Wrong");
	// }
    const user = new User({req,body});
    user.save();
      
       
// });
app.listen(5000);
