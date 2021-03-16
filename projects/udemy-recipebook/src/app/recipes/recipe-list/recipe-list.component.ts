import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipies: Recipe[] = [
    new Recipe('Red Velvet Cake', 'A vanilla cake with red colouring', '../../assets/red-velvet-cake.jpg'),

    new Recipe('Fudge Cake Cake', 'A chocolate cake with extra chocolate', '../../assets/fudge-cake.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
