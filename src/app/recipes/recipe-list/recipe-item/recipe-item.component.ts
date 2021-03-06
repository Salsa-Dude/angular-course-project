import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecipeService } from '../../recipe-service';

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

  constructor(private recipeService: RecipeService){}

  // The child component uses the @Output() property to raise an event to notify the parent of the change.
  // To raise an event, an @Output() must have the type of EventEmitter
  // @Output() recipeSelected = new EventEmitter<void>();


  ngOnInit(): void {
  }

  onSelected() {
    // this.recipeSelected.emit();

    // inject
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
