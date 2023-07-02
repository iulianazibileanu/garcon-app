import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css']
})
export class FoodPageComponent implements OnInit{
  food!:Food;
  reviewMode = false;
  commentFC = new FormControl();
  stars = [
    {value: 1, checked: false, hovered: false, class: 'far fa-star'},
    {value: 2, checked: false, hovered: false, class: 'far fa-star'},
    {value: 3, checked: false, hovered: false, class: 'far fa-star'},
    {value: 4, checked: false, hovered: false, class: 'far fa-star'},
    {value: 5, checked: false, hovered: false, class: 'far fa-star'},
  ];
  color: any;
  checkedStar: number  = 0;
  orderId: string = '';

  constructor(
    activatedRoute:ActivatedRoute,
    foodService:FoodService,
    private cartService:CartService,
    private router:Router,
    private toastrService: ToastrService
    ) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      foodService.getFoodById(params.id).subscribe(serverFood => {
        this.food = serverFood;
      });
    })
    activatedRoute.queryParams.subscribe(params => {
        if(params['review']) {
          this.reviewMode = true;
        }
        if(params['order']) {
          this.orderId = params['order'];
        }
    });
  }

  ngOnInit(): void {

  }

  onCommentChange() {
    // console.log(this.commentFC.value);
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

  onFileInput(event: any) {
    // console.log(event);
  }

   changeStyle($event: { type: any; }, star: any, index: number) {
    if ($event.type == 'mouseover') {
      if (!star.hovered) {
        for (let i = 0; i <= index; i++) {
          this.stars[i].hovered = true;
          if (index == 0)
            this.stars[i].class = 'far fa-star star-hovered first';
          else if (index == 1)
            this.stars[i].class = 'far fa-star star-hovered second';
          else if (index == 2)
            this.stars[i].class = 'far fa-star star-hovered third';
          else if (index == 3)
            this.stars[i].class = 'far fa-star star-hovered fourth';
          else if (index == 4)
            this.stars[i].class = 'far fa-star star-hovered fifth';
        }
        for (let i = index + 1; i < this.stars.length; i++) {
          this.stars[i].hovered = false;
          this.stars[i].class = 'far fa-star'
        }
      }
    } else {
      if (!star.checked) {
        for (let i = 0; i < this.stars.length; i++) {
          this.stars[i].hovered = false;
          this.stars[i].class = 'far fa-star'
        }
      }
    }
  }

  chooseStar(star: { checked: boolean; value: number; }, i: any) {
    for (let i = 0; i < this.stars.length; i++) {
      this.stars[i].checked = false;
    }
    star.checked = !star.checked;
    this.checkedStar = star.value;
    this.changeStyle({type: 'mouseover'}, star, i);
  }

  submitReview() {
    this.toastrService.success(
      `Multumim pentru recenzie!`,
      'Succes'
    )
    this.router.navigateByUrl(`order/${this.orderId}?reviewed=${this.food.id}`);
  }
}
