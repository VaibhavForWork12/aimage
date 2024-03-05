import { Schema, model, models } from "mongoose";

/*
export interface IUser extends Document {
    title: string;
    transformationType: string;
    publicId: string;
    secureUrl: string;
    width?: number;
    height?: number;
    config?: object; 
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author: { _id: string;
            firstName: string;
            lastName: string;   }; // Assuming `User` is another model referenced here
    createdAt?: Date; // Optional since it has a default value
    updatedAt?: Date; // Optional since it has a default value
  }
  */


const UserSchema = new Schema({
    username: { type:String, reqrired: true , unique: true,},
    email: { type:String, reqrired: true , unique: true,},
    clerkId: { type:String, reqrired: true , unique: true,},
    photo: { type:String, reqrired: true },
    planId: { type:String, default: 1 , },
    firstName: { type: String },
    lastName: { type: String },
    creditBalance: { type: Number ,default: 10,},
    createdAt: { type: Date , default: Date.now},
    updatedAt: { type: Date , default: Date.now},
});

const User = models?.User || model('User', UserSchema); 

export default User;