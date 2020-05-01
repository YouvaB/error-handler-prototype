import * as mongoose from "mongoose";
import { errorHandler } from "./errorHandler";

const dbUrl = "mongodb://localhost:27020";

interface ID {
  id: string;
}

const schema = new mongoose.Schema<ID>({
  id: {
    type: String,
    unique: true,
    required: true,
  },
});
const model: mongoose.Model<ID & mongoose.Document> = mongoose.model(
  "ID",
  schema
);

function initialize() {
  try {
    mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    errorHandler.handleError(error);
  }
}
async function testDuplicateInsertion() {
  try {
    // To test a scenario, comment every line except the one you want to test

    await model.create({ id: null }); // This should fail as ID is required
    await model.create({ id: "asdf" }); // This should fail as id:asdf already exists
  } catch (error) {
    errorHandler.handleError(error);
  }
}
initialize();
testDuplicateInsertion();
