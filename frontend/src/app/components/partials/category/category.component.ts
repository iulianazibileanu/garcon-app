import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Category } from 'src/app/shared/models/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit{
  category?:Category[];
  constructor(foodService:FoodService) {
    foodService.getAllCategories().subscribe((serverCategory) => {
      this.category = serverCategory;
    })
   }

  ngOnInit(): void {

  }
}
