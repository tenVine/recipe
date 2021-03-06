import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  listMain: Recipe[]= [
    new Recipe (
      '1',
      'Carrot Maple Dip',
      '40min',
      'Friendsgiving calls for easy but tasty recipes. This carrot maple dip with a dash of sage leaves will leave your guests impressed! Dont forget to bring wine to share, and 14 Hands Sauvignon Blanc will have you guests wanting more! Serve with your favorite crackers.',
      'https://images.media-allrecipes.com/userphotos/560x315/7272322.jpg'
    ),
    new Recipe (
      '2',
      'Light Avocado Mango Salsa',
      '20min',
      'Sweet, tart, and perfect with chips!',
      'https://images.media-allrecipes.com/userphotos/560x315/6531146.jpg'
    ),
    new Recipe (
      '3',
      'Lemon Crinkle Cookies',
      '1h 35min',
      'Delicious, chewy cookies with loads of lemon flavor and a crinkle effect.',
      'https://images.media-allrecipes.com/userphotos/560x315/6686302.jpg'
    ),
    new Recipe (
      '4',
      'Sweet and Garlicky Korean Chicken Wings',
      '50min',
      'Turn your picnic game up to 100 with these sweet – not spicy – Korean Chicken Wings made to pair with Chateau Ste. Michelle. This makes excellent picnic food.',
      'https://images.media-allrecipes.com/userphotos/560x315/6530369.jpg'
    ),
    new Recipe (
      '5',
      'Peanut Butter Bars I',
      '1h 25min',
      'These peanut butter bars taste just like peanut butter cups.',
      'https://images.media-allrecipes.com/userphotos/720x405/4548869.jpg'
    )
  ];
  listSecond: Recipe[] = [
    new Recipe (
      '6',
      'The Best Vegetarian Chili in the World',
      '1h 15min',
      'Break out your soup pot and fix up a batch of this delicious, spicy vegetarian chili today! Its ready in no time, and packed with vegetables, beans - and flavor!',
      'https://images.media-allrecipes.com/userphotos/720x405/4565674.jpg'
    ),
    new Recipe (
      '7',
      'Grilled Tuscan Rib Steak',
      '30min',
      'What makes a steak Tuscan? Its accent! Really, the secrets in the spices… but speaking in an Italian accent is strongly encouraged, too.',
      'https://images.media-allrecipes.com/userphotos/720x405/7183004.jpg'
    )
  ];  
}
