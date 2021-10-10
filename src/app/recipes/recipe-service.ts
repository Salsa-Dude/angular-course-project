import { Recipe } from "./recipe.model";

// a Service is simply a TypeScript class
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is a test', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.616.462.suffix/1537973085542.jpeg'), new Recipe('Another test recipe', 'this is a test', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.616.462.suffix/1537973085542.jpeg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }

}