
export interface tickets 
{
   created_date: { type: Date },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date },
   name: { type: String },
   email: { type: String },
   gender: { type: Gender },
   address: { type: String },
   zip: { type: Number },
   phone: { type: Number }
}


export enum Gender {
   MALE = 'male',
   FEMALE = 'female'
}



