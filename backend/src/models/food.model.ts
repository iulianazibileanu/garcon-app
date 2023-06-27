import {Schema, model} from 'mongoose';
export interface Food{
  id:string;
  name:string;
  price:number;
  portion:number;
  category:string[];
  favorite:boolean;
  stars:number;
  imageURL:string;
  ingredients: string;
}

export const FoodSchema = new Schema<Food>(
{
  name: {type: String, required:true},
  price: {type: Number, required:true},
  portion: {type: Number, required:true},
  category: {type: [String], required:true},
  favorite: {type: Boolean, default:false},
  stars: {type: Number, required:true},
  imageURL: {type: String, required:true},
  ingredients: {type: String, required:true}
},{
        toJSON:{
            virtuals: true
        },
        toObject:{
            virtuals: true
        },
        timestamps:true
}
);

export const FoodModel = model<Food>('food', FoodSchema);