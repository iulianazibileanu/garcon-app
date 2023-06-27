import {Router} from 'express';
import { sample_foods } from '../data';
import asyncHandler from 'express-async-handler';
import { FoodModel } from '../models/food.model';

const router = Router();

router.get("/seed", asyncHandler(
 async (req, res) => {
    const foodsCount = await FoodModel.countDocuments();
    if(foodsCount> 0){
      res.send("Seed is already done!");
      return;
    }

    await FoodModel.create(sample_foods);
    res.send("Seed Is Done!");
}
))

router.get("/",asyncHandler(
  async (req, res) => {
    const foods = await FoodModel.find();
      res.send(foods);
  }
))

router.get("/search/:searchTerm", asyncHandler(
  async (req, res) => {
    const searchRegex = new RegExp(req.params.searchTerm, 'i');
    const foods = await FoodModel.find({name: {$regex:searchRegex}})
    res.send(foods);
  }
))

router.get("/category", asyncHandler(
  async (req, res) => {
    const category = await FoodModel.aggregate([
      {
        $unwind:'$category'
      },
      {
        $group:{
          _id: '$category',
          count: {$sum: 1}
        }
      },
      {
        $project:{
          _id: 0,
          name:'$_id',
          count: '$count'
        }
      }
    ]).sort({count: -1});

    const all = {
      name : 'Toate',
      count: await FoodModel.countDocuments()
    }

    category.unshift(all);
    res.send(category);
  }
))

router.get("/category/:categoryName",asyncHandler(
  async (req, res) => {
    const foods = await FoodModel.find({category: req.params.categoryName})
    res.send(foods);
  }
))

router.get("/:foodId", asyncHandler(
  async (req, res) => {
    const food = await FoodModel.findById(req.params.foodId);
    res.send(food);
  }
))


export default router;