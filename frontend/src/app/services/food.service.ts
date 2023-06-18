import { Injectable } from '@angular/core';
import { sample_category, sample_foods } from 'src/data';
import { Food } from '../shared/models/Food';
import { Category } from '../shared/models/Category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FOODS_BY_CATEGORY_URL, FOODS_BY_SEARCH_URL, FOODS_CATEGORY_URL, FOODS_URL, FOOD_BY_ID_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  getAll(): Observable <Food[]>{
    return this.http.get<Food[]>(FOODS_URL);
  }

  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(FOODS_CATEGORY_URL);
  }

  getAllFoodsByCategory(category: string): Observable<Food[]> {
    return category === "All" ?
      this.getAll() :
      this.http.get<Food[]>(FOODS_BY_CATEGORY_URL + category);
  }

  getFoodById(foodId:string):Observable<Food>{
    return this.http.get<Food>(FOOD_BY_ID_URL + foodId);
  }
}
