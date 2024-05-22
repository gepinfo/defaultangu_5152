
import * as mongoose from 'mongoose';
import { Gender } from '../entitymodels/tickets';

const Schema = mongoose.Schema;

export const ticketsSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: { type: String },
   email: { type: String },
   gender: { type: String, enum: Gender },
   address: { type: String },
   zip: { type: Number },
   phone: { type: Number }
})

const ticketsModel = mongoose.model('tickets', ticketsSchema, 'tickets');
export default ticketsModel;
