import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * This template is used for the answers to questions.
 */
const AnswerSchema = new Schema({
  timeAnswered: { type: Date, required: true },
  yesAnswer: { type: Boolean },
  textAnswerArray: { type: [String] },
  scaleAnswer: { type: Number },
});

/**
 * @typedef Answer
 */
export default mongoose.model('Answer', AnswerSchema);
