import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesComponent } from './recipes.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesListItemComponent } from './recipes-list/recipes-list-item/recipes-list-item.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeNewComponent } from './recipe-new/recipe-new.component';
import { RecipeStepsComponent } from './recipe-steps/recipe-steps.component';
import { RecipeStepComponent } from './recipe-steps/recipe-step/recipe-step.component';
import { MaterialModule } from '../shared/material/material.module';
import { RefreshComponent } from './recipes-list/refresh/refresh.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesListComponent,
    RecipesListItemComponent,
    RecipeDetailComponent,
    RecipeNewComponent,
    RecipeStepsComponent,
    RecipeStepComponent,
    RefreshComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    RecipesComponent,
  ]
})
export class RecipesModule { }
