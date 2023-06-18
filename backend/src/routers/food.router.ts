import {Router} from 'express';
import { sample_category, sample_foods } from '../data';

const router = Router();

router.get("/", (req, res) => {
 res.send(sample_foods);
})

router.get("/search/:searchTerm", (req,res) => {
    const searchTerm = req.params.searchTerm;
    const foods = sample_foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(foods);
})

router.get("/category", (req,res) => {
    res.send(sample_category)
})

router.get("/category/:categoryName", (req, res) => {
    const categoryName = req.params.categoryName;
    const foods = sample_foods.filter(food => food.category?.includes(categoryName));
    res.send(foods);
})

router.get("/:foodId", (req, res) => {
    const foodId = req.params.foodId;
    const food = sample_foods.find(food => food.id == foodId);
    res.send(food);
})

export default router;