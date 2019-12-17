import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';
import { Router } from '@angular/router';
import { RecipesService } from 'src/app/shared/services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[];
  recipes2: Recipe[];
  recipes3: Recipe[];
  

  constructor(private _router: Router, private appRecipesService: RecipesService) { }

  ngOnInit() {
    this.recipes2 = this.appRecipesService.listMain;
    this.recipes3 = this.appRecipesService.listSecond;
    this.recipes = this.recipes2;
  }

  onSwitchChange(switchTo: boolean) {
    switchTo ? this.recipes = this.recipes2 : this.recipes = this.recipes3;
  }
  loadDetails(recipe: Recipe) {
    this._router.navigate(['/recipes/list', recipe.id, recipe.title])
  }


}
