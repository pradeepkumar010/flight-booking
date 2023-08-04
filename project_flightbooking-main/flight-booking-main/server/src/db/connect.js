const mongoose = require("mongoose");
// Middleware
const db='mongodb+srv://saikrishnajonnala888:saikrishnajonnala888@cluster0.lbd3se6.mongodb.net/saikrishnajonnala888?retryWrites=true&w=majority'
//const db='mongodb+srv://flight-booking-main:flight-booking-main@cluster0.khxj6yx.mongodb.net/flight-booking-main?retryWrites=true&w=majority'
// Connect to MongoDB using the connection string
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {
  console.log(`No connection: ${e}`);
});

// mongodb://localhost:27017