import { Injectable } from '@angular/core';
import { sample_category, sample_foods } from 'src/data';
import { Food } from '../shared/models/Food';
import { Category } from '../shared/models/Category';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm:string){
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllCategories():Category[]{
    return sample_category;
  }

  getAllFoodsByCategory(category:string):Food[]{
    return category == "All"?
    this.getAll():
    this.getAll().filter(food => food.category?.includes(category));
  }

  getFoodById(foodId:string):Food{
    return this.getAll().find(food => food.id == foodId) ?? new Food();
  }
}
