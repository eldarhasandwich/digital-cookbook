import { RecipeBookT, Unit } from "../src/types";

const RECIPES: RecipeBookT = {
    recipes: [
        {
            slug: "potato-soup",
            name: "Potato Soup",
            ingredients: [
                {
                    name: "Slices of Bacon",
                    quantity: 6,
                    // quantityUnit: Unit.SLICE,
                    extraInstructions: "Cut into 1 inch pieces",
                },
                {
                    name: "Russet Potato",
                    quantity: 3,
                    quantityUnit: Unit.LB,
                    extraInstructions: "About 5 large potatoes",
                },
                {
                    name: "Salt",
                    quantity: 3.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Sour Cream",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Butter",
                    quantity: 1,
                    quantityUnit: Unit.STICK
                },
                {
                    name: "Milk",
                    quantity: 2.66,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Black Pepper",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Scallion",
                    quantity: 4,
                    extraInstructions: "Thinly sliced",
                },
                {
                    name: "Shredded Cheese",
                    quantity: 0.75,
                    quantityUnit: Unit.CUP
                },
                
            ],
            instructions: [
                "Cook the bacon pieces in a skillet over medium heat until crisp. Transfer to a paper towel to drain.",
                "Peel, rinse, and cut potatoes into thirds. Place in a large pot with water to cover, add 2 teaspoons of salt, and bring to a boil. Reduce heat and simmer until the potatoes are very soft—about 45 minutes.",
                "Drain the potatoes, discarding the water, and return them to the pot. Mash them with a potato masher until smooth.",
                "Add the butter and sour cream and stir until melted.",
                "Add the milk, pepper, and remaining salt and bring the soup back to a simmer.",
                "Serve the soup hot, garnished with the scallions, bacon, and cheese."
            ],
        },
        {
            slug: "hot-dog-sauce",
            name: "Hot Dog Sauce",
            ingredients: [
                {
                    name: "Ground Beef",
                    quantity: 1.25,
                    quantityUnit: Unit.LB
                },
                {
                    name: "Onion",
                    quantity: 1,
                    extraInstructions: "Large, chopped"
                },
                {
                    name: "Sugar",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Chili Powder",
                    quantity: 0.25,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Ketchup",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Water",
                    quantity: 1.5,
                    quantityUnit: Unit.CUP
                }
            ],
            instructions: [
                "Chop onion. Brown hamburger in skillet and mix together. Drain and mix remaining ingredients.",
                "Simmer 1 hour, stirring occasionally.",
                "Serve on hot dogs."
            ],
            notes: "Can be frozen until ready to use."
        },
        {
            slug: "mexican-wedding-cookies",
            name: "Mexican Wedding Cookies",
            ingredients: [
                {
                    name: "Butter",
                    quantity: 1,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Softened"
                },
                {
                    name: "Powdered Sugar",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Vanilla",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Flour",
                    quantity: 2.25,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Salt",
                    quantity: 0.25,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Walnuts",
                    quantity: 0.75,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Chopped"
                },
                {
                    name: "Powdered Sugar",
                    extraInstructions: "For rolling baked cookies"
                }
            ],
            instructions: [
                "Cream together butter and powdered sugar until light and fluffy; stir in vanilla.",
                "Whisk together flour and salt, add gradually to butter mixture; stir in chopped nuts.",
                "Chill dough if it seems too soft.",
                "Form dough into 1 ¼ inch balls and place onto parchment-lined or ungreased cookie sheet.",
                "Bake at 400°F for 10-12 minutes or just until the cookies start to turn light golden brown. Remove from oven and allow to cool slightly.",
                "While still warm (not hot), roll a few cookies at a time in powdered sugar until evenly coated. Cookies may be rolled in powdered sugar once more after completely cooled to room temperature.",
                "Note: Forming into 1-inch balls will increase yield to 48 cookies."
            ],
            notes: "Forming into 1-inch balls will increase yield to 48 cookies."
        },
        {
            slug: "peanut-butter-balls",
            name: "Peanut Butter Balls",
            ingredients: [
                {
                    name: "Peanut Butter",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Salted Butter",
                    quantity: 3,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Powdered Sugar",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Semi-Sweet Chocolate",
                    quantity: 8,
                    quantityUnit: Unit.OZ,
                    extraInstructions: "Or chocolate chips"
                }
            ],
            instructions: [
                "Mix peanut butter and butter together in a mixing bowl. Gradually add in powdered sugar until combined into a soft dough/ball. (You may need to add in powdered sugar, a little at a time, until mixture holds together in a large ball.) Cover bowl, let peanut butter dough sit for about 15 minutes to firm up — cover tightly with plastic, and refrigerate until ready to form into balls.",
                "Shape into 1 inch balls, place on a baking sheet, cover and refrigerate for at least 20 minutes to allow to firm up. Dough balls should hold shape before dipping in chocolate. Add more refrigeration time if needed.",
                "Melt chocolate according to package directions.",
                "Dip peanut butter balls, one at a time, into melted chocolate, allowing excess to drip off. Place on waxed paper lined baking sheet, cover and refrigerate until ready to serve."
            ],
        },
        {
            slug: "brownie-crackle-top-cookies",
            name: "Brownie Crackle Top Cookies",
            ingredients: [
                {
                    name: "All-Purpose Flour",
                    quantity: 1.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Sugar",
                    quantity: 1.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Baking Powder",
                    quantity: 1.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Salt",
                    quantity: 0.75,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Unsalted Butter",
                    quantity: 6,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "Melted and cooled to room temperature"
                },
                {
                    name: "Cocoa Powder",
                    quantity: 0.75,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Ghirardelli preferred"
                },
                {
                    name: "Eggs",
                    quantity: 3,
                    extraInstructions: "Large, at room temperature"
                },
                {
                    name: "Vanilla Extract",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Semisweet Chocolate Chips",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Confectioners Sugar",
                    quantity: 0.75,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "For coating cookies"
                }
            ],
            instructions: [
                "In a large bowl, combine flour, baking powder, and salt until evenly mixed. Set aside.",
                "Scrape the melted butter into a smaller bowl with a spatula and add the cocoa powder. Stir until combined and no lumps remain. Mix the vanilla extract with the eggs, then whisk into cocoa-butter mixture.",
                "Add the wet mixture to the dry mixture and mix thoroughly by hand with a rubber spatula. It may seem as if you need more liquid, but do not add any. Just keep folding and pressing until the mixture comes together. It will eventually reach the consistency of stiff brownie batter. Fold in chocolate chips. Refrigerate dough for 30 minutes to firm up.",
                "Preheat oven to 350° degrees. Line two baking sheets with parchment paper. (Or if you don't line the pans, lightly grease sheets.)",
                "Pour confectioners sugar into a small bowl. Scoop dough by teaspoon, roll into balls, and drop into powdered sugar, rolling around to cover completely. Place on prepared baking sheets 1½ inches apart.",
                "Bake cookies for 12–15 minutes. The cookies will spread, puff a bit, and form cracks. The longer you cook them, the more crispy they will become. Let cool 10 minutes on the cookie sheets before using a spatula to remove to racks and cool completely. Store in a covered container."
            ],
            notes: "Yield: about 30 cookies, depending on size"
        },
        {
            slug: "pico-de-gallo",
            name: "Pico de Gallo",
            ingredients: [
                {
                    name: "White Onion",
                    quantity: 0.75,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Minced (about ½ medium)"
                },
                {
                    name: "Tomatoes",
                    quantity: 1.5,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Seeded and finely chopped (about 4 large)"
                },
                {
                    name: "Serrano Chiles",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "Stemmed, seeded and minced (about 2 medium chiles)"
                },
                {
                    name: "Fresh Cilantro",
                    quantity: 0.25,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Minced"
                },
                {
                    name: "Lime Juice",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "Freshly squeezed (1 medium lime)"
                },
                {
                    name: "Salt",
                    extraInstructions: "To taste"
                }
            ],
            instructions: [
                "Combine all ingredients in a small bowl.",
                "Season well with salt."
            ],
            notes: "This salsa will last for up to 5 days refrigerated in a covered bowl."
        },
        {
            slug: "chicken-pot-pie",
            name: "Chicken Pot Pie",
            ingredients: [
                {
                    name: "Chicken Breast",
                    quantity: 1,
                    quantityUnit: Unit.LB,
                    extraInstructions: "Skinless, boneless, cubed"
                },
                {
                    name: "Carrots",
                    quantity: 1,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Sliced"
                },
                {
                    name: "Green Peas",
                    quantity: 1,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Frozen"
                },
                {
                    name: "Celery",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Sliced"
                },
                {
                    name: "Butter",
                    quantity: 0.33,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Onion",
                    quantity: 0.33,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Chopped"
                },
                {
                    name: "All-Purpose Flour",
                    quantity: 0.33,
                    quantityUnit: Unit.CUP
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
                    name: "Celery Seed",
                    quantity: 0.25,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Chicken Broth",
                    quantity: 1.75,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Milk",
                    quantity: 0.67,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Unbaked Pie Crusts",
                    quantity: 2,
                    extraInstructions: "9-inch"
                }
            ],
            instructions: [
                "Preheat oven to 425°.",
                "In a saucepan, combine chicken, carrots, peas, and celery. Add water to cover and boil for 15 minutes; remove from heat, drain and set aside.",
                "In a saucepan over medium heat, cook onion in butter until soft and translucent. Stir in flour, salt, pepper, and celery seed. Slowly stir in chicken broth and milk. Simmer over med-low heat until thick. Remove from heat and set aside.",
                "Place the chicken mixture in bottom of pie crust. Pour hot liquid mixture over chicken. Cover with top crust, seal edges, and cut away excess dough. Make several small slits in the top to allow steam to escape.",
                "Bake in the preheated oven for 30 to 35 minutes, or until the pastry is a golden brown and filling is bubbly. Cool for 10 minutes before serving."
            ]
        },
        {
            slug: "homemade-coconut-bonbons",
            name: "Homemade Coconut Bonbons",
            ingredients: [
                {
                    name: "Sweetened Shredded Coconut",
                    quantity: 2.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Chocolate Chips",
                    quantity: 24,
                    quantityUnit: Unit.OZ,
                    extraInstructions: "Semi-sweet (2-12 oz bags)"
                },
                {
                    name: "Sweetened Condensed Milk",
                    quantity: 1,
                    extraInstructions: "1 can"
                },
                {
                    name: "Vanilla",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Walnuts",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Chopped (optional)"
                },
                {
                    name: "Butter",
                    quantity: 2,
                    quantityUnit: Unit.STICK,
                    extraInstructions: "At room temperature"
                },
                {
                    name: "Powdered Sugar",
                    quantity: 2,
                    quantityUnit: Unit.LB
                },
                {
                    name: "Shortening, Coconut Oil, or Vegetable Oil",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "1-2 tablespoons"
                }
            ],
            instructions: [
                "Mix butter, milk, powdered sugar, vanilla, and coconut oil.",
                "In a large bowl blend together with a mixer: 1 stick of butter with milk + the entire bag of powdered sugar. Mix thoroughly.",
                "Add the coconut (and nuts if needed) to the powdered sugar mixture. Mix well with hand or wooden spoon. Place bowl in refrigerator for at least one hour.",
                "Form into balls, about 1½ inches, or size of walnuts. Put on a plate in refrigerator for 4 hours to harden.",
                "Dip in melted chocolate.",
                "Use toothpick to dip bonbons in chocolate and place on waxed paper, allow to set."
            ]
        },
        {
            slug: "american-goulash",
            name: "American Goulash",
            ingredients: [
                {
                    name: "Ground Beef",
                    quantity: 2,
                    quantityUnit: Unit.LB
                },
                {
                    name: "Elbow Macaroni",
                    quantity: 1,
                    quantityUnit: Unit.LB,
                    extraInstructions: "4 cups dry pasta = 8 cups cooked pasta"
                },
                {
                    name: "Tomato Sauce",
                    quantity: 2,
                    extraInstructions: "15 oz cans"
                },
                {
                    name: "Diced Tomatoes",
                    quantity: 2,
                    extraInstructions: "14.5 oz cans"
                },
                {
                    name: "White Onion",
                    quantity: 1,
                    extraInstructions: "Chopped"
                },
                {
                    name: "Garlic",
                    quantity: 3,
                    extraInstructions: "Cloves, minced"
                },
                {
                    name: "Water",
                    quantity: 0.25,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Dried Oregano",
                    quantity: 2,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Dried Basil",
                    quantity: 2,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Bay Leaf",
                    quantity: 1
                },
                {
                    name: "Salt",
                    extraInstructions: "To taste"
                },
                {
                    name: "Black Pepper",
                    extraInstructions: "To taste"
                },
                {
                    name: "Heavy Cream",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Optional"
                }
            ],
            instructions: [
                "Bring a large pot of salted water to a boil and cook until just al dente. Drain and set aside.",
                "In a large pot or skillet, cook beef over medium-high heat until browned, using your spoon to break it down to smaller pieces.",
                "Add onion and garlic and cook until softened, 5 to 6 minutes. Drain off excess fat.",
                "Pour in pasta, water, tomato sauce, diced tomatoes, bay leaf, oregano, and basil, and stir together.",
                "Lower heat and let simmer for 6-8 minutes until pasta is al dente and sauce has reduced.",
                "Remove bay leaf and add heavy cream (optional). Serve."
            ]
        },
        {
            slug: "seven-day-diet-soup",
            name: "7 Day Diet Soup (Wonder Soup)",
            ingredients: [
                {
                    name: "Cabbage",
                    quantity: 0.5,
                    extraInstructions: "Head, chopped"
                },
                {
                    name: "Celery",
                    quantity: 1,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Diced"
                },
                {
                    name: "White or Yellow Onion",
                    quantity: 1,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Diced"
                },
                {
                    name: "Carrots",
                    quantity: 1,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Diced"
                },
                {
                    name: "Green Bell Pepper",
                    quantity: 1,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Diced"
                },
                {
                    name: "Garlic",
                    quantity: 2.5,
                    extraInstructions: "Cloves, minced"
                },
                {
                    name: "Chicken Broth",
                    quantity: 4,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Diced Tomatoes",
                    quantity: 1,
                    extraInstructions: "14 oz can"
                },
                {
                    name: "Dried Oregano",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Dried Basil",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Red Pepper Flakes",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Cayenne Pepper",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Salt",
                    extraInstructions: "To taste"
                },
                {
                    name: "Black Pepper",
                    extraInstructions: "To taste"
                },
                {
                    name: "Olive Oil",
                    quantity: 2.5,
                    quantityUnit: Unit.TABLESPOON
                }
            ],
            instructions: [
                "Heat 2-3 tablespoons olive oil in large pot",
                "Add celery, carrots, onion and bell pepper.",
                "Sauté until slightly tender, stir in garlic, pour in chicken broth, stir in tomatoes and cabbage",
                "Bring to a boil and then reduce heat. Cook until cabbage is tender.",
                "Stir in oregano, basil, red pepper flakes, black pepper and salt (if using). Taste broth and adjust seasoning if needed."
            ]
        },
        {
            slug: "coconut-cream-pie",
            name: "Coconut Cream Pie",
            ingredients: [
                {
                    name: "Sugar",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Butter",
                    quantity: 3,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Cornstarch",
                    quantity: 0.25,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Vanilla Extract",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Salt",
                    quantity: 0.25,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Flaked Coconut",
                    quantity: 1,
                    extraInstructions: "3.5 oz can"
                },
                {
                    name: "Milk",
                    quantity: 3,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Eggs",
                    quantity: 4,
                    extraInstructions: "Separated, yolks for filling"
                },
                {
                    name: "Pie Crust",
                    quantity: 1,
                    extraInstructions: "9 inch, baked"
                },
                {
                    name: "Whipped Cream",
                    extraInstructions: "For topping (optional, instead of meringue)"
                }
            ],
            instructions: [
                "Separate the egg yolk from the egg whites. Reserve the egg whites for meringue topping.",
                "Combine sugar, cornstarch, salt and milk. Cook mixture over medium to low heat, stirring constantly. After mixture bubbles up and thickens up, cook an additional 2 minutes. Remove from heat.",
                "Beat egg yolk slightly. Gradually stir 1 cup of the hot mixture into yolks, being careful not to scramble the yolks. Return the egg mixture to saucepan, bring to a gentle boil. Cook and stir 2 minutes more. Remove from heat.",
                "Add butter and vanilla, stir until butter is melted. Add the coconut and mix. Pour the mixture into a baked 9 inch pie crust. Allow pie mixture to cool."
            ]
        },
        {
            slug: "meringue",
            name: "Meringue",
            ingredients: [
                {
                    name: "Egg Whites",
                    quantity: 4,
                    extraInstructions: "At room temperature"
                },
                {
                    name: "Vanilla Extract",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Sugar",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Cream of Tartar",
                    quantity: 0.25,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Toasted Coconut Flakes"
                }
            ],
            instructions: [
                "Beat egg whites and cream of tartar with an electric mixer at high speed. Beat until foamy.",
                "Gradually add sugar, 1 tbsp. at a time, until stiff peaks form and the sugar is dissolved (2-4 minutes).",
                "Beat in vanilla and spread meringue over hot coconut filling, sealing at the edge of the pastry.",
                "Sprinkle extra coconut on top of meringue.",
                "Bake at 350° for 12 to 15 minutes or until meringue is golden.",
                "Allow pie to cool completely before cutting."
            ]
        },
        {
            slug: "peanut-butter-cake",
            name: "Peanut Butter Cake with Peanut Butter Frosting",
            ingredients: [
                {
                    name: "All Purpose Flour",
                    quantity: 2.75,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Light Brown Sugar",
                    quantity: 2,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Packed"
                },
                {
                    name: "Peanut Butter",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Butter",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "At room temperature"
                },
                {
                    name: "Baking Powder",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Baking Soda",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Milk",
                    quantity: 0.25,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Vanilla Extract",
                    quantity: 2,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Eggs",
                    quantity: 3
                },
                {
                    name: "Mini Chocolate Chips",
                    quantity: 1,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "For topping"
                }
            ],
            instructions: [
                "Preheat oven to 350°, grease and flour a 10X15 cake pan.",
                "In a large bowl mix the flour, brown sugar, peanut butter, and butter with an electric mixer.",
                "Blend at low speed until crumbly. Add the baking powder, baking soda, milk, vanilla, and eggs and blend at low speed until everything is wet, then beat at medium speed for 3 minutes.",
                "Pour into the prepared cake pan and bake in the middle of your oven for 35 to 40 minutes or until the toothpick test comes out clean.",
                "Let the cake cool in the pan for 10 minutes, then spread the frosting on the hot cake and sprinkle 1 cup of mini chocolate chips over cake."
            ],
            notes: "Recipe can be doubled."
        },
        {
            slug: "peanut-butter-frosting",
            name: "Peanut Butter Honey Frosting",
            ingredients: [
                {
                    name: "Peanut Butter",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Honey",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Vanilla Extract",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Powdered Sugar",
                    quantity: 2,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Milk",
                    quantity: 4,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "4 to 5 tablespoons"
                }
            ],
            instructions: [
                "Warm the peanut butter and honey in the Microwave just until edges soft and easy to stir.",
                "Add the vanilla, powdered sugar, and milk and beat until smooth.",
                "Spread over the hot cake and sprinkle with 1 cup of mini chocolate chips."
            ]
        },
        {
            slug: "easy-shepherds-pie",
            name: "Easy Shepherd's Pie",
            ingredients: [
                {
                    name: "Ground Beef",
                    quantity: 1.5,
                    quantityUnit: Unit.LB
                },
                {
                    name: "Onion",
                    quantity: 1,
                    extraInstructions: "Chopped"
                },
                {
                    name: "Mixed Vegetables",
                    quantity: 2,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Chopped carrot, peas, corn"
                },
                {
                    name: "Potatoes",
                    quantity: 3,
                    extraInstructions: "Large"
                },
                {
                    name: "Butter",
                    quantity: 1,
                    quantityUnit: Unit.STICK
                },
                {
                    name: "Beef Broth",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "More may be needed to keep moist"
                },
                {
                    name: "Worcestershire Sauce",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Salt",
                    extraInstructions: "To taste"
                },
                {
                    name: "Black Pepper",
                    extraInstructions: "To taste"
                }
            ],
            instructions: [
                "Peel and quarter potatoes, boil in salted water until tender (about 20 minutes)",
                "While the potatoes are cooking, melt 1/2 stick of butter in large frying pan.",
                "Sauté onions in butter until tender over medium heat. Add carrots with onions and add peas and corn at the end of onions and carrot cooking.",
                "Add ground beef and cook until no longer pink. Add salt and pepper and Worcestershire sauce. Add beef broth and cook uncovered, over low heat for 10 minutes, adding more beef broth to keep moist, if necessary.",
                "Mash potatoes with the other half of butter stick, season to taste.",
                "Place meat mixture in baking dish (9X9) spread mashed potatoes over meat mixture.",
                "Cook in a 400° oven until bubbly & cook brown. About 30 minutes."
            ]
        },
        {
            slug: "banana-nut-bread",
            name: "Banana Nut Bread with Bisquick",
            ingredients: [
                {
                    name: "Sugar",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Egg",
                    quantity: 1
                },
                {
                    name: "Milk",
                    quantity: 1.25,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Bisquick",
                    quantity: 3,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Nuts",
                    quantity: 1.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Bananas",
                    quantity: 3,
                    extraInstructions: "Mashed"
                }
            ],
            instructions: [
                "Mix the first 4 ingredients (sugar, egg, milk, Bisquick).",
                "Beat hard for 30 seconds.",
                "Stir in nuts and bananas.",
                "Grease a long pan and bake at 350° for 45-55 minutes.",
                "Cool before slicing."
            ],
            notes: "For fruit nut bread variation: Use ¾ cup sugar, ½ cup orange juice instead of milk, and add 1 cup of raisins or other dried fruit."
        },
        {
            slug: "chicken-and-rice-bake",
            name: "Chicken and Rice Bake",
            ingredients: [
                {
                    name: "Cream of Mushroom Soup",
                    quantity: 1,
                    extraInstructions: "1 can"
                },
                {
                    name: "Water",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Rice",
                    quantity: 0.75,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Paprika",
                    quantity: 0.25,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Black Pepper",
                    quantity: 0.25,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Chicken",
                    quantity: 1.25,
                    quantityUnit: Unit.LB,
                    extraInstructions: "Boneless, skinless"
                },
                {
                    name: "Additional Paprika",
                    extraInstructions: "For sprinkling"
                },
                {
                    name: "Additional Black Pepper",
                    extraInstructions: "For sprinkling"
                }
            ],
            instructions: [
                "Stir the soup, water, rice, paprika, and black pepper in an 11 x 8 x 2 inch baking dish. Top with chicken. Sprinkle with additional paprika and black pepper. Cover dish.",
                "Bake at 375° for 45 minutes or until chicken is cooked through and rice is tender. Let stand for 10 minutes. Stir the rice before serving."
            ]
        },
        {
            slug: "classic-waldorf-salad",
            name: "Classic Waldorf Salad",
            ingredients: [
                {
                    name: "Apples",
                    quantity: 3,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Chopped"
                },
                {
                    name: "Miniature Marshmallows",
                    quantity: 2,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Celery",
                    quantity: 1,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Thinly sliced"
                },
                {
                    name: "Walnuts",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Chopped"
                },
                {
                    name: "Miracle Whip",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP
                }
            ],
            instructions: [
                "Mix all ingredients until well blended.",
                "Serve immediately or refrigerate until ready to serve."
            ]
        },
        {
            slug: "chicken-waldorf-salad",
            name: "Chicken Waldorf Salad",
            ingredients: [
                {
                    name: "Chicken",
                    quantity: 2,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Coarsely chopped"
                },
                {
                    name: "Apple",
                    quantity: 1,
                    extraInstructions: "Small, coarsely chopped"
                },
                {
                    name: "Celery",
                    quantity: 1,
                    extraInstructions: "Stalk, diced"
                },
                {
                    name: "Miracle Whip",
                    quantity: 0.33,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Walnuts",
                    quantity: 0.25,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Chopped"
                },
                {
                    name: "Raisins",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON
                }
            ],
            instructions: [
                "Combine all ingredients.",
                "Refrigerate for 1 hour before serving."
            ]
        },
        {
            slug: "watergate-salad",
            name: "Watergate Salad",
            ingredients: [
                {
                    name: "Instant Pistachio Pudding Mix",
                    quantity: 1,
                    extraInstructions: "3.4 oz box"
                },
                {
                    name: "Crushed Pineapple",
                    quantity: 1,
                    extraInstructions: "8 oz can, with juice"
                },
                {
                    name: "Miniature Marshmallows",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Walnuts",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Chopped"
                },
                {
                    name: "Frozen Whipped Topping",
                    quantity: 0.5,
                    extraInstructions: "8 oz container, thawed"
                }
            ],
            instructions: [
                "In a large bowl mix together pudding mix, pineapple with juice, marshmallows and nuts.",
                "Fold in whipped topping.",
                "Chill before serving."
            ]
        },
        {
            slug: "broccoli-grape-salad",
            name: "Broccoli Grape Salad",
            ingredients: [
                {
                    name: "Bacon",
                    quantity: 1,
                    quantityUnit: Unit.LB,
                    extraInstructions: "Cooked until crisp"
                },
                {
                    name: "Mayonnaise",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Grapes",
                    quantity: 1,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Red and/or green grapes or raisins"
                },
                {
                    name: "Red Onion",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Finely chopped"
                },
                {
                    name: "Sugar",
                    quantity: 0.25,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Fresh Broccoli Florets",
                    quantity: 2,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "1 Large head"
                }
            ],
            instructions: [
                "Cook bacon until crisp; drain on paper towel and set aside.",
                "In a large bowl, stir together mayonnaise, grapes, red onion, and sugar.",
                "Add broccoli and ⅔ of bacon; stir to coat.",
                "Reserve remaining bacon in fridge.",
                "Chill the salad, covered, for at least 1 hour or up to 24 hours.",
                "Sprinkle reserved bacon over salad before serving."
            ]
        },
        {
            slug: "gingered-beef-broccoli-salad",
            name: "Gingered Beef & Broccoli Salad",
            ingredients: [
                {
                    name: "Beef Sirloin Steak",
                    quantity: 12,
                    quantityUnit: Unit.OZ,
                    extraInstructions: "Trimmed of fat"
                },
                {
                    name: "Ginger Vinaigrette Salad Dressing",
                    quantity: 0.33,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Bottled"
                },
                {
                    name: "Broccoli Florets",
                    quantity: 3,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Mixed Spring or Baby Salad Greens",
                    quantity: 8,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Red Sweet Pepper",
                    quantity: 1,
                    extraInstructions: "Stemmed and seeded"
                }
            ],
            instructions: [
                "Trim fat from beef. Thinly slice beef across the grain into bite size strips; set aside.",
                "In a large skillet or wok, heat 2 tablespoons of the salad dressing over medium-high heat.",
                "Add beef to skillet or wok. Cook and stir for 3 minutes or until beef is slightly pink in center.",
                "Remove beef and broccoli from skillet.",
                "Remove stems and seeds from sweet pepper. Cut into bite size strips.",
                "In a large bowl combine greens, sweet pepper, beef, and broccoli.",
                "Drizzle remaining salad dressing; toss to coat."
            ]
        },
        {
            slug: "spicy-apple-glazed-meatballs",
            name: "Spicy Apple Glazed Meatballs",
            ingredients: [
                {
                    name: "Egg",
                    quantity: 1
                },
                {
                    name: "Milk",
                    quantity: 0.25,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Bread",
                    quantity: 2,
                    extraInstructions: "White or wheat, torn"
                },
                {
                    name: "Ground Beef",
                    quantity: 3,
                    quantityUnit: Unit.LB,
                    extraInstructions: "85% lean"
                },
                {
                    name: "Garlic",
                    quantity: 4,
                    extraInstructions: "Cloves, minced"
                },
                {
                    name: "Black Pepper",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Salt",
                    quantity: 0.25,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Cayenne Pepper",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Vegetable Oil",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                }
            ],
            additionalIngredientGroups: [
                {
                    name: "Glaze",
                    ingredients: [
                        {
                            name: "Apple Juice",
                            quantity: 1,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Soy Sauce",
                            quantity: 0.25,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Brown Sugar",
                            quantity: 3,
                            quantityUnit: Unit.TABLESPOON,
                            extraInstructions: "Packed"
                        },
                        {
                            name: "Cornstarch",
                            quantity: 1.5,
                            quantityUnit: Unit.TEASPOON
                        },
                        {
                            name: "Ground Ginger",
                            quantity: 1,
                            quantityUnit: Unit.TEASPOON
                        },
                        {
                            name: "Cayenne Pepper",
                            quantity: 0.25,
                            quantityUnit: Unit.TEASPOON
                        },
                        {
                            name: "Green Onions",
                            quantity: 6,
                            extraInstructions: "Chopped"
                        }
                    ]
                }
            ],
            instructions: [
                "In a large bowl whisk together egg and milk.",
                "Add bread, let stand 10 minutes, just until the milk is absorbed.",
                "Add beef, garlic, pepper, salt and cayenne pepper. Mix thoroughly.",
                "Shape into 48 1-inch balls.",
                "Heat oil over medium heat. Cook meatballs, half at a time, about 6 minutes per batch, until brown and crusty outside and no longer pink inside.",
                "Transfer to covered dish to keep warm. Drain fat and clean skillet.",
                "For apple glaze: In a small bowl, combine apple juice, soy sauce, brown sugar, cornstarch, ginger, and cayenne pepper.",
                "In same skillet as meatballs were cooked, cook and stir juice mixture until thickened and bubbly (at full boil).",
                "Cook and stir 2 minutes more.",
                "Return meatballs to skillet; heat through and coat with sauce.",
                "Transfer glazed meatballs to serving dish and top with green onions."
            ]
        },
        {
            slug: "pineapple-orange-cake",
            name: "Pineapple Orange Cake",
            ingredients: [
                {
                    name: "Yellow Cake Mix",
                    quantity: 1,
                    extraInstructions: "1 package"
                },
                {
                    name: "Mandarin Oranges",
                    quantity: 1,
                    extraInstructions: "11 oz can, undrained"
                },
                {
                    name: "Egg Whites",
                    quantity: 4
                },
                {
                    name: "Unsweetened Applesauce",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP
                }
            ],
            additionalIngredientGroups: [
                {
                    name: "Topping",
                    ingredients: [
                        {
                            name: "Crushed Pineapple",
                            quantity: 1,
                            extraInstructions: "20 oz can, undrained"
                        },
                        {
                            name: "Instant Pudding Mix",
                            quantity: 1,
                            extraInstructions: "3.5 oz package"
                        },
                        {
                            name: "Cool Whip",
                            quantity: 1,
                            extraInstructions: "8 oz carton"
                        }
                    ]
                }
            ],
            instructions: [
                "In a large bowl, beat the cake mix, oranges, egg whites and applesauce on low speed for 2 minutes.",
                "Pour into a 9 x 13 cake pan, coated with cooking spray.",
                "Bake at 350° for 25-30 minutes or until a toothpick inserted near the center comes out clean.",
                "Cool on wire rack.",
                "In a bowl, combine pineapple and pudding mix.",
                "Fold in whipped topping just until blended.",
                "Spread over cake.",
                "Refrigerate for at least one hour before serving."
            ]
        },
        {
            slug: "earthquake-cake",
            name: "Earthquake Cake",
            ingredients: [
                {
                    name: "German Chocolate Cake Mix",
                    quantity: 1,
                    extraInstructions: "1 package"
                },
                {
                    name: "Cream Cheese",
                    quantity: 8,
                    quantityUnit: Unit.OZ
                },
                {
                    name: "Sweetened Coconut",
                    quantity: 0.67,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Chocolate Chips",
                    quantity: 0.33,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Pecans",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Chopped (optional)"
                },
                {
                    name: "Vegetable Oil",
                    quantity: 0.33,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Eggs",
                    quantity: 3
                },
                {
                    name: "Water",
                    quantity: 1.33,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Butter",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Melted"
                },
                {
                    name: "Powdered Sugar",
                    quantity: 3.75,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "About 1 lb"
                }
            ],
            instructions: [
                "Preheat oven to 350°.",
                "Grease a 9x13\" cake pan.",
                "Sprinkle coconut, chocolate chips, and pecans in the pan.",
                "Mix cake mix, oil, eggs, and water together.",
                "Pour cake batter on top of coconut, chips & nuts.",
                "Melt butter and cream cheese together.",
                "Beat in powdered sugar until smooth.",
                "Spread on unbaked cake or drop by spoonfuls, and swirl into batter with a knife.",
                "Bake at 350° for 40-45 minutes.",
                "It is done when it doesn't wobble in pan if you shake it."
            ]
        },
        {
            slug: "banana-split-dump-cake",
            name: "Banana Split Dump Cake",
            ingredients: [
                {
                    name: "Strawberry Pie Filling",
                    quantity: 1,
                    extraInstructions: "21 oz can"
                },
                {
                    name: "Crushed Pineapple",
                    quantity: 1,
                    extraInstructions: "20 oz can, undrained"
                },
                {
                    name: "White Cherry Chip Cake Mix",
                    quantity: 1,
                    extraInstructions: "Dry mix"
                },
                {
                    name: "Margarine",
                    quantity: 1,
                    quantityUnit: Unit.STICK,
                    extraInstructions: "Cut in pieces"
                },
                {
                    name: "Coconut",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Crushed Nuts",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP
                }
            ],
            additionalIngredientGroups: [
                {
                    name: "Topping",
                    ingredients: [
                        {
                            name: "Bananas",
                            extraInstructions: "Sliced"
                        },
                        {
                            name: "Whipped Cream"
                        },
                        {
                            name: "Chocolate Syrup"
                        }
                    ]
                }
            ],
            instructions: [
                "Spread strawberry pie filling in greased 9x13 tinfoil pan.",
                "Spoon the pineapples over the dry cake mix then the margarine.",
                "Top with coconut and crushed nuts.",
                "Bake at 325° for 60-75 minutes. Serve warm or cold.",
                "Before serving, top individual pieces with sliced bananas, whipped cream, and chocolate syrup."
            ]
        },
        {
            slug: "caramel-icing",
            name: "Caramel Icing",
            ingredients: [
                {
                    name: "Dark Brown Sugar",
                    quantity: 1,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Packed"
                },
                {
                    name: "Milk",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Butter",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Salt",
                    quantity: 0.25,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Powdered Sugar",
                    quantity: 1.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Vanilla",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                }
            ],
            instructions: [
                "Combine brown sugar, milk, butter, and salt in a medium saucepan; bring to a boil over medium-high heat, stirring constantly.",
                "Reduce heat and simmer until slightly thick, about 5 minutes, stirring occasionally.",
                "Remove from heat.",
                "Add the powdered sugar and vanilla; beat with a mixer until smooth and slightly warm.",
                "Cool 5 minutes.",
                "Icing will thicken as it cools."
            ]
        },
        {
            slug: "chicken-salad-with-grapes",
            name: "Chicken Salad with Grapes",
            ingredients: [
                {
                    name: "Chicken",
                    quantity: 1,
                    quantityUnit: Unit.LB,
                    extraInstructions: "Boiled, cut into ½ inch cubes"
                },
                {
                    name: "Celery",
                    quantity: 1,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Chopped"
                },
                {
                    name: "Red Grapes",
                    quantity: 1,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Cut in half"
                },
                {
                    name: "Dried Cherries",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Walnuts",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Chopped"
                },
                {
                    name: "Mayonnaise",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Salt",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Black Pepper",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON,
                    extraInstructions: "Ground"
                },
                {
                    name: "Celery Leaves",
                    extraInstructions: "Chopped (optional)"
                }
            ],
            instructions: [
                "Add chopped chicken to a large bowl along with celery, grapes, dried cherries, nuts, mayonnaise, salt, pepper.",
                "If using chopped celery leaves, add these as well.",
                "Stir together until just combined."
            ]
        },
        {
            slug: "fried-cabbage-with-sausage",
            name: "Fried Cabbage with Sausage",
            ingredients: [
                {
                    name: "Butter",
                    quantity: 1,
                    quantityUnit: Unit.STICK
                },
                {
                    name: "Cabbage",
                    quantity: 1,
                    extraInstructions: "Small head, chopped"
                },
                {
                    name: "Onion",
                    quantity: 1,
                    extraInstructions: "Small, chopped"
                },
                {
                    name: "Smoked Sausage",
                    quantity: 1,
                    quantityUnit: Unit.LB,
                    extraInstructions: "Sliced into round pieces"
                },
                {
                    name: "Diced Tomatoes",
                    quantity: 1,
                    extraInstructions: "15 oz can"
                },
                {
                    name: "Salt",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Black Pepper",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                }
            ],
            instructions: [
                "Melt butter in skillet, add cabbage and onion and cook on medium high for about 5 minutes, stirring to keep from sticking.",
                "Add remaining ingredients, cover and simmer for 20 to 25 minutes."
            ]
        },
        {
            slug: "smothered-pork-chops",
            name: "Smothered Pork Chops",
            ingredients: [
                {
                    name: "Rice",
                    quantity: 1,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Uncooked"
                },
                {
                    name: "Olive Oil",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Garlic",
                    quantity: 2,
                    extraInstructions: "Cloves, minced"
                },
                {
                    name: "Pork Chops",
                    quantity: 4.5,
                    extraInstructions: "About 4-5 chops"
                },
                {
                    name: "Salt",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Black Pepper",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "French Onion Soup",
                    quantity: 1,
                    extraInstructions: "1 can"
                },
                {
                    name: "Cornstarch",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON
                }
            ],
            instructions: [
                "Make rice as directed on package.",
                "Heat oil in skillet, until hot. Cook garlic and pork chops in oil, until pork chops are browned on both sides, sprinkle with salt and pepper.",
                "In small bowl mix soup and cornstarch. Pour over pork chops, heat to boiling.",
                "Reduce heat, cover and cook until pork chops are no longer pink and meat thermometers reads 160°.",
                "Serve over rice or use rice as side dish."
            ]
        },
        {
            slug: "betty-crocker-brown-sugar-cookies",
            name: "Betty Crocker Brown Sugar Cookies",
            ingredients: [
                {
                    name: "Shortening",
                    quantity: 0.67,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Butter or Margarine",
                    quantity: 0.67,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Softened"
                },
                {
                    name: "Granulated Sugar",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Brown Sugar",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Eggs",
                    quantity: 2
                },
                {
                    name: "Vanilla",
                    quantity: 2,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Self Rising Flour",
                    quantity: 3.25,
                    quantityUnit: Unit.CUP
                }
            ],
            instructions: [
                "Mix shortening, butter, sugars, eggs, and vanilla thoroughly.",
                "Stir in flour.",
                "Shape dough into ball until slightly pressed flakes, pressing to make dough compact.",
                "Cut dough in 2 large shaped balls.",
                "Roll into table 2 inches in diameter and about 8 inches long by gently rolling dough back and forth on floured-board.",
                "Roll dough in plastic wrap and twist ends tightly.",
                "Dough can be refrigerated up to 1 month or frozen up to 3 months.",
                "Heat oven to 375°.",
                "Cut into 1/4-inch slices. You don't need to thaw dough before cutting.",
                "Place slices about 2 inches apart on ungreased baking sheet.",
                "Bake 9-11 minutes."
            ],
            notes: "Makes 5 1/2 dozen cookies.\n\nVariations:\n- Chocolate Chip: Add one cup semi-sweet chocolate chips and one cup nuts with the flour.\n- Oatmeal - Coconut: Reduce flour to 3 3/4 cups. Add 1 cup flaked coconut and 1 cup quick-cooking oats with the flour.\n- Peanut Butter: Add 1 cup of peanut butter or chunky peanut butter with the shortening.\n- Chocolate Fruit: Add 1/2 cup chopped nuts and 1/2 cup cocoa with the flour.\n- Fruit Slices: Add 1 cup whole candied cherries, 1/2 cup chopped nuts, and one cup cut up dried candied fruit with the flour."
        },
        {
            slug: "barley-and-beef-soup",
            name: "Barley and Beef Soup",
            ingredients: [
                {
                    name: "Onion",
                    quantity: 2,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Chopped"
                },
                {
                    name: "Chuck Steak",
                    quantity: 1,
                    quantityUnit: Unit.LB,
                    extraInstructions: "Cut into ½\" cubes"
                },
                {
                    name: "Carrots",
                    quantity: 1.5,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Chopped"
                },
                {
                    name: "Celery",
                    quantity: 1,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Chopped (about 4 stalks)"
                },
                {
                    name: "Garlic",
                    quantity: 5,
                    extraInstructions: "Cloves, minced"
                },
                {
                    name: "Pearl Barley",
                    quantity: 1,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Uncooked"
                },
                {
                    name: "Beef Broth",
                    quantity: 5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Water",
                    quantity: 2,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Tomato Puree",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "No-salt added"
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
                    name: "Bay Leaves",
                    quantity: 2
                }
            ],
            instructions: [
                "Coat large Dutch oven with cooking spray; add chopped onions and beef to pan.",
                "Cook until onion is tender and beef is browned, stirring occasionally.",
                "Add chopped carrots and celery; stirring occasionally.",
                "Stir in garlic; cook 30 seconds.",
                "Stir in barley and remaining ingredients and bring to a boil.",
                "Cover and reduce heat; simmer for 40 minutes or until the barley is done and vegetables are tender.",
                "Discard bay leaves."
            ]
        },
        {
            slug: "creamy-spaghetti",
            name: "Creamy Spaghetti",
            ingredients: [
                {
                    name: "Spaghetti",
                    quantity: 12,
                    quantityUnit: Unit.OZ
                },
                {
                    name: "Garlic",
                    quantity: 3,
                    extraInstructions: "Cloves, minced"
                },
                {
                    name: "Heavy Cream",
                    quantity: 0.75,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Italian Blend Cheese",
                    quantity: 0.75,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Salt",
                    extraInstructions: "To taste"
                },
                {
                    name: "Black Pepper",
                    extraInstructions: "To taste"
                },
                {
                    name: "Parsley",
                    quantity: 3,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Olive Oil",
                    extraInstructions: "For cooking"
                }
            ],
            instructions: [
                "Cook spaghetti in salted water according to package instructions.",
                "Drain pasta, reserving 1 cup of pasta water.",
                "In a large skillet, heat oil over medium heat and cook garlic for 1 minute.",
                "Add cream and 1/2 cup of reserved pasta water.",
                "Add cooked spaghetti and toss until noodles are coated, allowing to simmer.",
                "Remove from heat and add cheese.",
                "Toss with additional pasta water until sauce reaches desired consistency.",
                "Season with salt, pepper, and parsley.",
                "Serve immediately."
            ]
        },
        {
            slug: "sliced-baked-potatoes",
            name: "Sliced Baked Potatoes",
            ingredients: [
                {
                    name: "Potatoes",
                    extraInstructions: "Unpeeled, sliced to desired thickness"
                },
                {
                    name: "Butter",
                    extraInstructions: "For brushing"
                },
                {
                    name: "Bacon",
                    extraInstructions: "Cooked and crumbled"
                },
                {
                    name: "Cheese",
                    extraInstructions: "Grated"
                },
                {
                    name: "Chives",
                    extraInstructions: "Chopped"
                },
                {
                    name: "Sour Cream",
                    extraInstructions: "For topping"
                }
            ],
            instructions: [
                "Preheat oven to 400°.",
                "Slice unpeeled potatoes to desired thickness.",
                "Brush both sides with butter and place them on a cookie sheet.",
                "Bake for 30 to 40 minutes or until lightly browned on both sides, turning once.",
                "When potatoes are ready, top with bacon, cheese, and chives.",
                "Continue baking until cheese has melted.",
                "Add a dollop of sour cream when done."
            ]
        },
        {
            slug: "spinach-artichoke-dip",
            name: "Spinach Artichoke Dip",
            ingredients: [
                {
                    name: "Olive Oil",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Garlic",
                    quantity: 2,
                    extraInstructions: "Cloves, minced"
                },
                {
                    name: "Artichoke Hearts",
                    quantity: 12,
                    quantityUnit: Unit.OZ,
                    extraInstructions: "Drained and chopped"
                },
                {
                    name: "Cheddar Cheese",
                    quantity: 0.5,
                    quantityUnit: Unit.LB,
                    extraInstructions: "Cubed"
                },
                {
                    name: "Frozen Spinach",
                    quantity: 6,
                    quantityUnit: Unit.OZ,
                    extraInstructions: "Thawed and liquid pressed out"
                },
                {
                    name: "Sour Cream",
                    quantity: 8,
                    quantityUnit: Unit.OZ
                },
                {
                    name: "Cream Cheese",
                    quantity: 8,
                    quantityUnit: Unit.OZ
                },
                {
                    name: "Parmesan Cheese",
                    quantity: 4,
                    quantityUnit: Unit.OZ,
                    extraInstructions: "Shredded"
                },
                {
                    name: "Salt",
                    extraInstructions: "To taste"
                },
                {
                    name: "Black Pepper",
                    extraInstructions: "To taste"
                }
            ],
            instructions: [
                "Preheat oven to 375°.",
                "Heat oil in large pot.",
                "Add garlic and cook until fragrant.",
                "Add all ingredients, except parmesan, salt, and pepper.",
                "Stir over low heat until fully melted.",
                "Add parmesan, salt, and pepper.",
                "Stir until fully incorporated.",
                "Add salt to taste.",
                "Pour mixture into a 8x8 baking dish and bake for 30 minutes, or until top is brown.",
                "Serve hot with crackers or bread & veggies cut for dipping."
            ]
        },
        {
            slug: "cheddar-ranch-cheese-spread",
            name: "Cheddar Ranch Cheese Spread",
            ingredients: [
                {
                    name: "Cream Cheese",
                    quantity: 8,
                    quantityUnit: Unit.OZ
                },
                {
                    name: "Sour Cream",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Ranch Dressing Mix",
                    quantity: 1,
                    extraInstructions: "1 packet"
                },
                {
                    name: "Shredded Cheese",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                }
            ],
            instructions: [
                "Beat cream cheese until fluffy.",
                "Add sour cream and dressing mix until blended.",
                "Stir in shredded cheese.",
                "Chill 2 hours."
            ]
        },
        {
            slug: "bacon-green-onion-cheese-spread",
            name: "Bacon Green Onion Cheese Spread",
            ingredients: [
                {
                    name: "Cream Cheese",
                    quantity: 8,
                    quantityUnit: Unit.OZ
                },
                {
                    name: "Bacon",
                    quantity: 4,
                    quantityUnit: Unit.OZ,
                    extraInstructions: "Cooked, crumbled or real bacon bits"
                },
                {
                    name: "Green Onions",
                    quantity: 0.25,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Finely chopped"
                },
                {
                    name: "Worcestershire Sauce",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                }
            ],
            instructions: [
                "Combine all ingredients and blend well.",
                "Cover and chill until ready to use.",
                "Can be stored for 2 days.",
                "Can be used on bagels or crackers."
            ]
        },
        {
            slug: "no-bake-banana-split-cake",
            name: "No Bake Banana Split Cake",
            ingredients: [
                {
                    name: "Graham Cracker Crumbs",
                    quantity: 2,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Butter",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Melted"
                }
            ],
            additionalIngredientGroups: [
                {
                    name: "Cream Cheese Layer",
                    ingredients: [
                        {
                            name: "Cream Cheese",
                            quantity: 12,
                            quantityUnit: Unit.OZ,
                            extraInstructions: "At room temperature"
                        },
                        {
                            name: "Granulated Sugar",
                            quantity: 0.75,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Cool Whip",
                            quantity: 8,
                            quantityUnit: Unit.OZ
                        }
                    ]
                },
                {
                    name: "Fruit Topping",
                    ingredients: [
                        {
                            name: "Bananas",
                            quantity: 3,
                            extraInstructions: "Sliced"
                        },
                        {
                            name: "Crushed Pineapple",
                            quantity: 1,
                            extraInstructions: "20 oz can, well drained"
                        },
                        {
                            name: "Strawberries",
                            quantity: 16,
                            quantityUnit: Unit.OZ,
                            extraInstructions: "Hulled and sliced"
                        },
                        {
                            name: "Cool Whip",
                            quantity: 8,
                            quantityUnit: Unit.OZ
                        },
                        {
                            name: "Walnuts",
                            quantity: 0.5,
                            quantityUnit: Unit.CUP,
                            extraInstructions: "Chopped (optional)"
                        },
                        {
                            name: "Chocolate Syrup",
                            extraInstructions: "For drizzling"
                        },
                        {
                            name: "Maraschino Cherries",
                            extraInstructions: "For topping"
                        }
                    ]
                }
            ],
            instructions: [
                "Grease a 9X13 pan and set aside.",
                "In a medium bowl combine graham crackers and melted butter, stirring until all the crumbs are coated with butter. Dump the crumbs into the prepared pan and press into an even layer. Refrigerate while preparing the next layer.",
                "In a medium bowl mix together the cream cheese and sugar on medium speed until light and fluffy, about 3 minutes using a rubber spatula. Fold in cool whip until throughly combined. Spread cream cheese mixture on top of graham cracker crust.",
                "Arrange the banana slices in a single layer on top of the cream cheese filling. Top with a even layer of crushed pineapple, and then a single layer of sliced strawberries.",
                "Cover with cool whip, smoothing the top. Sprinkle with the nuts, if desired. Then drizzle with the chocolate syrup and top with the marchino cherries. Refrigerate for at least 4 hours, or overnight."
            ]
        },
        {
            slug: "pepperoni-pizza-log",
            name: "Pepperoni Pizza Log",
            ingredients: [
                {
                    name: "Frozen Bread Dough",
                    quantity: 1,
                    extraInstructions: "Thawed"
                },
                {
                    name: "Eggs",
                    quantity: 2,
                    extraInstructions: "Large, separated"
                },
                {
                    name: "Parmesan Cheese",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "Grated"
                },
                {
                    name: "Olive Oil",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Parsley",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON,
                    extraInstructions: "Minced"
                },
                {
                    name: "Dried Oregano",
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
                    quantity: 0.25,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Pepperoni",
                    quantity: 8,
                    quantityUnit: Unit.OZ,
                    extraInstructions: "Sliced"
                },
                {
                    name: "Mozzarella Cheese",
                    quantity: 2,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Shredded"
                },
                {
                    name: "Mushrooms",
                    quantity: 1,
                    extraInstructions: "Can, drained"
                },
                {
                    name: "Pepper Rings",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "¼ to ½ cup"
                },
                {
                    name: "Green Bell Pepper",
                    quantity: 1,
                    extraInstructions: "Medium, diced"
                },
                {
                    name: "Green Olives",
                    quantity: 1,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Sliced"
                },
                {
                    name: "Pizza Sauce",
                    quantity: 1,
                    extraInstructions: "15 oz can"
                }
            ],
            instructions: [
                "Preheat oven to 350°. On a greased baking sheet, roll out dough into a 15 x 10 in rectangle.",
                "In a small bowl, combine egg yolks, parmesan cheese, oil, parsley, oregano garlic powder, and pepper. Brush over dough.",
                "Sprinkle with the pepperoni, mozzarella cheese, mushrooms, pepper rings, green peppers and olives.",
                "Roll up jelly-roll style starting with long side, parallel seam to seal up tuck ends under.",
                "Place seam side down, brush with egg whites, do not let rise.",
                "Bake 35-40 minutes, or until golden brown.",
                "Warm the pizza sauce. Serve with sliced loaf."
            ]
        },
        {
            slug: "bacon-ranch-chicken-bake",
            name: "4 Ingredient Bacon Ranch Chicken Bake",
            ingredients: [
                {
                    name: "Chicken Breast",
                    extraInstructions: "As needed"
                },
                {
                    name: "Bacon",
                    extraInstructions: "Sliced"
                },
                {
                    name: "Ranch Dressing",
                    extraInstructions: "As needed"
                },
                {
                    name: "Shredded Cheese",
                    extraInstructions: "As needed"
                }
            ],
            instructions: [
                "Preheat oven to 400°.",
                "Place chicken breast in baking dish.",
                "Cover with Ranch dressing.",
                "Layer with bacon.",
                "Cover and place in oven.",
                "Bake until chicken runs clear juices.",
                "Sprinkle with cheese.",
                "Return to oven until cheese melts.",
                "Serve."
            ]
        },
        {
            slug: "lemonade",
            name: "Lemonade",
            ingredients: [
                {
                    name: "Country Time Lemonade Mix",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Cold Water",
                    quantity: 2,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Pineapple Juice",
                    quantity: 1,
                    extraInstructions: "48 oz can, chilled"
                },
                {
                    name: "Sprite",
                    quantity: 2,
                    extraInstructions: "Cans, chilled"
                },
                {
                    name: "Lemon Slices",
                    extraInstructions: "For garnish"
                }
            ],
            instructions: [
                "Mix together lemonade mix, water, pineapple juice, and Sprite.",
                "Add lemon slices to garnish."
            ]
        },
        {
            slug: "stuffed-steak-rolls",
            name: "Stuffed Steak Rolls",
            ingredients: [
                {
                    name: "Oil",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "Olive, Canola, etc."
                },
                {
                    name: "Garlic",
                    quantity: 3,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "Chopped"
                },
                {
                    name: "Sweet Onions",
                    quantity: 2,
                    extraInstructions: "Chopped"
                },
                {
                    name: "Mushrooms",
                    quantity: 2,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Thinly sliced"
                },
                {
                    name: "Salt",
                    quantity: 0.5,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Black Pepper",
                    quantity: 0.5,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Flank Steak",
                    quantity: 2,
                    quantityUnit: Unit.LB
                },
                {
                    name: "Additional Salt",
                    extraInstructions: "To taste"
                },
                {
                    name: "Additional Black Pepper",
                    extraInstructions: "To taste"
                },
                {
                    name: "Baby Spinach",
                    quantity: 1,
                    extraInstructions: "7 oz package"
                },
                {
                    name: "Provolone Cheese",
                    quantity: 4,
                    extraInstructions: "Slices"
                }
            ],
            instructions: [
                "Preheat oven to 350°.",
                "Heat 1 tablespoon of oil in a pan over medium high heat.",
                "Combine garlic, onion, mushrooms, salt, and pepper in the pan.",
                "Cook until almost all the moisture has evaporated and the onions are caramelizing, 15 to 20 minutes.",
                "Remove from heat and set aside.",
                "Lay the flank steak on a cutting board.",
                "Spoon the mushroom onion mixture on top, spreading it evenly across the steak.",
                "Sprinkle the spinach on top, followed by slices of provolone.",
                "Press down lightly to compress the spinach.",
                "Starting at the bottom of the flank steak, roll it up tightly, making sure the grain of the meat underneath.",
                "Use toothpicks to secure the steak roll.",
                "Slice the steak roll into 6 equal slices.",
                "Heat the remaining oil in a pan over high heat.",
                "Sear the steak rolls on one side for 1-2 minutes, then flip.",
                "Sear the second side for about one minute, then bake for 10-15 minutes.",
                "Remove toothpicks, then serve."
            ]
        },
        {
            slug: "pineapple-sunshine-cake",
            name: "Pineapple Sunshine Cake",
            ingredients: [
                {
                    name: "Yellow Cake Mix",
                    quantity: 1,
                    extraInstructions: "1 box"
                },
                {
                    name: "Eggs",
                    quantity: 4
                },
                {
                    name: "Oil",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Crushed Pineapple",
                    quantity: 1,
                    extraInstructions: "8 oz can, with juice"
                }
            ],
            additionalIngredientGroups: [
                {
                    name: "Icing",
                    ingredients: [
                        {
                            name: "Cool Whip",
                            quantity: 1,
                            extraInstructions: "8 oz container"
                        },
                        {
                            name: "Instant Vanilla Pudding",
                            quantity: 1,
                            extraInstructions: "Small box"
                        },
                        {
                            name: "Crushed Pineapple",
                            quantity: 1,
                            extraInstructions: "8 oz can, with juice"
                        }
                    ]
                }
            ],
            instructions: [
                "Preheat oven to 350°.",
                "Spray a 9x13 pan.",
                "In a large bowl, combine cake mix, eggs, oil, and 1 can crushed pineapple with the juice.",
                "Mix well.",
                "Pour into the prepared pan and bake for 25-30 minutes.",
                "Allow to cool completely.",
                "In a medium bowl, fold together Cool Whip, pudding, and one can of crushed pineapple with the juice.",
                "Spread over top the cooled cake."
            ]
        },
        {
            slug: "banana-split-dessert",
            name: "Banana Split Dessert",
            ingredients: [
                {
                    name: "Graham Cracker Crumbs",
                    quantity: 2,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Sugar",
                    quantity: 1.25,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Butter",
                    quantity: 0.33,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Melted"
                },
                {
                    name: "Cream Cheese",
                    quantity: 16,
                    quantityUnit: Unit.OZ,
                    extraInstructions: "2 (8 oz) packages, softened"
                },
                {
                    name: "Crushed Pineapple",
                    quantity: 1,
                    extraInstructions: "20 oz can, drained"
                },
                {
                    name: "Strawberries",
                    quantity: 1,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Sliced thin"
                },
                {
                    name: "Bananas",
                    quantity: 4,
                    extraInstructions: "Ripe"
                },
                {
                    name: "Milk",
                    quantity: 2,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Cold"
                },
                {
                    name: "Vanilla Pudding",
                    quantity: 1,
                    extraInstructions: "Large box"
                },
                {
                    name: "Heavy Whipping Cream",
                    quantity: 2,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Vanilla Extract",
                    quantity: 2,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Powdered Sugar",
                    quantity: 0.25,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Nuts",
                    quantity: 1,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Optional"
                }
            ],
            instructions: [
                "In a medium bowl, mix together the graham cracker crumbs, 1/4 cup sugar, and 1/3 cup melted butter.",
                "Press into a 13x9 pan and set aside.",
                "Beat together the remaining sugar (1 cup) and cream cheese until well mixed.",
                "Carefully spoon over cookie crust.",
                "Top with pineapple, sliced bananas, and sliced strawberries.",
                "In another bowl mix the cold milk and pudding, and set aside.",
                "In a large bowl beat together the whipping cream, vanilla, and powdered sugar until soft peaks form.",
                "Remove one cup of whipped cream and mix into pudding.",
                "Layer filling over bananas.",
                "Spread remaining whipped cream over pudding and sprinkle with nuts.",
                "Chill for 5 hours before serving."
            ]
        },
        {
            slug: "seven-up-lemon-cake",
            name: "7-up Lemon Cake",
            ingredients: [
                {
                    name: "Yellow Cake Mix",
                    quantity: 1,
                    extraInstructions: "1 box"
                },
                {
                    name: "Instant Lemon Pudding",
                    quantity: 1,
                    extraInstructions: "4.2 oz box"
                },
                {
                    name: "7-up",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Eggs",
                    quantity: 4
                },
                {
                    name: "Vegetable Oil",
                    quantity: 0.67,
                    quantityUnit: Unit.CUP
                }
            ],
            additionalIngredientGroups: [
                {
                    name: "Glaze",
                    ingredients: [
                        {
                            name: "Powdered Sugar",
                            quantity: 1.75,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Milk",
                            quantity: 4,
                            quantityUnit: Unit.TABLESPOON,
                            extraInstructions: "2-4 tablespoons"
                        },
                        {
                            name: "Lemon Juice",
                            quantity: 1,
                            quantityUnit: Unit.TABLESPOON,
                            extraInstructions: "Fresh squeezed"
                        },
                        {
                            name: "Lemon Zest",
                            quantity: 1.5,
                            quantityUnit: Unit.TEASPOON
                        }
                    ]
                }
            ],
            instructions: [
                "Preheat oven to 350°.",
                "Lightly grease a bundt pan with non-stick spray.",
                "In a large bowl, combine cake mix, pudding mix, 7-up, eggs, and oil and mix together until fully incorporated.",
                "Pour mixture into cake pan and place in oven.",
                "Bake 35-45 minutes.",
                "While cake is baking, prepare glaze by mixing powdered sugar, lemon juice, and zest in a large bowl.",
                "Gradually add milk until desired consistency is reached.",
                "Remove cake from oven, invert onto serving plate.",
                "Let cool completely, then pour glaze over the top.",
                "Let glaze set then slice and serve."
            ]
        },
        {
            slug: "bacon-cheese-potatoes",
            name: "Bacon, Cheese, and Potatoes",
            ingredients: [
                {
                    name: "Bacon",
                    quantity: 200,
                    quantityUnit: Unit.GRAM,
                    extraInstructions: "Diced"
                },
                {
                    name: "Onions",
                    quantity: 2,
                    extraInstructions: "Medium, thinly sliced"
                },
                {
                    name: "Potatoes",
                    quantity: 4,
                    extraInstructions: "Medium, thinly sliced"
                },
                {
                    name: "Cheese",
                    quantity: 225,
                    quantityUnit: Unit.GRAM,
                    extraInstructions: "Thinly sliced"
                },
                {
                    name: "Salt",
                    extraInstructions: "To taste"
                },
                {
                    name: "Black Pepper",
                    extraInstructions: "To taste"
                },
                {
                    name: "Butter",
                    extraInstructions: "For dotting"
                },
                {
                    name: "Green Onions",
                    extraInstructions: "For garnish"
                }
            ],
            instructions: [
                "Line slow cooker with foil with enough overlap.",
                "Layer bacon, onions, potatoes, and cheese.",
                "Dot with butter.",
                "Cover with remaining foil.",
                "In crock pot, cover and cook for 10 to 12 hours on low."
            ]
        },
        {
            slug: "mandarin-orange-cake",
            name: "Mandarin Orange Cake",
            ingredients: [
                {
                    name: "Yellow Cake Mix",
                    quantity: 1,
                    extraInstructions: "1 package"
                },
                {
                    name: "Vegetable Oil",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Eggs",
                    quantity: 4
                },
                {
                    name: "Mandarin Oranges",
                    quantity: 1,
                    extraInstructions: "11 oz can, with liquid"
                }
            ],
            additionalIngredientGroups: [
                {
                    name: "Icing",
                    ingredients: [
                        {
                            name: "Crushed Pineapple",
                            quantity: 1,
                            extraInstructions: "20 oz can, with juice"
                        },
                        {
                            name: "Instant Vanilla Pudding",
                            quantity: 1,
                            extraInstructions: "3.5 oz package"
                        },
                        {
                            name: "Cool Whip",
                            quantity: 1,
                            extraInstructions: "9 oz container"
                        }
                    ]
                }
            ],
            instructions: [
                "Mix all ingredients in bowl. Beat together 3-4 minutes. (Do not add any other ingredients)",
                "Pour equally into 3 round cake pans.",
                "Bake at 350° for 25-30 minutes.",
                "For icing: Mix together pudding and pineapple.",
                "Fold in Cool Whip.",
                "Frost one layer at a time then frost top and sides.",
                "Refrigerate."
            ]
        },
        {
            slug: "cucumber-stuffed-cherry-tomatoes",
            name: "Cucumber Stuffed Cherry Tomatoes",
            ingredients: [
                {
                    name: "Cherry Tomatoes",
                    quantity: 24
                },
                {
                    name: "Cream Cheese",
                    quantity: 3,
                    quantityUnit: Unit.OZ,
                    extraInstructions: "1 package"
                },
                {
                    name: "Mayonnaise",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Cucumber",
                    quantity: 0.25,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Finely chopped, peeled"
                },
                {
                    name: "Green Onions",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "Finely chopped"
                },
                {
                    name: "Fresh Dill",
                    quantity: 2,
                    quantityUnit: Unit.TEASPOON,
                    extraInstructions: "Minced"
                }
            ],
            instructions: [
                "Thin slice off the top of each tomato.",
                "Scoop out and discard pulp, invert tomato on paper towel & drain.",
                "In a small bowl, combine cream cheese and mayonnaise until smooth.",
                "Stir in the cucumber, onion, and dill.",
                "Spoon into the tomatoes.",
                "Refrigerate until serving."
            ]
        }
    ]
}

export default RECIPES;