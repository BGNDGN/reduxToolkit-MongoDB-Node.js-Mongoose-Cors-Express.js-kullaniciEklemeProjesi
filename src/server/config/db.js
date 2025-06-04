const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("MONGO_URI:", process.env.MONGO_URI); 
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB'ye bağlandı !");
  } catch (err) {
    console.error("MongoDB'ye bağlanamadı.", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
