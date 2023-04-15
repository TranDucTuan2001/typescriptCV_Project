
import { Schema, model } from 'mongoose';

interface IExperience {
    job: string,
    year: string,
    desc: string

}

const experienceSchema = new Schema<IExperience>({
    job: { type: String },
    year: { type: String },
    desc: { type: String }
})

const Experience = model<IExperience>('experiences', experienceSchema);

export default Experience;