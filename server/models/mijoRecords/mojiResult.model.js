import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * This template is used for a result, consisting of one question with one or more answers to it.
 */
const MojiResultSchema = new Schema({
  question: { type: Schema.Types.ObjectId, ref: 'Question' },
  answerArray: { type: [Schema.Types.ObjectId], ref: 'Answer' },
});

/**
 * @typedef MojiResult
 */
export default mongoose.model('MojiResult', MojiResultSchema);
