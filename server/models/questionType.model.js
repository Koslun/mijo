import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * This template is used for the different types of questions.
 */
const QuestionTypeSchema = new Schema({
  multipleChoice: { type: [String] },
  scale: { type: [Number] },
  checkBoxes: { type: [String] },
});

/**
 * @typedef Question
 */
export default mongoose.model('QuestionType', QuestionTypeSchema);
