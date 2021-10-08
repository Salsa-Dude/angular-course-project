import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  // The @Input() decorator in a child component or directive 
  // signifies that the property can receive its value from its parent component.
  @Input() recipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
