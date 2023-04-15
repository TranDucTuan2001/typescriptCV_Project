
import { Schema, model } from 'mongoose';

interface IEducation {
    school: string,
    year: string,
    desc: string

}

const educationSchema = new Schema<IEducation>({
    school: { type: String },
    year: { type: String },
    desc: { type: String }
})

const Education = model<IEducation>('educations', educationSchema);

export default Education;