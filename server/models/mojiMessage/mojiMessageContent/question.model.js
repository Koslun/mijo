import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * This template is used for all question messages sent to and from the Mijo client.
 */
const QuestionSchema = new Schema({
  title: { type: String, required: true },
  questionType: { type: Schema.Types.ObjectId, ref: 'QuestionType', required: true },
  soundFile: { type: File },
  answers: { type: [Schema.Types.ObjectId] },
});

/**
 * @typedef Question
 */
export default mongoose.model('Question', QuestionSchema);
