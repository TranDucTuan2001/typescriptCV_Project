
import { Schema, model } from 'mongoose';

interface IProfile {
    name: string,
    job: string,
    address: string,
    phone: string,
    email: string,
    web: string,
    about: string,

}

const profileSchema = new Schema<IProfile>({
    name: { type: String },
    job: { type: String },
    address: { type: String },
    phone: { type: String },
    email: { type: String },
    web: { type: String },
    about: { type: String },


})

const Profile = model<IProfile>('profiles', profileSchema);

export default Profile;