import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * This template is used for the commands sent to the client for the kid to execute.
 */
const CommandSchema = new Schema({
  title: { type: String, required: true },
  soundFile: { type: File },
});

/**
 * @typedef Command
 */
export default mongoose.model('Command', CommandSchema);
