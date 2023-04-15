
import { Schema, model } from 'mongoose';

interface ISkill {
    name: string,
    percent: string
   

}

const skillSchema = new Schema<ISkill>({
    name: { type: String },
    percent: { type: String }
})

const Skill = model<ISkill>('skills', skillSchema);

export default Skill;