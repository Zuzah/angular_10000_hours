import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[] = [
    new Ingredient('CreamCheese',5,'ml'),
    new Ingredient('Flour', 250, 'ml')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
