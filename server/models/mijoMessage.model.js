import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * This template is used for all messages sent to and from the Mijo client.
 */
const MijoMessageSchema = new Schema({
  // TODO: models
  question: { type: Schema.Types.ObjectId, ref: 'Question' },
  answer: { type: Schema.Types.ObjectId, ref: 'Answer' },
  command: { type: Schema.Types.ObjectId, ref: 'Command' },
  response: { type: Schema.Types.ObjectId, ref: 'Response' },
});

/**
 * @typedef MijoMessage
 */
export default mongoose.model('MijoMessage', MijoMessageSchema);
