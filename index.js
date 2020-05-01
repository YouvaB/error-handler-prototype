const mongoose = require("mongoose");

const dbUrl = "mongodb://localhost:27020";

mongoose.connect(dbUrl, { useNewUrlParser: true }, (err) => {
  console.log(err);
  process.exit(1);
});

const schema = mongoose.Schema({
  id: {
    type: String,
    unique: true,
  },
});
const model = mongoose.Model("ID", schema);
