import {model, Schema, Types} from 'mongoose';
import { OrderStatus } from '../constants/order_status';
import { Food, FoodSchema } from './food.model';

export interface OrderItem{
    food: Food;
    price: number;
    quantity: number;
}

export const OrderItemSchema = new Schema<OrderItem>(
    {
        food:{type: FoodSchema, required: true},
        price:{ type: Number, required:true},
        quantity: {type: Number, required: true}
    }
);

export interface Order{
    id:number;
    items: OrderItem[];
    totalPrice:number;
    name: string;
    paymentId: string;
    isCash: boolean;
    status: OrderStatus;
    user: Types.ObjectId;
    createdAt: string;
    updatedAt: Date;
}

const orderSchema = new Schema<Order>({
    name: {type: String, required: true},
    paymentId: {type: String},
    isCash: {type: Boolean},
    totalPrice: {type: Number, required: true},
    items: {type: [OrderItemSchema], required: true},
    status: {type: String, default: OrderStatus.NEW},
    user: {type: Schema.Types.ObjectId, required: true}
},{
    timestamps: true,
    toJSON:{
        virtuals: true
    },
    toObject:{
        virtuals: true
    }
});

export const OrderModel = model('order', orderSchema);