import mongoose from 'mongoose';

// export function connect(){
//     mongoose.connect('mongodb+srv://cv_mongodb:HfvAHVJuf6UYYI4z@datatranductuan.mvufyo7.mongodb.net/data_cv')
//     .then(() => console.log('DB Connected!'));
// }
export async function connect() {
    try {
      await mongoose.connect('mongodb+srv://cv_mongodb:HfvAHVJuf6UYYI4z@datatranductuan.mvufyo7.mongodb.net/data_cv');
      console.log('DB connected okiii!!');
    } catch (error) {
      console.log('DB connect fail !!');
    }
  }