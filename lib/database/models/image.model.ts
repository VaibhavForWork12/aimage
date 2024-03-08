import { Document, Schema, model, models } from "mongoose";

export interface IImage extends Document {
    title: string;
    transformationType: string;
    publicId: string;
    secureUrl: string;
    width?: number;
    height?: number;
    config?: object; 
    aspectRatio?: string;
    transformationUrl?:string;
    color?: string;
    prompt?: string;
    author: { _id: string;
            firstName: string;
            lastName: string;   }; // Assuming `User` is another model referenced here
    createdAt?: Date; // Optional since it has a default value
    updatedAt?: Date; // Optional since it has a default value
  }
  
 

const ImageSchema = new Schema({
    title: { type:String, reqrired: true },
    transformationType: { type:String, reqrired: true },
    publicId: { type:String, reqrired: true },
    secureUrl: { type:String, reqrired: true },
    width: { type: Number },
    height: { type: Number },
    config: { type: Object },
    transformationUrl: { type: URL },
    aspectRatio: { type: String },
    color: { type: String },
    prompt: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'User'},
    createdAt: { type: Date , default: Date.now},
    updatedAt: { type: Date , default: Date.now},
});

const Image = models?.Image || model('Image', ImageSchema); 

export default Image;
