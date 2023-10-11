// Import images
import spaghettiImage from './images/spaghetti.jpg';
import chickenAlfredoImage from './images/chicken_alfredo.jpg';
import pizzaImage from './images/pizza.jpg';
import caesarSaladImage from './images/caesar_salad.jpg';
import browniesImage from './images/brownies.jpg';
import salmonImage from './images/salmon.jpg';
import stirFryImage from './images/stir_fry.jpg';
import guacamoleImage from './images/guacamole.jpg';
import tomatoSoupImage from './images/tomato_soup.jpg';
import cookiesImage from './images/cookies.jpg';

const recipes = [
  {
    id: 1,
    name: 'Spaghetti Carbonara',
    image: spaghettiImage,
    description: 'A classic Italian pasta dish with eggs, cheese, pancetta, and black pepper.',
    cookTime: 20,
    tools: ['Large pot', 'Skillet', 'Mixing bowl'],
    ingredients: [
      '200g spaghetti',
      '100g pancetta or guanciale',
      '2 large eggs',
      '50g Pecorino Romano cheese',
      'Salt and black pepper to taste',
    ],
    instructions: `
      1. Bring a large pot of salted water to a boil and cook spaghetti until al dente.
      2. While pasta is cooking, chop the pancetta or guanciale into small pieces.
      3. In a skillet, cook the pancetta or guanciale until crispy. Remove from heat and set aside.
      4. In a mixing bowl, whisk together the eggs, grated Pecorino Romano cheese, and a pinch of black pepper.
      5. Drain the cooked pasta and immediately add it to the skillet with the pancetta.
      6. Pour the egg and cheese mixture over the pasta and toss quickly to coat.
      7. Serve hot with extra Pecorino Romano cheese and black pepper for garnish.
    `,
  },
  {
    id: 2,
    name: 'Chicken Alfredo',
    image: chickenAlfredoImage,
    description: 'Creamy pasta with grilled chicken and parmesan cheese.',
    cookTime: 30,
    tools: ['Saucepan', 'Skillet', 'Mixing bowl'],
    ingredients: [
      '200g fettuccine pasta',
      '2 boneless chicken breasts',
      '1 cup heavy cream',
      '1/2 cup grated parmesan cheese',
      'Salt and black pepper to taste',
    ],
    instructions: `
      1. Season the chicken breasts with salt and black pepper.
      2. Heat a skillet over medium-high heat and grill the chicken breasts until cooked through. Slice them into strips and set aside.
      3. In a saucepan, heat the heavy cream over medium heat until it begins to simmer.
      4. Stir in the grated parmesan cheese and continue to cook until the sauce thickens.
      5. Cook the fettuccine pasta according to package instructions.
      6. Drain the pasta and toss it in the creamy Alfredo sauce.
      7. Serve the pasta with grilled chicken strips on top.
    `,
  },
  {
    id: 3,
    name: 'Homemade Pizza',
    image: pizzaImage,
    description: 'Delicious pizza with your choice of toppings.',
    cookTime: 25,
    tools: ['Oven', 'Pizza stone', 'Rolling pin'],
    ingredients: [
      'Pizza dough',
      'Tomato sauce',
      'Mozzarella cheese',
      'Toppings of your choice (e.g., pepperoni, vegetables)',
      'Olive oil',
    ],
    instructions: `
      1. Preheat your oven to the highest temperature setting (usually around 475°F or 245°C).
      2. Roll out the pizza dough on a floured surface to your desired thickness.
      3. Transfer the rolled-out dough to a pizza stone or baking sheet.
      4. Spread a thin layer of tomato sauce over the dough.
      5. Add mozzarella cheese and your choice of pizza toppings.
      6. Drizzle a bit of olive oil over the pizza.
      7. Bake the pizza in the preheated oven until the crust is golden and the cheese is bubbly and slightly browned (typically 10-15 minutes).
      8. Remove from the oven, slice, and enjoy!
    `,
  },
  {
    id: 4,
    name: 'Caesar Salad',
    image: caesarSaladImage,
    description: 'Classic Caesar salad with romaine lettuce, croutons, and Caesar dressing.',
    cookTime: 15,
    tools: ['Salad bowl', 'Whisk', 'Cutting board'],
    ingredients: [
      'Romaine lettuce',
      'Croutons',
      'Parmesan cheese',
      'Caesar dressing',
      'Salt and black pepper to taste',
    ],
    instructions: `
      1. Tear or chop the romaine lettuce into bite-sized pieces and place them in a salad bowl.
      2. Add croutons to the bowl.
      3. Grate or shave Parmesan cheese over the salad.
      4. In a separate bowl, whisk together Caesar dressing, salt, and black pepper.
      5. Pour the dressing over the salad and toss to coat evenly.
      6. Serve immediately as an appetizer or side dish.
    `,
  },
  {
    id: 5,
    name: 'Chocolate Brownies',
    image: browniesImage,
    description: 'Fudgy chocolate brownies with walnuts.',
    cookTime: 40,
    tools: ['Baking pan', 'Mixing bowl', 'Whisk'],
    ingredients: [
      '1 cup butter',
      '2 cups granulated sugar',
      '4 large eggs',
      '1 teaspoon vanilla extract',
      '1 cup all-purpose flour',
      '1/2 cup cocoa powder',
      '1/4 teaspoon salt',
      '1 cup chopped walnuts',
    ],
    instructions: `
      1. Preheat your oven to 350°F (175°C) and grease a baking pan.
      2. In a microwave-safe bowl, melt the butter in the microwave or on the stovetop. Allow it to cool slightly.
      3. In a mixing bowl, whisk together the melted butter, granulated sugar, eggs, and vanilla extract.
      4. In a separate bowl, sift together the all-purpose flour, cocoa powder, and salt.
      5. Gradually add the dry ingredients to the wet ingredients and mix until well combined.
      6. Fold in the chopped walnuts.
      7. Pour the brownie batter into the prepared baking pan and spread it evenly.
      8. Bake in the preheated oven for about 30-35 minutes or until a toothpick inserted into the center comes out with a few moist crumbs.
      9. Allow the brownies to cool in the pan before cutting into squares and serving.
    `,
  },
  {
    id: 6,
    name: 'Grilled Salmon with Lemon Butter',
    image: salmonImage,
    description: 'Delicious grilled salmon fillets with a zesty lemon butter sauce.',
    cookTime: 20,
    tools: ['Grill', 'Basting brush', 'Tongs'],
    ingredients: [
      '4 salmon fillets',
      '2 lemons, juiced',
      '4 tablespoons butter',
      '2 cloves garlic, minced',
      'Salt and black pepper to taste',
    ],
    instructions: `
      1. Preheat the grill to medium-high heat.
      2. Season salmon fillets with salt and black pepper.
      3. In a small saucepan, melt the butter over low heat. Add minced garlic and cook for a minute.
      4. Stir in lemon juice and cook for another minute.
      5. Brush the salmon fillets with the lemon butter mixture.
      6. Grill salmon for about 4-5 minutes per side or until it flakes easily with a fork.
      7. Serve hot with extra lemon butter sauce drizzled over the top.
    `,
  },
  {
    id: 7,
    name: 'Vegetable Stir-Fry',
    image: stirFryImage,
    description: 'A quick and healthy vegetable stir-fry with your favorite sauce.',
    cookTime: 15,
    tools: ['Wok or skillet', 'Spatula'],
    ingredients: [
      '2 cups mixed vegetables (e.g., broccoli, bell peppers, carrots)',
      '1 tablespoon vegetable oil',
      '3 tablespoons stir-fry sauce',
      'Cooked rice or noodles for serving',
    ],
    instructions: `
      1. Heat the vegetable oil in a wok or large skillet over high heat.
      2. Add mixed vegetables and stir-fry for 3-4 minutes until they start to soften.
      3. Pour in the stir-fry sauce and continue to stir-fry for another 2-3 minutes.
      4. Serve over cooked rice or noodles.
    `,
  },
  {
    id: 8,
    name: 'Homemade Guacamole',
    image: guacamoleImage,
    description: 'Fresh and creamy guacamole dip with ripe avocados and flavorful seasonings.',
    cookTime: 10,
    tools: ['Mixing bowl', 'Fork', 'Knife'],
    ingredients: [
      '3 ripe avocados',
      '1 small onion, finely diced',
      '2 tomatoes, diced',
      '1/4 cup fresh cilantro, chopped',
      '1 jalapeño pepper, finely chopped (optional)',
      '1 lime, juiced',
      'Salt and garlic powder to taste',
    ],
    instructions: `
      1. Cut avocados in half, remove pits, and scoop the flesh into a mixing bowl.
      2. Use a fork to mash the avocados to your desired consistency.
      3. Add diced onion, diced tomatoes, chopped cilantro, and chopped jalapeño (if using) to the bowl.
      4. Squeeze the juice of one lime over the ingredients.
      5. Season with salt and garlic powder to taste.
      6. Mix everything together until well combined.
      7. Serve with tortilla chips or as a dip for your favorite Mexican dishes.
    `,
  },
  {
    id: 9,
    name: 'Creamy Tomato Basil Soup',
    image: tomatoSoupImage,
    description: 'A comforting bowl of creamy tomato basil soup served with a sprinkle of fresh basil.',
    cookTime: 30,
    tools: ['Large pot', 'Immersion blender'],
    ingredients: [
      '2 cans (28 oz each) crushed tomatoes',
      '1 onion, chopped',
      '2 cloves garlic, minced',
      '4 cups vegetable broth',
      '1 cup heavy cream',
      '1/4 cup fresh basil leaves, chopped',
      'Salt and black pepper to taste',
    ],
    instructions: `
      1. In a large pot, sauté chopped onions and minced garlic until they become translucent.
      2. Add crushed tomatoes and vegetable broth. Bring to a boil.
      3. Reduce heat and simmer for 20 minutes, stirring occasionally.
      4. Use an immersion blender to puree the soup until smooth.
      5. Stir in heavy cream and chopped basil leaves. Season with salt and black pepper.
      6. Simmer for an additional 5 minutes.
      7. Serve hot with a garnish of fresh basil.
    `,
  },
  {
    id: 10,
    name: 'Classic Chocolate Chip Cookies',
    image: cookiesImage,
    description: 'Homemade chocolate chip cookies with a perfect balance of chewiness and chocolate goodness.',
    cookTime: 12,
    tools: ['Mixing bowl', 'Baking sheets', 'Cookie scoop'],
    ingredients: [
      '2 1/4 cups all-purpose flour',
      '1/2 teaspoon baking soda',
      '1 cup unsalted butter, softened',
      '1/2 cup granulated sugar',
      '1 cup brown sugar, packed',
      '2 large eggs',
      '2 teaspoons pure vanilla extract',
      '2 cups semisweet chocolate chips',
    ],
    instructions: `
      1. Preheat your oven to 350°F (175°C) and line baking sheets with parchment paper.
      2. In a mixing bowl, whisk together the flour and baking soda. Set aside.
      3. In another bowl, cream together the softened butter, granulated sugar, and brown sugar until well combined.
      4. Beat in the eggs one at a time, then stir in the vanilla.
      5. Gradually add the dry ingredients to the wet ingredients and mix until the cookie dough forms.
      6. Fold in the chocolate chips.
      7. Drop rounded tablespoons of cookie dough onto the prepared baking sheets.
      8. Bake for about 10-12 minutes or until the edges are golden brown.
      9. Allow the cookies to cool on the baking sheets for a few minutes before transferring to a wire rack to cool completely.
    `,
  }
];

export default recipes;