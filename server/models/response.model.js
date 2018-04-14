import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * This template is used for the responses the kid makes after seeing a command from Moji.
 */
const ResponseSchema = new Schema({
  title: { type: String, required: true },
  soundFile: { type: File },
});

/**
 * @typedef Response
 */
export default mongoose.model('Response', ResponseSchema);
