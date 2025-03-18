import { RecipeBookT, Unit } from "../src/types";

const RECIPES_BOOK2: RecipeBookT = {
    recipes: [
        {
            slug: "grandmas-old-fashioned-bread-pudding",
            name: "Grandma's Old Fashioned Bread Pudding",
            ingredients: [
                {
                    name: "White Bread",
                    quantity: 4,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "cubed (8 slices)"
                },
                {
                    name: "Raisins",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Milk",
                    quantity: 2,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Butter",
                    quantity: 0.25,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Sugar",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Eggs",
                    quantity: 2,
                    extraInstructions: "slightly beaten"
                },
                {
                    name: "Vanilla",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                }
            ],
            additionalIngredientGroups: [
                {
                    name: "Bourbon Sauce",
                    ingredients: [
                        {
                            name: "Brown Sugar",
                            quantity: 1,
                            quantityUnit: Unit.CUP,
                            extraInstructions: "packed"
                        },
                        {
                            name: "Butter",
                            quantity: 0.5,
                            quantityUnit: Unit.CUP,
                            extraInstructions: "not margarine"
                        },
                        {
                            name: "Whipping Cream",
                            quantity: 2,
                            quantityUnit: Unit.TABLESPOON
                        },
                        {
                            name: "Bourbon",
                            quantity: 3,
                            quantityUnit: Unit.TABLESPOON,
                            extraInstructions: "or 2 tsp brandy extract"
                        },
                        {
                            name: "Cinnamon",
                            quantity: 0.5,
                            quantityUnit: Unit.TEASPOON,
                            extraInstructions: "optional"
                        }
                    ]
                }
            ],
            instructions: [
                "Preheat oven to 350°.",
                "Combine bread and raisins in bowl.",
                "Combine milk and ¼ cup butter in 1 quart sauce pan.",
                "Cook over medium heat until butter is melted (4-7 minutes).",
                "Pour milk mixture over bread; let stand 10 minutes.",
                "Stir in all remaining pudding ingredients.",
                "Pour into a greased 1½ quart casserole dish.",
                "Bake for 40-50 minutes or until set in center.",
                "For the Bourbon Sauce: Combine all sauce ingredients in a quart saucepan.",
                "Cook over medium heat stirring occasionally until mixture thickens and comes to a full boil (5-8 minutes).",
                "To Serve: Spoon warm pudding into individual dessert dishes. Serve with sauce. Store refrigerated."
            ]
        },
        {
            slug: "chicken-ramen-stir-fry",
            name: "Chicken Ramen Stir Fry",
            ingredients: [
                {
                    name: "Soy Sauce",
                    quantity: 0.33,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Ginger",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "grated"
                },
                {
                    name: "Honey",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "White Wine Vinegar",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Garlic",
                    quantity: 2,
                    extraInstructions: "cloves, grated"
                },
                {
                    name: "Canola Oil",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Boneless, Skinless Chicken Thighs",
                    quantity: 4
                },
                {
                    name: "Carrots",
                    quantity: 2,
                    extraInstructions: "peeled into ribbons (about 1 cup)"
                },
                {
                    name: "Ramen Noodles",
                    quantity: 3,
                    extraInstructions: "packages (discard seasoning packet)"
                },
                {
                    name: "Purple Cabbage",
                    quantity: 1,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "sliced"
                },
                {
                    name: "Yellow Onion",
                    quantity: 1,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "sliced"
                },
                {
                    name: "Scallions",
                    quantity: 4,
                    extraInstructions: "thinly sliced"
                }
            ],
            additionalIngredientGroups: [
                {
                    name: "For Serving",
                    ingredients: [
                        {
                            name: "Sriracha Hot Sauce",
                            extraInstructions: "to taste"
                        },
                        {
                            name: "Lime Wedges",
                            extraInstructions: "for serving"
                        }
                    ]
                }
            ],
            instructions: [
                "In a medium bowl, whisk together the soy sauce, ginger, honey, vinegar, garlic, and 1 TBS of the canola oil. Add the chicken and marinade for 15 minutes.",
                "In the meantime, use a vegetable peeler to create ribbons from the carrot; there should be about 1 cup of carrot ribbons.",
                "Bring a medium pot of water to a boil, remove from heat and add the ramen noodles. Let sit for 2 minutes, then drain.",
                "Heat the remaining 1 TBS canola oil in a large skillet or wok.",
                "Remove the chicken from marinade, reserving the marinade. Stir fry the chicken in the hot oil until cooked through, about 5 minutes; transfer to a plate and set aside.",
                "Add the cabbage, onions, and carrots to the skillet and stir fry for 30 seconds.",
                "Add 1/4 cup of water, scraping up any browned bits from the bottom.",
                "Add the cooked Ramen noodles, cooked chicken, and reserved marinade to the skillet along with the scallions.",
                "Stir fry until everything is heated through and uniformly combined, for additional minute.",
                "Serve immediately with Sriracha and lime wedges."
            ]
        },
        {
            slug: "chicken-broccoli-casserole",
            name: "Chicken Broccoli Casserole",
            ingredients: [
                {
                    name: "Nonstick Cooking Spray or Butter",
                    extraInstructions: "for baking dish"
                },
                {
                    name: "Boneless, Skinless Chicken Breasts",
                    quantity: 4
                },
                {
                    name: "Salt and Pepper",
                    extraInstructions: "to taste"
                },
                {
                    name: "Broccoli",
                    quantity: 1,
                    extraInstructions: "medium head, cut into small florets"
                },
                {
                    name: "Cooked Rice",
                    quantity: 2,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Cream of Chicken Soup",
                    quantity: 1,
                    extraInstructions: "10 oz can (or cream of mushroom soup)"
                },
                {
                    name: "Sour Cream",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Mayonnaise",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Lemon Juice",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Cheddar Cheese",
                    quantity: 2.5,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "grated"
                }
            ],
            instructions: [
                "Preheat oven to 350°F. Grease a 9x13\" baking dish with nonstick spray or butter.",
                "Place chicken in large pot with water to cover. Add some salt, bring to a boil, then reduce the heat to a simmer and cook chicken until tender, about 45 minutes. Drain the juices, cover, and refrigerate until cool, or up to 24 hours. Shred.",
                "Meanwhile, bring a medium pot of generously salted water to a boil. Add the broccoli florets and boil until crisp tender, 2 to 3 minutes.",
                "Spread the rice in an even layer in the baking dish. Make a second layer with the broccoli.",
                "In a large bowl, mix the chicken, mushroom soup, the sour cream, mayonnaise, lemon juice, shredded chicken, half the Cheddar cheese, and salt and pepper.",
                "Pour the mixture over the broccoli and top with remaining Cheddar.",
                "Bake for 40 minutes, let stand for 5 minutes before serving."
            ]
        },
        {
            slug: "pimiento-cheese-spread",
            name: "Pimiento Cheese Spread",
            ingredients: [
                {
                    name: "Canned Pimientos",
                    quantity: 2,
                    extraInstructions: "7-oz jars, drained"
                },
                {
                    name: "Cheddar Cheese",
                    quantity: 3,
                    extraInstructions: "10 oz bricks, finely grated"
                },
                {
                    name: "Mayonnaise",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                }
            ],
            instructions: [
                "Mix all ingredients together until well combined.",
                "Serve chilled."
            ]
        },
        {
            slug: "minestrone-soup",
            name: "Minestrone Soup",
            ingredients: [
                {
                    name: "Olive Oil",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Onion",
                    quantity: 1,
                    extraInstructions: "large, diced"
                },
                {
                    name: "Garlic",
                    quantity: 4,
                    extraInstructions: "cloves, minced"
                },
                {
                    name: "Celery",
                    quantity: 2,
                    extraInstructions: "stalks, diced"
                },
                {
                    name: "Carrot",
                    quantity: 1,
                    extraInstructions: "large, diced"
                },
                {
                    name: "Green Beans",
                    quantity: 1.5,
                    quantityUnit: Unit.LB,
                    extraInstructions: "trimmed and cut into ½ inch pieces (about 1 ½ cups)"
                },
                {
                    name: "Dried Oregano",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Dried Basil",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Salt and Pepper",
                    extraInstructions: "to taste"
                },
                {
                    name: "Diced Tomatoes",
                    quantity: 1,
                    extraInstructions: "28 oz can"
                },
                {
                    name: "Crushed Tomatoes",
                    quantity: 1,
                    extraInstructions: "14 oz can"
                },
                {
                    name: "Low-Sodium Chicken Broth",
                    quantity: 6,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Kidney Beans",
                    quantity: 1,
                    extraInstructions: "15 oz can, drained and rinsed"
                },
                {
                    name: "Elbow Pasta",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Parmesan Cheese",
                    quantity: 0.33,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "finely grated"
                },
                {
                    name: "Fresh Basil",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "chopped"
                }
            ],
            instructions: [
                "Heat the olive oil in a large pot over medium-high heat.",
                "Add the onion and cook until translucent, about 4 minutes.",
                "Add garlic and cook 30 seconds.",
                "Add celery and carrots and cook until they begin to soften, about 5 minutes.",
                "Stir in the green beans, oregano and basil, ¾ tsp. salt and pepper to taste, cook 3 more minutes.",
                "Add the stock and crushed tomatoes and the chicken broth to the pot and bring to a boil.",
                "Reduce to medium low heat and simmer 10 minutes.",
                "Stir in the kidney beans and pasta and cook until the pasta and vegetables are tender, about 10 minutes.",
                "Season with salt.",
                "Ladle into bowls and top with parmesan and chopped basil."
            ]
        },
        {
            slug: "carrot-cake",
            name: "Carrot Cake",
            ingredients: [],
            additionalIngredientGroups: [
                {
                    name: "Tier One",
                    ingredients: [
                        {
                            name: "Unsweetened Applesauce",
                            quantity: 1.25,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Granulated Sugar",
                            quantity: 2,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Eggs",
                            quantity: 3,
                            extraInstructions: "room temperature"
                        }
                    ]
                },
                {
                    name: "Tier Two",
                    ingredients: [
                        {
                            name: "All-Purpose Flour",
                            quantity: 2,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Baking Soda",
                            quantity: 1,
                            quantityUnit: Unit.TEASPOON
                        },
                        {
                            name: "Baking Powder",
                            quantity: 1.5,
                            quantityUnit: Unit.TEASPOON
                        },
                        {
                            name: "Salt",
                            quantity: 0.5,
                            quantityUnit: Unit.TEASPOON
                        },
                        {
                            name: "Cinnamon",
                            quantity: 1,
                            quantityUnit: Unit.TEASPOON
                        }
                    ]
                },
                {
                    name: "Tier Three",
                    ingredients: [
                        {
                            name: "Carrots",
                            quantity: 2,
                            quantityUnit: Unit.CUP,
                            extraInstructions: "grated"
                        },
                        {
                            name: "Sweetened Coconut",
                            quantity: 1,
                            quantityUnit: Unit.CUP,
                            extraInstructions: "shredded"
                        },
                        {
                            name: "Nuts",
                            quantity: 1,
                            quantityUnit: Unit.CUP,
                            extraInstructions: "chopped (optional)"
                        },
                        {
                            name: "Vanilla Extract",
                            quantity: 1,
                            quantityUnit: Unit.TEASPOON
                        },
                        {
                            name: "Crushed Pineapple",
                            quantity: 1,
                            quantityUnit: Unit.CUP,
                            extraInstructions: "not drained, in juice not syrup"
                        }
                    ]
                },
                {
                    name: "Cream Cheese Frosting",
                    ingredients: [
                        {
                            name: "Butter",
                            quantity: 1,
                            quantityUnit: Unit.CUP,
                            extraInstructions: "softened"
                        },
                        {
                            name: "Cream Cheese",
                            quantity: 16,
                            quantityUnit: Unit.OZ,
                            extraInstructions: "softened"
                        },
                        {
                            name: "Vanilla Extract",
                            quantity: 2,
                            quantityUnit: Unit.TEASPOON
                        },
                        {
                            name: "Powdered Sugar",
                            quantity: 2,
                            quantityUnit: Unit.LB
                        }
                    ]
                },
                {
                    name: "Optional Toppings",
                    ingredients: [
                        {
                            name: "Toasted Pecans",
                            extraInstructions: "for garnish"
                        },
                        {
                            name: "Toasted Coconut",
                            extraInstructions: "for garnish"
                        }
                    ]
                }
            ],
            instructions: [
                "Preheat oven to 350°.",
                "Combine Tier One ingredients (applesauce, sugar, and eggs) in a bowl.",
                "Add Tier Two ingredients (flour, baking soda, baking powder, salt, and cinnamon).",
                "Stir in Tier Three ingredients (carrots, coconut, nuts, vanilla, and crushed pineapple).",
                "Pour into a lightly greased 9x13 two-pan or three 8-inch pans (the cake is very moist, so cutting parchment paper for the bottoms of the pans will ensure they don't stick or you can use non-stick spray with flour so they easily cake removed).",
                "Bake 35-40 minutes for the 9x13 or Quick Cake pans and 25-30 minutes for 8-inch cake pans. You are looking for an inserted toothpick to come out clean.",
                "Let cakes cool for 10 minutes in the pan and then transfer to a cooling rack and let cool completely.",
                "For the frosting: Beat the butter and cream cheese until nice and fluffy about 1 minute on medium speed then begin to add the sugar. Beat until nice and smooth.",
                "Invert the cake onto a cake plate or stand.",
                "Apply a generous dollop of frosting and spread.",
                "Gently place the second cake on top and continue frosting. Repeat with the third cake if you make three!",
                "Refrigerate for 1 hour before serving for best results."
            ],
            notes: "The frosting recipe can be halved, if you are not planning on piping! I always end up using a lot of frosting decorations to the top sides of the cake."
        },
        {
            slug: "potato-pancakes-with-ham-cheese-and-spinach",
            name: "Potato Pancakes with Ham, Cheese, and Spinach",
            ingredients: [
                {
                    name: "Mashed Potatoes",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Green Onions",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "chopped"
                },
                {
                    name: "Baby Spinach",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "chopped"
                },
                {
                    name: "Cheddar Cheese",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "shredded"
                },
                {
                    name: "Cooked Ham",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "chopped"
                },
                {
                    name: "Egg",
                    quantity: 1,
                    extraInstructions: "large"
                },
                {
                    name: "Dried Dill Weed",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Salt",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Black Pepper",
                    quantity: 0.25,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "All-Purpose Flour",
                    quantity: 5,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Oil",
                    quantity: 0.25,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "for frying"
                }
            ],
            additionalIngredientGroups: [
                {
                    name: "Ranch Dressing",
                    ingredients: [
                        {
                            name: "Buttermilk",
                            quantity: 0.5,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Sour Cream",
                            quantity: 0.33,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Mayonnaise",
                            quantity: 0.25,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Dill and Parsley",
                            quantity: 1,
                            quantityUnit: Unit.TEASPOON
                        },
                        {
                            name: "Dried Dill Weed",
                            quantity: 0.5,
                            quantityUnit: Unit.TEASPOON
                        },
                        {
                            name: "Garlic Powder",
                            quantity: 0.5,
                            quantityUnit: Unit.TEASPOON
                        },
                        {
                            name: "Black Pepper",
                            quantity: 0.5,
                            quantityUnit: Unit.TEASPOON
                        },
                        {
                            name: "Salt",
                            quantity: 0.5,
                            quantityUnit: Unit.TEASPOON
                        },
                        {
                            name: "Dried Chives",
                            quantity: 0.5,
                            quantityUnit: Unit.TEASPOON
                        }
                    ]
                }
            ],
            instructions: [
                "Combine mashed potatoes, onions, spinach, cheese, and chopped ham in a bowl.",
                "Add egg and dill weed, salt, and pepper; mix well with a spoon.",
                "Stir in flour.",
                "Form your patties by dusting them with a little flour, so it will not stick to your hands; shape into patties.",
                "Heat ¼ cup oil in a skillet and add patties cooking on medium heat until browned on both sides.",
                "Makes approx. 6 patties. Serve with homemade Ranch Dressing."
            ],
            notes: "For the Ranch Dressing: Whisk together all ingredients and refrigerate for 2-3 hours. Makes about 1¼ cup dressing. Will keep in refrigerator for several days."
        },
        {
            slug: "roasted-asparagus-mushroom-carbonara",
            name: "Roasted Asparagus Mushroom Carbonara",
            ingredients: [
                {
                    name: "Asparagus",
                    quantity: 1.5,
                    quantityUnit: Unit.LB,
                    extraInstructions: "trimmed and cut into 1-inch pieces"
                },
                {
                    name: "Mushrooms",
                    quantity: 8,
                    quantityUnit: Unit.OZ,
                    extraInstructions: "quartered"
                },
                {
                    name: "Olive Oil",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Salt and Pepper",
                    extraInstructions: "to taste"
                },
                {
                    name: "Dry Spaghetti",
                    quantity: 1,
                    quantityUnit: Unit.LB
                },
                {
                    name: "Eggs",
                    quantity: 4,
                    extraInstructions: "large"
                },
                {
                    name: "Bacon",
                    quantity: 8,
                    quantityUnit: Unit.OZ,
                    extraInstructions: "cut into 1\" pieces"
                },
                {
                    name: "Garlic",
                    quantity: 2,
                    extraInstructions: "cloves, minced"
                },
                {
                    name: "Parmesan Cheese",
                    quantity: 1,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "grated"
                },
                {
                    name: "Freshly Cracked Black Pepper",
                    extraInstructions: "to taste"
                },
                {
                    name: "Sea Salt",
                    extraInstructions: "to taste"
                }
            ],
            instructions: [
                "Preheat oven to 425°.",
                "Place mushrooms and the asparagus on a sheet pan. Drizzle with olive oil, season with salt and pepper and toss gently to evenly coat.",
                "Roast the vegetables in the preheated oven for 20-30 minutes, until the vegetables start to caramelize, stirring halfway.",
                "While the vegetables are roasting, bring 6 quarts of generously salted water to a boil. Add the pasta, stir and cook for 8-10 minutes, until al dente. Reserve ½ cup of the pasta water before draining the pasta.",
                "While the pasta is cooking add the bacon to a large sauté pan and cook over medium heat. Cook for 3-4 minutes, until golden and crispy, and most of the fat has rendered off. Turn off the heat and drain all but 1 TBS of the rendered fat.",
                "In a medium bowl, whisk together the eggs, Parmesan and a generous amount of the fresh cracked pepper until well combined.",
                "Return the sauté pan to medium heat, add the garlic and sauté for 30 seconds until fragrant.",
                "Add 1/4 Cup of the reserved cooking liquid to the sauté pan. Toss in the spaghetti and heat a few minutes until the bubbling has subsided and much of the water has evaporated.",
                "Remove the pan from the heat and add the egg mixture to the pasta. While quickly stirring, continue stirring until the egg mixture has thickened, adding additional cooking liquid if the sauce is too thick.",
                "Season with pepper and salt to taste. Gently toss the spaghetti with the roasted asparagus and mushrooms. Serve immediately with additional Parmesan cheese, if desired."
            ]
        },
        {
            slug: "cheesesteak-stuffed-peppers",
            name: "Cheesesteak Stuffed Peppers",
            ingredients: [
                {
                    name: "Bell Peppers",
                    quantity: 4,
                    extraInstructions: "halved"
                },
                {
                    name: "Vegetable Oil",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Onion",
                    quantity: 1,
                    extraInstructions: "large, sliced"
                },
                {
                    name: "Cremini Mushrooms",
                    quantity: 6,
                    quantityUnit: Unit.OZ,
                    extraInstructions: "sliced"
                },
                {
                    name: "Salt and Pepper",
                    extraInstructions: "to taste"
                },
                {
                    name: "Sirloin Steak",
                    quantity: 1.5,
                    quantityUnit: Unit.LB,
                    extraInstructions: "thinly sliced"
                },
                {
                    name: "Italian Seasoning",
                    quantity: 2,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Provolone Cheese",
                    quantity: 16,
                    extraInstructions: "slices"
                },
                {
                    name: "Fresh Parsley",
                    extraInstructions: "chopped, for garnish"
                }
            ],
            instructions: [
                "Preheat oven to 325°.",
                "Place peppers in a large baking dish and bake until tender, about 30 minutes.",
                "Meanwhile in a large skillet over medium-high heat, heat oil. Add onions and mushrooms and season with salt and pepper. Cook until soft, 6 minutes.",
                "Add steak and season with salt and pepper. Cook, stirring occasionally, 3 minutes. Stir in Italian seasoning.",
                "Add 4 provolone to bottoms of baked peppers and top with steak mixture. Top with another piece of provolone and broil until golden, 3 minutes.",
                "Garnish with parsley before serving."
            ]
        },
        {
            slug: "chocolate-turtles-cake",
            name: "Chocolate Turtles Cake",
            ingredients: [
                {
                    name: "Chocolate Chips",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Pecans",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Butter",
                    quantity: 0.75,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "melted"
                },
                {
                    name: "Evaporated Milk",
                    quantity: 0.67,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Caramels",
                    quantity: 14,
                    quantityUnit: Unit.OZ,
                    extraInstructions: "bag"
                },
                {
                    name: "German Chocolate Cake Mix",
                    quantity: 1,
                    extraInstructions: "plus ingredients called for on box (water, oil, eggs)"
                }
            ],
            instructions: [
                "Prepare cake mix as directed on box.",
                "Pour ½ of the batter into a 9x13\" pan.",
                "Preheat oven to 350° and bake for 15 minutes.",
                "Remove and let cool.",
                "In a double boiler, add caramels, milk, and butter and stir constantly until melted.",
                "Pour melted caramels over cooling cake.",
                "Sprinkle on top of caramel 1 cup of pecans and chocolate chips.",
                "Pour remaining batter on top and bake an additional 20 minutes."
            ],
            notes: "Can also use 9\" (2) or 8\" (3) round cake pans."
        },
        {
            slug: "crispy-fried-dill-pickles",
            name: "Crispy Fried Dill Pickles",
            ingredients: [
                {
                    name: "All-Purpose Flour",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Z-Mix",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Baking Powder",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Egg",
                    quantity: 1
                },
                {
                    name: "Paprika",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Black Pepper",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Dried Dill",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON,
                    extraInstructions: "optional"
                },
                {
                    name: "Dill Pickle Slices",
                    extraInstructions: "dried on paper towels"
                },
                {
                    name: "Panko Bread Crumbs",
                    quantity: 1,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "more if needed"
                },
                {
                    name: "Oil",
                    extraInstructions: "for frying, heated to 360-370°"
                }
            ],
            additionalIngredientGroups: [
                {
                    name: "For Serving",
                    ingredients: [
                        {
                            name: "Ranch Dip",
                            extraInstructions: "for serving"
                        }
                    ]
                }
            ],
            instructions: [
                "Preheat oil to 360-370°.",
                "Combine all batter ingredients and stir until smooth. Let it sit for 5 minutes.",
                "Dab pickle slices on paper towel to dry. Place about 1 cup of panko bread crumbs in a bowl (add more if needed). If they get wet they don't stick so it's best to work in small batches.",
                "Dip each pickle slice in the wet batter and then gently toss in the bread crumbs, let sit for a minute or so, this will allow the crumbs to stick better.",
                "Fry in small batches for 3-4 minutes or until brown and crispy.",
                "Serve with ranch dip."
            ]
        },
        {
            slug: "luscious-lemon-delight",
            name: "Luscious Lemon Delight",
            ingredients: [],
            additionalIngredientGroups: [
                {
                    name: "Crust",
                    ingredients: [
                        {
                            name: "All-Purpose Flour",
                            quantity: 1,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Pecans",
                            quantity: 1,
                            quantityUnit: Unit.CUP,
                            extraInstructions: "ground or finely chopped"
                        },
                        {
                            name: "Butter",
                            quantity: 0.5,
                            quantityUnit: Unit.CUP,
                            extraInstructions: "melted"
                        }
                    ]
                },
                {
                    name: "Layers",
                    ingredients: [
                        {
                            name: "Cream Cheese",
                            quantity: 8,
                            quantityUnit: Unit.OZ
                        },
                        {
                            name: "Cool Whip",
                            quantity: 2.5,
                            quantityUnit: Unit.CUP,
                            extraInstructions: "thawed"
                        },
                        {
                            name: "Instant Lemon Pudding",
                            quantity: 2,
                            extraInstructions: "small packages"
                        },
                        {
                            name: "Lemon Juice",
                            quantity: 1,
                            quantityUnit: Unit.TABLESPOON,
                            extraInstructions: "optional - if you like tartness"
                        },
                        {
                            name: "Milk",
                            quantity: 3,
                            quantityUnit: Unit.CUP
                        }
                    ]
                },
                {
                    name: "Icing/Decoration",
                    ingredients: [
                        {
                            name: "Confectioner's Sugar",
                            quantity: 1,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Pecans",
                            extraInstructions: "finely chopped, for dusting"
                        }
                    ]
                }
            ],
            instructions: [
                "To make the crust: Combine the flour, chopped pecans and melted butter. Make sure the pecans are either ground or finely chopped. This will produce a crust that will hold together nicely. Stir these 3 ingredients until well-blended and crumbly. Press this mixture into the bottom of a 9x13 baking dish. Bake at 350° for 15 minutes.",
                "Add your layers: With electric mixer, mix cream cheese and confectioner's sugar until smooth and creamy. Fold in 1 cup of Cool Whip and spread over crust. Spread slowly if pecans are too coarse the crust may pull apart. Just work slowly to spread the cream cheese layer as best as you can.",
                "Whisk together the pudding packets and milk. Add lemon juice (optional) and continue to stir until thick. Spread pudding over cream cheese layer.",
                "Spoon remaining Cool Whip over the pudding. Sprinkle with a dusting of chopped pecans.",
                "Refrigerate for 4 hours before serving."
            ]
        },
        {
            slug: "lemon-cupcakes-with-blackberry-buttercream",
            name: "Lemon Cupcakes with Blackberry Buttercream",
            ingredients: [],
            additionalIngredientGroups: [
                {
                    name: "Cupcakes",
                    ingredients: [
                        {
                            name: "White Sugar",
                            quantity: 1,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Butter",
                            quantity: 0.5,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Eggs",
                            quantity: 2
                        },
                        {
                            name: "Vanilla Extract",
                            quantity: 1.5,
                            quantityUnit: Unit.TEASPOON
                        },
                        {
                            name: "All-Purpose Flour",
                            quantity: 1.5,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Baking Powder",
                            quantity: 1.75,
                            quantityUnit: Unit.TEASPOON
                        },
                        {
                            name: "Low-Fat Milk",
                            quantity: 0.5,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Lemon",
                            quantity: 1,
                            extraInstructions: "juice and zest"
                        }
                    ]
                },
                {
                    name: "Buttercream Icing",
                    ingredients: [
                        {
                            name: "Butter",
                            quantity: 1,
                            quantityUnit: Unit.CUP,
                            extraInstructions: "softened"
                        },
                        {
                            name: "Vanilla Extract",
                            quantity: 1,
                            quantityUnit: Unit.TEASPOON
                        },
                        {
                            name: "Salt",
                            quantity: 0.25,
                            quantityUnit: Unit.TEASPOON
                        },
                        {
                            name: "Confectioners Sugar",
                            quantity: 4,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Seedless Blackberry Jam",
                            quantity: 0.5,
                            quantityUnit: Unit.CUP
                        }
                    ]
                }
            ],
            instructions: [
                "Preheat oven to 350°. Line 24 muffin cups with paper liners.",
                "Cream sugar and ½ cup butter in bowl until fluffy. Beat in eggs, one at a time, and mix ½ tsp vanilla with the second egg.",
                "Beat in the flour and baking powder until thoroughly combined, beat in milk, lemon juice, and lemon zest to make a smooth batter.",
                "Spoon the batter into the prepared muffin cups.",
                "Bake in the preheated oven until cupcake edges are slightly golden brown and a toothpick inserted into the center of a cupcake comes out clean, 20 to 25 minutes. Cool cupcakes.",
                "Beat 1 cup Butter with 1 tsp. Vanilla and melt until smooth and creamy. Beat in confectioners sugar, 1 cup at a time, to make a creamy frosting. Beat in Blackberry jam spread frosting on cooled cupcakes."
            ]
        },
        {
            slug: "buckingham-truffle-cake",
            name: "Buckingham Truffle Cake",
            ingredients: [],
            additionalIngredientGroups: [
                {
                    name: "Peanut Butter Filling",
                    ingredients: [
                        {
                            name: "Creamy Peanut Butter",
                            quantity: 0.75,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Cream Cheese",
                            quantity: 4,
                            quantityUnit: Unit.OZ
                        },
                        {
                            name: "Confectioners Sugar",
                            quantity: 0.25,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Egg",
                            quantity: 1,
                            extraInstructions: "beaten"
                        },
                        {
                            name: "Whole Milk",
                            quantity: 3,
                            quantityUnit: Unit.TABLESPOON
                        }
                    ]
                },
                {
                    name: "Cake",
                    ingredients: [
                        {
                            name: "Water",
                            quantity: 1,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Unsalted Butter",
                            quantity: 6,
                            quantityUnit: Unit.OZ,
                            extraInstructions: "plus 1 TBS for greasing the pan"
                        },
                        {
                            name: "Cocoa Powder",
                            quantity: 0.33,
                            quantityUnit: Unit.CUP,
                            extraInstructions: "plus 2 TBS for dusting the pan"
                        },
                        {
                            name: "Instant Espresso Powder",
                            quantity: 1,
                            quantityUnit: Unit.TABLESPOON,
                            extraInstructions: "heaping"
                        },
                        {
                            name: "Kosher Salt",
                            quantity: 1,
                            quantityUnit: Unit.TEASPOON
                        },
                        {
                            name: "All-Purpose Flour",
                            quantity: 2,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Granulated Sugar",
                            quantity: 1.5,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Baking Powder",
                            quantity: 1,
                            quantityUnit: Unit.TEASPOON
                        },
                        {
                            name: "Eggs",
                            quantity: 2
                        },
                        {
                            name: "Vanilla Extract",
                            quantity: 1,
                            quantityUnit: Unit.TEASPOON
                        },
                        {
                            name: "Sour Cream",
                            quantity: 0.5,
                            quantityUnit: Unit.CUP
                        }
                    ]
                },
                {
                    name: "Shiny Peanut Butter Chocolate Glaze",
                    ingredients: [
                        {
                            name: "Heavy Cream",
                            quantity: 0.5,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Corn Syrup",
                            quantity: 2,
                            quantityUnit: Unit.TABLESPOON
                        },
                        {
                            name: "Granulated Sugar",
                            quantity: 1,
                            quantityUnit: Unit.TABLESPOON
                        },
                        {
                            name: "Creamy Peanut Butter",
                            quantity: 0.25,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Dark Chocolate",
                            quantity: 4.5,
                            quantityUnit: Unit.OZ,
                            extraInstructions: "finely chopped"
                        }
                    ]
                }
            ],
            instructions: [
                "Preheat oven to 350 degrees F. Generously grease pan with 1 TBS of softened butter. Sprinkle the 2 TBS of cocoa powder into the pan and swirl around to coat the entire pan evenly in a layer of cocoa powder.",
                "Make the filling by adding all of the peanut butter filling ingredients to a large mixing bowl and mixing with a hand mixer until smooth and creamy and no streaks of creamy cheese or peanut butter remain. Set aside.",
                "Combine water, 8 ounces of butter, 1 3/4 cups of sugar, cocoa powder, espresso, and salt in a medium saucepan over medium heat. Whisk to remove any lumps. When butter's melted and the pan comes to a boil, take off heat and set aside.",
                "In a large mixing bowl, whisk together the flour, granulated sugar, and baking soda. Whisk in the chocolate and butter mixture, followed by the 2 eggs, vanilla, and sour cream. Whisk together until there are no streaks of sour cream, but try not to overmix a few lumps are okay.",
                "Pour ¾ of batter into the prepared Bundt pan. Spoon the peanut butter cream cheese filling evenly on top of the batter, trying to keep it from touching the sides of pan or the middle tube.",
                "Cover the peanut butter filling with the rest of the cake batter. Bake in the preheated oven for 50–60 minutes.",
                "Cool the cake for 10 minutes. Loosen the sides with a thin knife if needed and place a cake plate over the pan. Invert the pan as it's resting. Cake should drop on the plate, and carefully lift the Bundt pan away from the cake.",
                "Make the glaze by heating the cream, sugar, peanut butter, and corn syrup to almost a boil. Pour the heated mixture over the chocolate and let sit 1 minute to start melting. Whisk until smooth and shiny, then pour the mixture over the top of the cake."
            ],
            notes: "Don't skip the butter and cocoa powder coating of the Bundt pan! If you do, you risk the bottom of the cake sticking to the pan and the cake coming apart."
        },
        {
            slug: "orange-chicken",
            name: "Orange Chicken",
            ingredients: [],
            additionalIngredientGroups: [
                {
                    name: "Orange Sauce",
                    ingredients: [
                        {
                            name: "Orange",
                            quantity: 1,
                            extraInstructions: "large, for zest and juice"
                        },
                        {
                            name: "Soy Sauce",
                            quantity: 3,
                            quantityUnit: Unit.TABLESPOON
                        },
                        {
                            name: "Brown Sugar",
                            quantity: 0.5,
                            quantityUnit: Unit.TABLESPOON
                        },
                        {
                            name: "Rice Vinegar",
                            quantity: 0.5,
                            quantityUnit: Unit.TABLESPOON
                        },
                        {
                            name: "Fresh Ginger",
                            quantity: 1,
                            quantityUnit: Unit.TEASPOON,
                            extraInstructions: "grated"
                        },
                        {
                            name: "Garlic",
                            quantity: 1,
                            extraInstructions: "clove, minced"
                        },
                        {
                            name: "Red Pepper Flakes",
                            quantity: 0.25,
                            quantityUnit: Unit.TEASPOON
                        },
                        {
                            name: "Cornstarch",
                            quantity: 0.5,
                            quantityUnit: Unit.TABLESPOON
                        }
                    ]
                },
                {
                    name: "Chicken and Rice",
                    ingredients: [
                        {
                            name: "Boneless, Skinless Chicken Thighs",
                            quantity: 4,
                            extraInstructions: "cut into 3/4\" pieces"
                        },
                        {
                            name: "Egg",
                            quantity: 1,
                            extraInstructions: "large"
                        },
                        {
                            name: "Cornstarch",
                            quantity: 2,
                            quantityUnit: Unit.TABLESPOON
                        },
                        {
                            name: "Salt and Pepper",
                            extraInstructions: "pinch"
                        },
                        {
                            name: "Cooking Oil",
                            quantity: 2,
                            quantityUnit: Unit.TABLESPOON
                        },
                        {
                            name: "Cooked Rice",
                            quantity: 4,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Green Onions",
                            quantity: 2,
                            extraInstructions: "diced"
                        }
                    ]
                }
            ],
            instructions: [
                "Remove the zest from the orange using a zester or small-holed grater, then squeeze the juice from the orange. You will need about 1 TBS zest and ½ cup of juice. Combine the juice and zest with the soy sauce, brown sugar, rice vinegar, grated ginger, minced garlic, red pepper flakes, and ½ TBS cornstarch in a small sauce pot. Before placing it over heat, whisk until the cornstarch is fully dissolved. Heat the mixture over medium heat until it begins to simmer, thickens, and turns into a glossy glaze (about 3-5 minutes). Remove from heat and set aside.",
                "Remove any excess fat from the chicken thighs then cut into small 3/4\" pieces.",
                "Combine the egg, 2 TBS cornstarch, a big pinch of salt and pepper in a mixing bowl and whisk until the mixture is smooth + frothy. Add the chicken pieces to the egg mixture and stir to coat.",
                "Set a large skillet over medium-high heat. Once hot, add 2 TBS cooking oil and swirl to coat the bottom of the skillet. Add the chicken, making sure all the pieces are touching the surface and not piled on top of one another. Let the pieces cook until they are golden brown on the bottoms.",
                "Flip the chicken pieces, breaking them apart from one another as you turn them. Let them cook until golden brown on the second side and cooked through (about 5-7 minutes total cooking time).",
                "Turn the heat off under the skillet and pour on the prepared orange sauce. Gently coat the chicken pieces in sauce.",
                "Serve the chicken and sauce over cooked rice, garnished with sliced green onions and any leftover orange zest."
            ]
        },
        {
            slug: "one-pot-chicken-and-rice",
            name: "One Pot Chicken and Rice with Peas and Carrots",
            ingredients: [
                {
                    name: "Boneless, Skinless Chicken Breasts",
                    quantity: 4,
                    extraInstructions: "or 6 chicken thighs, cut into bite-size pieces"
                },
                {
                    name: "Vegetable Oil",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Onion",
                    quantity: 1,
                    extraInstructions: "medium, chopped"
                },
                {
                    name: "Red Pepper Flakes",
                    quantity: 0.25,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Garlic",
                    quantity: 4,
                    extraInstructions: "cloves, minced"
                },
                {
                    name: "Long Grain White Rice",
                    quantity: 2,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Chicken Broth",
                    quantity: 4,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Frozen Peas and Carrots",
                    quantity: 10,
                    quantityUnit: Unit.OZ,
                    extraInstructions: "steamable package, thawed"
                },
                {
                    name: "Shredded Cheese",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Salt and Pepper",
                    extraInstructions: "to taste"
                }
            ],
            instructions: [
                "Pat the chicken dry with paper towels, then season with salt and pepper.",
                "Heat oil in a large dutch oven over medium high heat, until just smoking. Add the chicken and cook until golden.",
                "Remove chicken from the pot, leaving the fat in the pot.",
                "Add the onion, red pepper flakes, and ½ tsp. salt to the fat in the pot and place over medium heat. Cook, scraping up any brown bits, until the onion is softened, about 5 minutes.",
                "Stir in the garlic, and cook until fragrant, about 15 seconds.",
                "Stir in the rice and cook until the edges turn translucent, about 3 minutes.",
                "Stir in the broth and bring to a simmer.",
                "Return the chicken to the pot. Cover, and reduce the heat to low and cook until the rice is done, about 20 minutes.",
                "Add the peas and carrots (if using steamable package, thaw in microwave first).",
                "Stir into the rice and chicken.",
                "Stir in the shredded cheese and let melt for a minute.",
                "Serve."
            ]
        }
    ]
}

export default RECIPES_BOOK2;