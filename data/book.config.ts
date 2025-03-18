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
        },
        {
            slug: "asparagus-beef-stir-fry",
            name: "Asparagus Beef Stir Fry",
            ingredients: [
                {
                    name: "Beef Roast",
                    quantity: 1,
                    quantityUnit: Unit.LB,
                    extraInstructions: "Cubed"
                },
                {
                    name: "Green Onion",
                    quantity: 1,
                    extraInstructions: "Sliced"
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
                    name: "Canola Oil",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Garlic",
                    quantity: 3,
                    extraInstructions: "Cloves, minced"
                },
                {
                    name: "Fresh Asparagus",
                    quantity: 1,
                    quantityUnit: Unit.LB,
                    extraInstructions: "Trimmed and cut into 2 inch pieces"
                },
                {
                    name: "Fresh Mushrooms",
                    quantity: 0.5,
                    quantityUnit: Unit.LB,
                    extraInstructions: "Sliced"
                },
                {
                    name: "Butter",
                    quantity: 0.25,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Cubed"
                },
                {
                    name: "Soy Sauce",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Lemon Juice",
                    quantity: 1.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Hot Cooked Rice",
                    extraInstructions: "For serving"
                }
            ],
            instructions: [
                "In a wok or large skillet, stir fry the beef, onion, salt, and pepper in oil 3-5 minutes.",
                "Add garlic and cook 1 minute longer.",
                "Remove and keep warm.",
                "In the same pan, stir-fry the asparagus and mushrooms in butter until the asparagus is tender.",
                "Return the beef mixture to pan; stir in soy sauce and lemon juice; heat through.",
                "Serve with rice."
            ]
        },
        {
            slug: "caramelized-butternut-squash",
            name: "Caramelized Butternut Squash",
            ingredients: [
                {
                    name: "Unsalted Butter",
                    quantity: 6,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "Melted"
                },
                {
                    name: "Brown Sugar",
                    quantity: 0.25,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Packed"
                },
                {
                    name: "Salt",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Ground Black Pepper",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Butternut Squash",
                    extraInstructions: "Peeled and cubed"
                }
            ],
            instructions: [
                "Preheat oven to 400°.",
                "Cut off and discard the ends of the squash, peel the squash, cut them in half lengthwise, and remove seeds.",
                "Cut the squash into 1-1/2 to 1\" thick cubes and place them on baking sheet.",
                "Add the melted butter, brown sugar, salt, and pepper.",
                "Toss all the ingredients together and spread in a single layer on baking sheet.",
                "Roast for 45 to 55 minutes, until the squash is tender and the glaze begins to caramelize.",
                "While roasting, turn the squash a few times with a spatula to be sure it browns evenly."
            ]
        },
        {
            slug: "baked-eggplant",
            name: "Baked Eggplant",
            ingredients: [
                {
                    name: "Eggplant",
                    extraInstructions: "Peeled and sliced into 1/2 inch slices"
                },
                {
                    name: "Mayonnaise",
                    extraInstructions: "For coating"
                },
                {
                    name: "Bread Crumbs",
                    extraInstructions: "For coating"
                }
            ],
            instructions: [
                "Preheat oven to 350°.",
                "Line a baking pan with foil.",
                "Place bread crumbs in a shallow dish.",
                "Coat each slice of eggplant on both sides with mayonnaise.",
                "Press into bread crumbs to coat.",
                "Place coated eggplant slices on prepared baking sheet.",
                "Bake for 20 minutes in the preheated oven, until golden brown.",
                "Flip slices over, and cook for an additional 20 to 25 minutes to brown the other side."
            ]
        },
        {
            slug: "basic-doughnuts",
            name: "Basic Doughnuts",
            ingredients: [
                {
                    name: "Self Rising Flour",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Sugar",
                    quantity: 0.25,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Milk",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Egg",
                    quantity: 1
                },
                {
                    name: "Oil",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Salt",
                    extraInstructions: "Pinch"
                },
                {
                    name: "Nutmeg",
                    extraInstructions: "2 pinches (optional)"
                }
            ],
            additionalIngredientGroups: [
                {
                    name: "Glaze",
                    ingredients: [
                        {
                            name: "Butter",
                            quantity: 1,
                            quantityUnit: Unit.TABLESPOON,
                            extraInstructions: "Melted"
                        },
                        {
                            name: "Powdered Sugar",
                            quantity: 0.5,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Milk",
                            quantity: 1,
                            quantityUnit: Unit.TABLESPOON
                        }
                    ]
                }
            ]
        },
        {
            slug: "crockpot-chicken-and-vegetables",
            name: "Crockpot Chicken and Vegetables",
            ingredients: [
                {
                    name: "Boneless Skinless Chicken Breasts",
                    quantity: 2
                },
                {
                    name: "Whole Green Beans",
                    quantity: 3,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Red Potatoes",
                    quantity: 5,
                    extraInstructions: "Medium, cut up in chunks"
                },
                {
                    name: "Dry Ranch Mix",
                    quantity: 1,
                    extraInstructions: "1 package"
                },
                {
                    name: "Dry Chicken Gravy Mix",
                    quantity: 1,
                    extraInstructions: "1 package"
                },
                {
                    name: "Butter",
                    quantity: 1,
                    quantityUnit: Unit.STICK
                },
                {
                    name: "Water",
                    quantity: 0.33,
                    quantityUnit: Unit.CUP
                }
            ],
            instructions: [
                "Place green beans on one side of crockpot.",
                "Place cut potatoes on the other side.",
                "Place chicken in the center.",
                "Mix together the dry ranch mix and chicken gravy mix.",
                "Sprinkle the dry mix evenly over the chicken.",
                "Place half of the butter on top of the dry mix covered chicken.",
                "Slowly pour water on the green beans and potatoes (not the chicken).",
                "Cook on low for 6-8 hours until the chicken is done and tender."
            ]
        },
        {
            slug: "spaghetti-squash",
            name: "Spaghetti Squash",
            ingredients: [
                {
                    name: "Spaghetti Squash",
                    quantity: 1,
                    extraInstructions: "Whole"
                },
                {
                    name: "Olive Oil",
                    extraInstructions: "For brushing"
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
                "With a very sharp knife, cut off top and bottom of squash so that it will stand secure and flat on your cutting board.",
                "Slice the squash in half.",
                "Brush each half of squash with olive oil and sprinkle with salt and black pepper.",
                "Place cut sides down on rimmed baking sheet and pierce in oven.",
                "Bake for about 40 minutes, or until you can pierce the squash with a fork.",
                "Let cool for about 15 minutes, or until squash is cool enough to handle.",
                "With a fork, scrape out the spaghetti-like strands and prepare as desired."
            ]
        },
        {
            slug: "buttery-garlic-spaghetti-squash",
            name: "Buttery Garlic Spaghetti Squash",
            ingredients: [
                {
                    name: "Butter",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Garlic",
                    quantity: 2,
                    extraInstructions: "Cloves, finely minced"
                },
                {
                    name: "Parsley",
                    quantity: 0.25,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Finely minced"
                },
                {
                    name: "Salt",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Parmesan Cheese",
                    quantity: 0.25,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Shredded"
                },
                {
                    name: "Spaghetti Squash",
                    extraInstructions: "Cooked and scraped into strands"
                }
            ],
            instructions: [
                "Heat a large saute pan with the butter & garlic over medium low heat.",
                "When garlic becomes fragrant, add parsley, salt and spaghetti squash strands.",
                "Toss well & sprinkle in the parmesan.",
                "The spaghetti squash should have a slight crunch (not mushy) but if you like it softer, cover and cook 2 more minutes."
            ]
        },
        {
            slug: "chicken-asparagus-skillet-supper",
            name: "Chicken & Asparagus Skillet Supper",
            ingredients: [
                {
                    name: "Chicken Thighs",
                    quantity: 8,
                    extraInstructions: "Skinless, boneless"
                },
                {
                    name: "Bacon",
                    quantity: 3,
                    extraInstructions: "Slices, coarsely chopped"
                },
                {
                    name: "Chicken Broth",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Asparagus Spears",
                    quantity: 1,
                    quantityUnit: Unit.LB,
                    extraInstructions: "Trimmed"
                },
                {
                    name: "Yellow Summer Squash",
                    extraInstructions: "Halved crosswise and cut into strips"
                },
                {
                    name: "Green Onions",
                    quantity: 4,
                    extraInstructions: "Cut into 2\" pieces"
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
                    name: "Water",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON
                }
            ],
            instructions: [
                "Sprinkle chicken with salt and pepper.",
                "In 12\" skillet cook the chicken and bacon over medium-high heat 12 minutes, turning occasionally.",
                "Carefully add broth; reduce heat; cook 3-5 minutes more or until the chicken is tender and no longer pink.",
                "Meanwhile in microwave-safe 2 quart dish combine asparagus, squash, and 2 tablespoons water.",
                "Sprinkle with salt and pepper.",
                "Cover with vented plastic wrap.",
                "Cook on high 3-5 minutes, or until vegetables are crisp-tender, stirring once.",
                "Transfer to plates and drizzle cooking liquid; top with chicken, bacon, and onions."
            ]
        },
        {
            slug: "aioli",
            name: "Aioli",
            ingredients: [
                {
                    name: "Sour Cream",
                    extraInstructions: "As needed"
                },
                {
                    name: "Lemon Juice",
                    extraInstructions: "To taste"
                },
                {
                    name: "Onion",
                    extraInstructions: "Chopped"
                },
                {
                    name: "Fresh Dill",
                    extraInstructions: "To taste"
                },
                {
                    name: "Garlic",
                    quantity: 2,
                    extraInstructions: "Cloves"
                },
                {
                    name: "Salt",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                }
            ],
            instructions: [
                "Combine all ingredients.",
                "Chill until serving."
            ]
        },
        {
            slug: "asian-pork-skillet",
            name: "Asian Pork Skillet",
            ingredients: [
                {
                    name: "Oil",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Boneless Pork",
                    quantity: 12,
                    quantityUnit: Unit.OZ,
                    extraInstructions: "Cut into strips"
                },
                {
                    name: "Water",
                    quantity: 1.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Ramen Noodles",
                    quantity: 3,
                    quantityUnit: Unit.OZ,
                    extraInstructions: "With seasoning packet"
                },
                {
                    name: "Snow Peas",
                    quantity: 2,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Fresh"
                },
                {
                    name: "Sweet Peppers",
                    quantity: 2,
                    extraInstructions: "Medium, red, orange, or yellow, cut into bite size"
                },
                {
                    name: "Hoisin Sauce",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Black Pepper",
                    extraInstructions: "Fresh ground, to taste"
                }
            ],
            instructions: [
                "In large skillet heat oil. Add pork, cook and stir about 2 minutes until no longer pink.",
                "Add water to skillet. Bring to boil.",
                "Add noodles, seasoning packet, snow peas, sweet peppers and hoisin sauce.",
                "Return to boiling; reduce heat simmer, covered, for 5 minutes.",
                "Season with fresh pepper."
            ]
        },
        {
            slug: "corn-tomato-zucchini-skillet",
            name: "Corn, Tomato, and Zucchini Skillet",
            ingredients: [
                {
                    name: "Fresh Corn",
                    quantity: 1.5,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Or 2 ears"
                },
                {
                    name: "Zucchini",
                    quantity: 2,
                    extraInstructions: "Small, sliced into 1/3\" rounds"
                },
                {
                    name: "Roma Tomatoes",
                    quantity: 2,
                    extraInstructions: "Small, peeled and chopped"
                },
                {
                    name: "Grape Tomatoes",
                    extraInstructions: "Small handful, halved"
                },
                {
                    name: "Bell Pepper",
                    quantity: 0.5,
                    extraInstructions: "Cut into 2-3\" matchsticks"
                },
                {
                    name: "Olive Oil",
                    quantity: 2,
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
                    name: "Oregano",
                    extraInstructions: "To taste"
                }
            ],
            instructions: [
                "In a large skillet, warm the olive oil over medium heat.",
                "Add the peppers and sauté for a couple of minutes, until barely softened.",
                "Add the corn and tomatoes; stir to combine.",
                "Season with salt and pepper and continue to sauté for another 1-2 minutes.",
                "Add the oregano, toss well and taste.",
                "Sauté until everything is warm and the vegetables are still crisp and barely tender."
            ]
        },
        {
            slug: "great-pumpkin-dessert",
            name: "Great Pumpkin Dessert",
            ingredients: [
                {
                    name: "Solid Pack Pumpkin",
                    quantity: 1,
                    extraInstructions: "15 oz can"
                },
                {
                    name: "Evaporated Milk",
                    quantity: 1,
                    extraInstructions: "12 oz can"
                },
                {
                    name: "Eggs",
                    quantity: 3
                },
                {
                    name: "Sugar",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Pumpkin Pie Spice",
                    quantity: 4,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Yellow Cake Mix",
                    quantity: 1,
                    extraInstructions: "1 package"
                },
                {
                    name: "Butter",
                    quantity: 0.75,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Melted"
                },
                {
                    name: "Walnuts",
                    quantity: 1.5,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Chopped"
                }
            ],
            instructions: [
                "In a large bowl, beat the first five ingredients until smooth.",
                "Transfer to a 9x13 greased baking dish.",
                "Sprinkle cake mix evenly over top.",
                "Drizzle with butter.",
                "Bake at 350°F for 1 hour or until a knife inserted near the center comes out clean.",
                "Serve with ice cream or whipped cream."
            ],
            notes: "12-16 servings"
        },
        {
            slug: "cinnamon-applesauce-bread",
            name: "Cinnamon Applesauce Bread",
            ingredients: [
                {
                    name: "All-Purpose Flour",
                    quantity: 2.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Ground Cinnamon",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Baking Powder",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Salt",
                    quantity: 0.25,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Egg",
                    quantity: 1
                },
                {
                    name: "Applesauce",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Brown Sugar",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Milk",
                    quantity: 0.67,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Oil",
                    quantity: 0.5,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Walnuts",
                    quantity: 1,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Chopped and divided"
                },
                {
                    name: "Raisins",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP
                }
            ],
            instructions: [
                "Beat egg, applesauce, brown sugar, milk, and oil together in a bowl.",
                "Add flour, cinnamon, baking powder, salt and mix until all ingredients are wet.",
                "Stir in half of the walnuts and the raisins.",
                "Pour into a 9x5 loaf pan that has been sprayed with Cooking Spray.",
                "Sprinkle the rest of the walnuts on top of the batter.",
                "Bake in a preheated 350° oven for 55-60 minutes.",
                "Cool in pan at least 10 minutes before removing."
            ]
        },
        {
            slug: "original-party-mix-1950",
            name: "Original Party Mix 1950",
            ingredients: [
                {
                    name: "Butter",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Worcestershire Sauce",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Seasoned Salt",
                    quantity: 0.25,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Garlic Salt",
                    quantity: 0.25,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Wheat Chex",
                    quantity: 3,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Rice Chex",
                    quantity: 2,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Peanuts",
                    quantity: 1.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Small Pretzel Sticks",
                    quantity: 1.5,
                    quantityUnit: Unit.CUP
                }
            ],
            instructions: [
                "Preheat oven to 275°.",
                "Melt butter in a shallow pan.",
                "Stir in Worcestershire sauce, seasoned salt, garlic salt.",
                "Fold in all cereals, nuts and pretzels.",
                "Mix until all pieces are coated with butter mixture.",
                "Place in a shallow baking pan with sides.",
                "Bake for 40 minutes, stirring every 10 minutes.",
                "Cool and enjoy!"
            ]
        },
        {
            slug: "chex-party-mix-oven",
            name: "Chex Party Mix (Oven-Baked)",
            ingredients: [
                {
                    name: "Butter",
                    quantity: 6,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Worcestershire Sauce",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Seasoning Salt",
                    quantity: 1.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Garlic Powder",
                    quantity: 0.75,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Onion Powder",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Corn Chex",
                    quantity: 3,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Rice Chex",
                    quantity: 3,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Wheat Chex",
                    quantity: 3,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Nuts",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Pretzel Sticks",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Cheerios",
                    quantity: 2.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Garlic Bagel Chips",
                    quantity: 1,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Broken into bite size pieces (thick)"
                }
            ],
            instructions: [
                "Heat oven to 250°.",
                "Melt butter in large roasting pan in oven.",
                "Stir in seasonings.",
                "Gradually stir in remaining ingredients until evenly coated.",
                "Bake 1 hour stirring every 15 minutes.",
                "Spread on paper towels to cool.",
                "Store in air tight containers."
            ]
        },
        {
            slug: "chex-party-mix-microwave",
            name: "Chex Party Mix (Microwave)",
            ingredients: [
                {
                    name: "Corn Chex",
                    quantity: 3,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Rice Chex",
                    quantity: 3,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Wheat Chex",
                    quantity: 3,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Nuts",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Pretzel Sticks",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Garlic Flavor Bagel Chips",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Butter",
                    quantity: 6,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Worcestershire Sauce",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Seasoned Salt",
                    quantity: 1.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Garlic Powder",
                    quantity: 0.75,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Onion Powder",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                }
            ],
            instructions: [
                "Mix cereals and bagel chips, nuts, pretzel set aside.",
                "In small microwavable bowl melt butter, stir in seasonings.",
                "Pour over cereal mixture, stir until evenly coated.",
                "Microwave uncovered on high 5 to 6 minutes thoroughly stirring every 2 minutes.",
                "Spread on paper towels to cool.",
                "Store in air tight containers."
            ]
        },
        {
            slug: "creamy-potato-salad",
            name: "Creamy Potato Salad",
            ingredients: [
                {
                    name: "Potatoes",
                    quantity: 1.5,
                    quantityUnit: Unit.LB,
                    extraInstructions: "About 6 medium"
                },
                {
                    name: "Mayonnaise",
                    quantity: 1.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Vinegar",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Yellow Mustard",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Salt",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Black Pepper",
                    quantity: 0.25,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Celery",
                    quantity: 2,
                    extraInstructions: "Medium stalks (1 cup), chopped"
                },
                {
                    name: "Onion",
                    quantity: 1,
                    extraInstructions: "Medium, chopped (½ cup)"
                },
                {
                    name: "Hard Boiled Eggs",
                    quantity: 4,
                    extraInstructions: "Chopped"
                },
                {
                    name: "Paprika",
                    extraInstructions: "For sprinkling (optional)"
                }
            ],
            instructions: [
                "Place potatoes in saucepan and cook until tender, drain. Let stand until cool.",
                "Mix mayonnaise, vinegar, mustard, salt and pepper in large bowl.",
                "Add potatoes, celery and onion, toss.",
                "Stir in eggs.",
                "Sprinkle with paprika.",
                "Cover and refrigerate at least 4 hours to blend flavors and chill.",
                "Store covered in refrigerator."
            ]
        },
        {
            slug: "old-fashioned-peanut-butter-cookies",
            name: "Old Fashioned Peanut Butter Cookies",
            ingredients: [
                {
                    name: "Butter",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Peanut Butter",
                    quantity: 1,
                    quantityUnit: Unit.CUP
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
                    name: "All-Purpose Flour",
                    quantity: 3,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Baking Powder",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Baking Soda",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Salt",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                }
            ],
            instructions: [
                "Cream butter, peanut butter, and sugar till creamy.",
                "Beat in eggs.",
                "Stir in dry ingredients.",
                "Roll dough into balls.",
                "Place on lightly greased cookie sheets.",
                "Flatten with fork.",
                "Bake at 375° for 10 minutes."
            ]
        },
        {
            slug: "balsamic-glazed-chicken",
            name: "Balsamic Glazed Chicken",
            ingredients: [
                {
                    name: "Balsamic Vinegar",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Honey",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Whole-Grain Mustard",
                    quantity: 1.5,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Garlic",
                    quantity: 3,
                    extraInstructions: "Cloves, minced"
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
                    name: "Bone-in Chicken Thighs",
                    quantity: 4
                },
                {
                    name: "Baby Red Potatoes",
                    quantity: 2,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Fresh Rosemary",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "Chopped"
                },
                {
                    name: "Extra Virgin Olive Oil",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Fresh Rosemary Sprigs",
                    quantity: 3,
                    extraInstructions: "For skillet"
                }
            ],
            instructions: [
                "Preheat oven to 425º.",
                "In large bowl, combine balsamic vinegar, honey, mustard, and garlic, and season with salt and pepper. Whisk until combined.",
                "Add chicken thighs and toss until thoroughly coated, then transfer to the fridge to marinate for at least 20 minutes, up to 1 hour.",
                "Prep the potatoes: In a medium bowl, add potatoes and rosemary. Season with salt and pepper. Add 1 TBS olive oil and toss until combined.",
                "In a large skillet over medium heat, heat the remaining tablespoon of olive oil.",
                "Add chicken and marinade and sear, skin side down, 2 minutes, then flip and sear two minutes more.",
                "Add the potatoes to skillet, around the chicken and rosemary sprigs.",
                "Transfer to the oven and bake until potatoes are tender and chicken is cooked through, 20 minutes.",
                "Serve chicken and potatoes with pan drippings."
            ]
        },
        {
            slug: "mediterranean-chicken-and-vegetables",
            name: "Mediterranean Chicken and Vegetables",
            ingredients: [
                {
                    name: "Lemon Juice",
                    quantity: 0.33,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Olive Oil",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Dried Rosemary Leaves",
                    quantity: 2,
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
                    name: "Garlic",
                    quantity: 8,
                    extraInstructions: "Cloves, chopped"
                },
                {
                    name: "Chicken Thighs",
                    quantity: 16
                },
                {
                    name: "Red Potatoes",
                    quantity: 2,
                    extraInstructions: "Large, cut into 1/2\" pieces"
                },
                {
                    name: "Zucchini",
                    quantity: 2,
                    extraInstructions: "Small, cut into 1\" pieces"
                },
                {
                    name: "Red Bell Peppers",
                    quantity: 2,
                    extraInstructions: "Medium, cut into 1\" pieces"
                },
                {
                    name: "Red Onion",
                    quantity: 1,
                    extraInstructions: "Cut into thick pieces"
                },
                {
                    name: "Parmesan Cheese",
                    extraInstructions: "Shredded, for sprinkling (optional)"
                }
            ],
            instructions: [
                "In a bowl, mix marinade ingredients.",
                "In large resealable plastic bag, place chicken thighs.",
                "In another resealable bag, place vegetables.",
                "Pour half the marinade over the chicken and half the marinade over the vegetables.",
                "Seal the bags, turn to coat contents with the marinade.",
                "Refrigerate 30 minutes to 2 hours (but no longer than 2 hours), turning the bags occasionally.",
                "Heat oven to 400°.",
                "Line a 15 x 10 x 1\" pan with foil.",
                "Place chicken thighs, skin side up on one side of the pan and vegetables on the other side of pan.",
                "Pour any remaining marinade over chicken and vegetables.",
                "Bake 35 to 40 minutes, or until vegetables are tender and juice of chicken is clear.",
                "When thickest part is cut to bone (180°), spooning juices in pan over chicken and vegetables halfway through bake time.",
                "Sprinkle with shredded parmesan cheese if desired."
            ]
        },
        {
            slug: "one-pan-ranch-pork-chops",
            name: "One Pan Ranch Pork Chops",
            ingredients: [
                {
                    name: "Bone-in Pork Chops",
                    quantity: 4,
                    extraInstructions: "8 oz. each"
                },
                {
                    name: "Baby Red Potatoes",
                    quantity: 16,
                    quantityUnit: Unit.OZ,
                    extraInstructions: "Halved"
                },
                {
                    name: "Green Beans",
                    quantity: 16,
                    quantityUnit: Unit.OZ,
                    extraInstructions: "Trimmed"
                },
                {
                    name: "Olive Oil",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Ranch Seasoning and Salad Dressing Mix",
                    quantity: 1,
                    extraInstructions: "0.9 oz. package"
                },
                {
                    name: "Garlic",
                    quantity: 3,
                    extraInstructions: "Cloves, minced"
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
                    name: "Fresh Parsley",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "Freshly chopped leaves (optional)"
                }
            ],
            instructions: [
                "Preheat oven to 400°. Lightly coat a baking sheet with a nonstick spray.",
                "Place pork chops, potatoes, and green beans in a single layer onto the prepared baking sheet.",
                "Drizzle with olive oil and season with Ranch Seasoning and garlic.",
                "Sprinkle with salt and pepper to taste.",
                "Place in oven and roast until the pork is completely cooked through, reaching an internal temperature of 140°, about 20-22 minutes.",
                "Then broil for 2-3 minutes, or until caramelized and slightly charred.",
                "Serve immediately, garnished with parsley, if desired."
            ]
        },
        {
            slug: "all-purpose-biscuits",
            name: "All-purpose Biscuits",
            ingredients: [
                {
                    name: "All-Purpose Flour",
                    quantity: 2,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Baking Powder",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Sugar",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "Scant"
                },
                {
                    name: "Salt",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Cold Unsalted Butter",
                    quantity: 5,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Whole Milk",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                }
            ],
            instructions: [
                "Preheat oven to 425°.",
                "Sift flour, baking powder, sugar and salt into a large mixing bowl.",
                "Cut butter into flour mixture using fork or a pastry cutter.",
                "Add milk and stir with a fork until it forms a rough ball.",
                "Turn the dough out onto a well-floured surface and pat down into a rough rectangle about an inch thick.",
                "Fold it over and gently pat down again. Repeat.",
                "Cover with towel and allow to rest for 30 minutes.",
                "Gently pat out the dough some more, so that the rectangle is roughly 10\"x6\".",
                "Cut dough into biscuits using a biscuit cutter. Do not twist cutter when cutting; this crimps the edges of the biscuit and impedes its rise.",
                "Place biscuits on a cookie sheet and bake until golden brown approximately 10 to 15 minutes."
            ]
        },
        {
            slug: "hush-puppies",
            name: "Hush Puppies",
            ingredients: [
                {
                    name: "Cornmeal",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "All-Purpose Flour",
                    quantity: 0.25,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Baking Powder",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Salt",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Egg",
                    quantity: 1,
                    extraInstructions: "Lightly beaten"
                },
                {
                    name: "Milk",
                    quantity: 0.75,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Onion",
                    quantity: 1,
                    extraInstructions: "Small, finely chopped"
                }
            ],
        },
        {
            slug: "easy-coleslaw-dressing",
            name: "Easy Coleslaw Dressing",
            ingredients: [
                {
                    name: "Mayonnaise",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Miracle whip"
                },
                {
                    name: "Lemon Juice",
                    quantity: 1.5,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Vinegar",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
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
                    name: "Sugar",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON
                }
            ]
        },
        {
            slug: "tartar-sauce",
            name: "Tartar Sauce",
            ingredients: [
                {
                    name: "Mayonnaise",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Sweet Pickle Relish",
                    quantity: 2,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Prepared Mustard",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Lemon Juice",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                }
            ]
        },
        {
            slug: "cocktail-sauce",
            name: "Cocktail Sauce",
            ingredients: [
                {
                    name: "Catsup",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Horseradish",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "To your taste (1-2 TBS)"
                },
                {
                    name: "Lemon Juice",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Worcestershire Sauce",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Salt",
                    quantity: 0.25,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Black Pepper",
                    extraInstructions: "1 dash"
                }
            ]
        },
        {
            slug: "greek-rub",
            name: "Greek Rub",
            ingredients: [
                {
                    name: "Dried Oregano",
                    quantity: 2,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Dried Basil",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Lemon Pepper Seasoning",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Garlic Powder",
                    quantity: 0.25,
                    quantityUnit: Unit.TEASPOON
                }
            ]
        },
        {
            slug: "pork-bbq-rub",
            name: "Pork BBQ Rub",
            ingredients: [
                {
                    name: "Brown Sugar",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "Packed"
                },
                {
                    name: "Chili Powder",
                    quantity: 2,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Smoked Paprika",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Salt",
                    quantity: 0.25,
                    quantityUnit: Unit.TEASPOON
                }
            ]
        },
        {
            slug: "mustard-thyme-rub",
            name: "Mustard-Thyme Rub",
            ingredients: [
                {
                    name: "Yellow Mustard",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Honey",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Dried Thyme",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Black Pepper",
                    quantity: 0.25,
                    quantityUnit: Unit.TEASPOON
                }
            ]
        },
        {
            slug: "sweet-and-spicy-rub",
            name: "Sweet and Spicy Rub",
            ingredients: [
                {
                    name: "Brown Sugar",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "Packed"
                },
                {
                    name: "Pumpkin Pie Spice",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Orange Zest",
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
                    quantity: 0.25,
                    quantityUnit: Unit.TEASPOON,
                    extraInstructions: "⅛ to ¼ tsp. to taste"
                }
            ]
        },
        {
            slug: "suggested-roasting-vegetables",
            name: "Suggested Vegetables for Roasting",
            ingredients: [
                {
                    name: "Red Potatoes"
                },
                {
                    name: "Sweet Potatoes"
                },
                {
                    name: "Butternut Squash"
                },
                {
                    name: "Acorn Squash"
                },
                {
                    name: "Sweet Peppers"
                },
                {
                    name: "Yellow or Red Onion"
                },
                {
                    name: "Fresh Carrots",
                    extraInstructions: "½-inch wedge"
                },
                {
                    name: "Parsnips"
                },
                {
                    name: "Brussel Sprouts"
                },
                {
                    name: "Cauliflower",
                    extraInstructions: "Florets"
                },
                {
                    name: "Button or Cremini Mushrooms"
                },
                {
                    name: "Cherry or Grape Tomatoes"
                },
                {
                    name: "Garlic",
                    extraInstructions: "Whole cloves"
                }
            ]
        },
        {
            slug: "honey-garlic-slow-cooker-ribs",
            name: "Honey Garlic Slow Cooker Ribs",
            ingredients: [
                {
                    name: "Pork Ribs",
                    quantity: 3,
                    quantityUnit: Unit.LB,
                    extraInstructions: "Racks halved (can use 3-10 lbs)"
                },
                {
                    name: "Salt",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Black Pepper",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Paprika",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Chili Powder",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Honey",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Soy Sauce",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Garlic",
                    quantity: 10,
                    extraInstructions: "Cloves, minced"
                }
            ],
            instructions: [
                "Season ribs evenly with the powder rub on all sides.",
                "Add honey, soy sauce, and garlic to slow cooker.",
                "Transfer ribs to slow cooker and turn them over in sauce until coated.",
                "Position the ribs so they are standing up, with the meat side down, and so the meat is against the walls of the slow cooker, with the bone sides facing in.",
                "Cover, and cook on high for 4 hours, or on low for 7-8 hours. Check after allotted time, you want to make sure meat is cooked through and tender.",
                "Remove the ribs to a cutting board; cut between the bones to separate into individual ribs. Use sauce from cooker."
            ]
        },
        {
            slug: "crustless-spinach-quiche",
            name: "Crustless Spinach Quiche",
            ingredients: [
                {
                    name: "Onion",
                    quantity: 1,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Chopped"
                },
                {
                    name: "Fresh Mushrooms",
                    quantity: 1,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Sliced"
                },
                {
                    name: "Vegetable Oil",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Frozen Chopped Spinach",
                    quantity: 1,
                    extraInstructions: "10 oz package, thawed and well drained"
                },
                {
                    name: "Ham",
                    quantity: 0.67,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Finely chopped, fully cooked"
                },
                {
                    name: "Eggs",
                    quantity: 5,
                    extraInstructions: "Large"
                },
                {
                    name: "Muenster or Monterey Jack Cheese",
                    quantity: 3,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "12 oz, shredded"
                },
                {
                    name: "Black Pepper",
                    quantity: 0.125,
                    quantityUnit: Unit.TEASPOON
                }
            ],
            instructions: [
                "In a large skillet, sauté onion and mushrooms in oil until tender.",
                "Add spinach and ham; cook and stir until excess moisture is evaporated.",
                "Cool slightly.",
                "Beat eggs; add cheese and mix well.",
                "Stir in spinach mixture and pepper; blend well.",
                "Spread evenly into a greased 9\" pie plate (a quiche dish).",
                "Bake at 350° for 40-45 minutes or until knife inserted in center comes out clean."
            ],
            notes: "Serves 8"
        },
        {
            slug: "slow-cooker-garlic-parm-chicken",
            name: "Slow Cooker Garlic Parm Chicken",
            ingredients: [
                {
                    name: "Vegetable Oil",
                    quantity: 0.33,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Plus 2 TBS"
                },
                {
                    name: "Chicken Thighs",
                    quantity: 2,
                    quantityUnit: Unit.LB,
                    extraInstructions: "4 pieces"
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
                    name: "Baby Red Potatoes",
                    quantity: 1,
                    quantityUnit: Unit.LB,
                    extraInstructions: "Quartered"
                },
                {
                    name: "Butter",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Garlic",
                    quantity: 5,
                    extraInstructions: "Cloves, chopped"
                },
                {
                    name: "Fresh Thyme",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "Freshly chopped"
                },
                {
                    name: "Parmesan Cheese",
                    extraInstructions: "Freshly grated, for serving"
                },
                {
                    name: "Fresh Parsley",
                    extraInstructions: "Freshly chopped, for serving"
                }
            ],
            instructions: [
                "In a large skillet, over med-hi, heat 1/3 cup oil.",
                "Add chicken, season with salt + pepper and sear for 3 to 4 minutes.",
                "In slow cooker, toss potatoes with 2 TBS oil, butter, garlic, and thyme.",
                "Season with salt and pepper.",
                "Add chicken toss slow cook on low gently, then cover and cook on high for 4 hours, until potatoes are tender and chicken is fully cooked.",
                "Garnish with Parmesan and parsley and serve."
            ]
        },
        {
            slug: "one-pan-honey-garlic-chicken",
            name: "One Pan Honey Garlic Chicken",
            ingredients: [
                {
                    name: "Bone-in Chicken Thighs",
                    quantity: 4
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
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Garlic",
                    quantity: 3,
                    extraInstructions: "Cloves"
                },
                {
                    name: "Brown Sugar",
                    quantity: 0.5,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Honey",
                    quantity: 0.25,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Dried Thyme",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Dried Oregano",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Green Onions",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                }
            ],
            instructions: [
                "Preheat oven to 400°",
                "Season chicken with salt & pepper.",
                "Melt 1 TBS butter in a large Oven-safe skillet over medium heat.",
                "Add chicken, skin side down, and sear both sides until golden brown.",
                "Remove the chicken thighs set aside.",
                "Pour out excess fat, but leave some for sauce.",
                "Add garlic, stir until fragrant, add brown sugar, honey, thyme, and oregano and stir.",
                "Reduce heat to low.",
                "Return chicken to skillet and coat with sauce.",
                "Add green onions to skillet.",
                "Bake for 25 minutes or until chicken is cooked through.",
                "Enjoy."
            ]
        },
        {
            slug: "kielbasa-veggie-sheet-pan",
            name: "Kielbasa Veggie Sheet Pan",
            ingredients: [
                {
                    name: "Baby Red Potatoes",
                    quantity: 1,
                    quantityUnit: Unit.LB,
                    extraInstructions: "Halved and quartered"
                },
                {
                    name: "Baby Petite Carrots",
                    quantity: 2,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Asparagus",
                    quantity: 1,
                    extraInstructions: "Bunch"
                },
                {
                    name: "Yellow Onion",
                    quantity: 0.5,
                    extraInstructions: "Large, thinly sliced"
                },
                {
                    name: "Kielbasa",
                    quantity: 1,
                    extraInstructions: "13 oz package, sliced into rounds"
                },
                {
                    name: "Garlic",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "Minced"
                },
                {
                    name: "Vegetable Oil",
                    quantity: 3,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "2 TBS + 1 TBS"
                },
                {
                    name: "Dried Basil",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Dried Thyme",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Dried Oregano",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Paprika",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Onion Powder",
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
                }
            ],
            instructions: [
                "Preheat oven to 400°. Line sheet pan with foil.",
                "In small bowl mix basil, thyme, oregano, paprika, salt and pepper.",
                "Place potatoes and carrots on sheet pan and drizzle with 2 TBS of oil.",
                "Sprinkle half of herb/spice over top, toss until coated evenly.",
                "Bake 20 minutes",
                "Move potatoes and carrot to one side of pan.",
                "Add asparagus, onions, and kielbasa slices to baking sheet.",
                "Drizzle with 1 TBS oil, add remaining herb/spice over top.",
                "Return to oven for 10-15 minutes, until veggies are softened and roasted."
            ]
        },
        {
            slug: "crockpot-ranch-pork-chops",
            name: "Crockpot Ranch Pork Chops",
            ingredients: [
                {
                    name: "Pork Chops",
                    quantity: 2,
                    extraInstructions: "2-4 pieces"
                },
                {
                    name: "Creamy Mushroom Soup",
                    quantity: 1,
                    extraInstructions: "Can"
                },
                {
                    name: "Dry Ranch Dressing Mix",
                    quantity: 1,
                    extraInstructions: "Packet"
                }
            ],
            instructions: [
                "In crockpot lay in pork chops.",
                "Add the soup, then sprinkle dry ranch dressing all over.",
                "Cover and cook on high for 4 hours or on low for 6 hours."
            ]
        },
        {
            slug: "pizza-pepperoni-bites",
            name: "Pizza Pepperoni Bites",
            ingredients: [
                {
                    name: "Mini Muffin Pan",
                    extraInstructions: "Required"
                },
                {
                    name: "Pepperoni Slices",
                    quantity: 24
                },
                {
                    name: "Mozzarella Cheese",
                    extraInstructions: "Shredded"
                },
                {
                    name: "Pizza Sauce"
                },
                {
                    name: "Black Olives",
                    extraInstructions: "Optional"
                }
            ],
            instructions: [
                "Preheat oven to 400°.",
                "Slice 6 other into slices of pepperoni, fold the pepperoni over to line the muffins.",
                "Cheese keeps crust intact and place one piece of pepperoni in each muffin tin.",
                "Bake until slightly crispy, 10 minutes.",
                "Remove pepperoni from tins, blot pepperoni and pan of excess oil.",
                "Return pepperoni cups to pan.",
                "Add a small spoonful of mozzarella sauce, add more mozzarella, then top with a slice",
                "Broil until cheese is melted and golden about 3 minutes."
            ]
        },
        {
            slug: "slow-cooker-beef-barley-soup",
            name: "Slow Cooker Beef Barley Soup",
            ingredients: [
                {
                    name: "Vegetable Oil",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Beef Stew Meat",
                    quantity: 2,
                    quantityUnit: Unit.LB,
                    extraInstructions: "Cut into 1\" pieces"
                },
                {
                    name: "Gold Potatoes",
                    quantity: 4,
                    extraInstructions: "Medium, cut into 1\" pieces"
                },
                {
                    name: "Carrots",
                    quantity: 4,
                    extraInstructions: "Medium, sliced into 1/2\" pieces"
                },
                {
                    name: "Onion",
                    quantity: 1,
                    extraInstructions: "Small, diced small"
                },
                {
                    name: "Celery",
                    quantity: 3,
                    extraInstructions: "Stalks, diced small"
                },
                {
                    name: "Garlic",
                    quantity: 6,
                    extraInstructions: "Cloves, minced"
                },
                {
                    name: "Beef Broth",
                    quantity: 2,
                    quantityUnit: Unit.QUART
                },
                {
                    name: "Dried Thyme",
                    quantity: 1.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Diced Tomatoes",
                    quantity: 1,
                    extraInstructions: "15 oz. can"
                },
                {
                    name: "Barley",
                    quantity: 0.75,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Rinsed"
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
                "Generously season beef with salt and pepper",
                "Heat 1 TBS of oil in large skillet. Working in batches, sear beef all sides; transfer seared beef to slow cooker.",
                "Return the skillet to heat, add 1 cup of beef broth. Heat to boil and scrape any brown bits from bottom of pan, add to slow cooker.",
                "Add the potatoes, onion, carrot, celery, garlic, thyme, diced tomatoes, barley and remaining beef broth to slow cooker. Stir to combine.",
                "Cover and cook on high for 4 hours.",
                "Season with salt + pepper to taste!"
            ]
        },
        {
            slug: "pork-chops-balsamic-roasted-vegetables",
            name: "Pork Chops with Balsamic Roasted Vegetables",
            ingredients: [
                {
                    name: "Pork Chops",
                    quantity: 4,
                    extraInstructions: "2-4 chops"
                },
                {
                    name: "Salt",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Black Pepper",
                    quantity: 0.75,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Vegetable Oil",
                    quantity: 0.25,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Small Potatoes",
                    quantity: 12,
                    extraInstructions: "Halved"
                },
                {
                    name: "Balsamic Vinegar",
                    quantity: 3,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Tomato Paste",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Thyme",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Red Onion",
                    quantity: 1,
                    extraInstructions: "Medium, cut into wedges"
                },
                {
                    name: "Baby Cremini Mushrooms",
                    quantity: 8,
                    quantityUnit: Unit.OZ,
                    extraInstructions: "Halved"
                },
                {
                    name: "Parsley",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON
                }
            ],
            instructions: [
                "Preheat oven to 425°F",
                "Sprinkle pork chops with salt & pepper; add 2 TBS oil to skillet, cook pork chops 3 minutes on each side until browned. Place on a plate.",
                "Reduce heat & add potatoes to pan, cut side down, cook 3 minutes. Remove pan from heat",
                "Combine ½ tsp pepper, 2 TBS oil, balsamic vinegar, tomato paste in a bowl, stir",
                "Combine 3 TBS of balsamic mixture, thyme, onion and mushrooms in bowl, tossing to coat.",
                "Add mushroom mixture to pan. Bake for 25 min.",
                "Arrange pork chops over vegetables, bake for 10 minute or until thermometer reads 145°F.",
                "Remove pan from oven. Sprinkle vegetables mixture with remaining 1/4 tsp salt.",
                "Place vegetables on plates with pork chop, spoon remaining Balsamic vinegar mixture over vegetables & chops."
            ]
        },
        {
            slug: "caprese-stuffed-garlic-butter-portobellos",
            name: "Caprese Stuffed Garlic Butter Portobellos",
            ingredients: [
                {
                    name: "Butter",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Garlic",
                    quantity: 2,
                    quantityUnit: Unit.PIECE,
                    extraInstructions: "Crushed cloves"
                },
                {
                    name: "Parsley",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "Chopped"
                }
            ],
            additionalIngredientGroups: [
                {
                    name: "Mushrooms",
                    ingredients: [
                        {
                            name: "Portobello Mushrooms",
                            quantity: 5,
                            extraInstructions: "Large"
                        },
                        {
                            name: "Mozzarella Cheese",
                            quantity: 1,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Grape Tomatoes",
                            quantity: 1,
                            quantityUnit: Unit.CUP,
                            extraInstructions: "Thinly sliced"
                        },
                        {
                            name: "Basil",
                            quantity: 0.25,
                            quantityUnit: Unit.CUP,
                            extraInstructions: "Fresh"
                        },
                    ]
                },
                {
                    name: "Balsamic Glaze",
                    ingredients: [
                        {
                            name: "Balsamic Vinegar",
                            quantity: 0.25,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Brown Sugar",
                            quantity: 2,
                            quantityUnit: Unit.TEASPOON
                        }
                    ]
                }
            ],
            instructions: [
                "Preheat oven to broil",
                "Brush the bottoms of mushrooms with garlic butter, place buttered side down on sheet pan",
                "Spoon inside of mushroom caps with mozzarella, tomatoes, basil. broil until cheese melts",
                "Drizzle with Balsamic glaze"
            ]
        },
        {
            slug: "kentucky-blackberry-cobbler",
            name: "Kentucky Blackberry Cobbler",
            ingredients: [
                {
                    name: "Fresh Blackberries",
                    quantity: 2.5,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Washed"
                },
                {
                    name: "Sugar",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "All-Purpose Flour",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Baking Powder",
                    quantity: 2,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Salt",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Milk",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Butter",
                    quantity: 1,
                    quantityUnit: Unit.STICK,
                    extraInstructions: "Melted"
                }
            ],
            instructions: [
                "Wash berries and pour in a bowl, add 1 cup sugar. Stir together just to cover all sugar and let set 25 to 30 minutes.",
                "Stir together the flour, baking powder, salt, and milk with a wooden spoon until all ingredients are well incorporated and you have few clumps.",
                "Pour the batter into a 9x9 baking dish, spread it out and pour the macerated blackberries on top of batter.",
                "Bake for 45 minutes in a preheated 375° oven. Maybe another 15 minutes if you prefer it browner. Let set for 15 minutes. Serve"
            ]
        },
        {
            slug: "basic-white-bread",
            name: "Basic White Bread",
            ingredients: [
                {
                    name: "Water",
                    quantity: 1.1875,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Vegetable Oil",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Salt",
                    quantity: 1.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Sugar",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "White Bread Flour",
                    quantity: 3.25,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Active Dry Yeast",
                    quantity: 2,
                    quantityUnit: Unit.TEASPOON
                }
            ],
            instructions: [
                "Add water and oil to the bread pan, then salt, sugar, and flour",
                "Make a small indentation in top of flour"
            ]
        },
        {
            slug: "broccoli-cheese-soup",
            name: "Broccoli Cheese Soup",
            ingredients: [
                {
                    name: "Broccoli",
                    quantity: 1,
                    extraInstructions: "Head, rinsed and chopped"
                },
                {
                    name: "Butter",
                    quantity: 0.25,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Onion",
                    quantity: 1,
                    extraInstructions: "Small, minced"
                },
                {
                    name: "Garlic",
                    quantity: 1,
                    extraInstructions: "Clove, minced"
                },
                {
                    name: "All-Purpose Flour",
                    quantity: 0.25,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Vegetable or Chicken Broth",
                    quantity: 2,
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
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Milk",
                    quantity: 2,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Cheese",
                    quantity: 2,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Of choice"
                }
            ],
            instructions: [
                "Rinse and chop broccoli, reserve",
                "Mince onion and chop garlic. Sauté onion in melted butter, about 3 minutes. Add the minced garlic, sauté and cook for one minute. (Medium high heat)",
                "Decrease heat to medium. Add ¼ cup flour, stirring constantly until it starts to brown, about 3 minutes",
                "Slowly add 2 cups of broth, continuing to stir. Add ½ tsp salt and ½ tsp pepper. Allow to thicken some, then add 2 cups of milk. Bring to a boil and allow to thicken",
                "Add the broccoli. Cover pot, turn down the heat to simmer. Simmer until broccoli is tender. About 25 minutes. Add 2 cups of cheese"
            ],
            notes: "Optional: Add 1 cup carrot and 1 cup celery, thinly sliced, to soup"
        },
        {
            slug: "prime-rib-with-garlic-herb-butter",
            name: "Prime Rib with Garlic Herb Butter",
            ingredients: [
                {
                    name: "Butter",
                    quantity: 1,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Softened, for garlic herb butter"
                },
                {
                    name: "Garlic",
                    quantity: 2,
                    extraInstructions: "Cloves, minced, for garlic herb butter"
                },
                {
                    name: "Rosemary",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "Finely chopped, for garlic herb butter"
                },
                {
                    name: "Thyme",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "Finely chopped, for garlic herb butter"
                },
                {
                    name: "Salt",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "For garlic herb butter"
                },
                {
                    name: "Black Pepper",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "For garlic herb butter"
                },
                {
                    name: "Boneless Prime Rib Roast",
                    quantity: 5,
                    quantityUnit: Unit.LB,
                    extraInstructions: "5-7 lbs"
                },
                {
                    name: "All-Purpose Flour",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Beef Stock",
                    quantity: 2,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Mashed Potatoes",
                    extraInstructions: "To serve"
                },
                {
                    name: "Green Beans",
                    extraInstructions: "To serve"
                }
            ],
            instructions: [
                "Preheat oven to 500°F",
                "Mix the butter, garlic, herbs, salt, & pepper",
                "Rub the herb butter all over the roast & then place on a roasting tray with a rack",
                "Bake 5 minutes per pound",
                "Turn off heat and let the meat sit for 2 hours. DO NOT open oven door",
                "Once the 2 hours are up, remove the roast from the oven & pour the pan drippings into a saucepan over medium heat",
                "Add the flour, whisking until there are no lumps, then add the beef stock, stirring and bringing the sauce to a boil. Remove from heat and strain into gravy bowl"
            ]
        },
        {
            slug: "chicken-ramen-skillet",
            name: "Chicken Ramen Skillet",
            ingredients: [
                {
                    name: "Soy Sauce",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Honey",
                    quantity: 0.25,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Rice Wine Vinegar",
                    quantity: 0.25,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Garlic",
                    quantity: 2,
                    extraInstructions: "Cloves, minced"
                },
                {
                    name: "Green Onions",
                    quantity: 4,
                    extraInstructions: "Thinly sliced"
                },
                {
                    name: "Sriracha",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Sesame Seeds",
                    quantity: 2,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Salt",
                    extraInstructions: "To taste"
                },
                {
                    name: "Vegetable Oil",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Boneless Chicken Breast",
                    quantity: 0.75,
                    quantityUnit: Unit.LB,
                    extraInstructions: "Cut into 1\" cubes"
                },
                {
                    name: "Black Pepper",
                    extraInstructions: "Freshly ground, to taste"
                },
                {
                    name: "Cornstarch",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Broccoli Florets",
                    quantity: 12,
                    quantityUnit: Unit.OZ
                },
                {
                    name: "Ramen Noodles",
                    quantity: 1,
                    extraInstructions: "Packet, cooked"
                }
            ],
            instructions: [
                "Whisk soy sauce, rice wine vinegar, garlic, 1/4 cup of the sliced green onions, sriracha, sesame seeds and a pinch of salt. Set aside",
                "Season the chicken with salt and pepper and toss in the corn starch until evenly coated. Cook in heated oil in skillet until golden brown and crispy, about 8 to 10 minutes. Drain on paper towel",
                "In the same honey sauce, bring to a simmer, add in broccoli and cook until tender, about 2 min. Add the cooked chicken, and noodles. Toss to coat"
            ]
        },
        {
            slug: "beef-ramen-skillet",
            name: "Beef Ramen Skillet",
            ingredients: [
                {
                    name: "Sirloin or Flank Steak",
                    quantity: 0.75,
                    quantityUnit: Unit.LB
                },
                {
                    name: "Soy Sauce",
                    quantity: 0.33,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Garlic",
                    quantity: 2,
                    extraInstructions: "Cloves, minced"
                },
                {
                    name: "Lime",
                    quantity: 1,
                    extraInstructions: "Juiced"
                },
                {
                    name: "Honey",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Cayenne Pepper",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Onion",
                    quantity: 1,
                    extraInstructions: "Diced"
                },
                {
                    name: "Bell Peppers",
                    quantity: 2,
                    extraInstructions: "Sliced"
                },
                {
                    name: "Broccoli",
                    quantity: 1,
                    extraInstructions: "Head"
                },
                {
                    name: "Ramen Noodles",
                    quantity: 3,
                    extraInstructions: "Packets, cooked"
                }
            ],
            instructions: [
                "Sear the steak in skillet, then transfer to a cutting board, let rest for 5 minutes, slice",
                "Whisk together soy sauce, garlic, lime juice, honey, and Cayenne, set aside. Add onion, peppers, and broccoli to skillet and cook until tender, 6 minutes, then add soy sauce mixture and stir until fully coated",
                "Add cooked Ramen and steak. Toss until combined. Serve"
            ]
        },
        {
            slug: "homemade-cinnamon-rolls",
            name: "Homemade Cinnamon Rolls",
            ingredients: [
                {
                    name: "Butter",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Melted"
                },
                {
                    name: "2% Milk",
                    quantity: 2,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Warm to touch (100-110°F)"
                },
                {
                    name: "Granulated Sugar",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Active Dry Yeast",
                    quantity: 1,
                    extraInstructions: "1 packet"
                },
                {
                    name: "All-Purpose Flour",
                    quantity: 5,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Divided (4 cups + 3/4 cup + extra for kneading)"
                },
                {
                    name: "Baking Powder",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Salt",
                    quantity: 2,
                    quantityUnit: Unit.TEASPOON
                },
            ],
            additionalIngredientGroups: [
                {
                    name: "Frosting",
                    ingredients: [
                        {
                            name: "Cream Cheese",
                            quantity: 4,
                            quantityUnit: Unit.OZ
                        },
                        {
                            name: "Butter",
                            quantity: 0.75,
                            quantityUnit: Unit.CUP,
                            extraInstructions: "Melted"
                        },
                        {
                            name: "Brown Sugar",
                            quantity: 0.75,
                            quantityUnit: Unit.CUP,
                        },
                        {
                            name: "Cinnamon",
                            quantity: 2,
                            quantityUnit: Unit.TABLESPOON,
                        }
                    ]
                }
            ],
            instructions: [
                "Generously butter pan",
                "Whisk together warm milk, melted butter, and granulated sugar. The mixture should be just warm but not hot",
                "Add yeast, sprinkle over top. Let sit for 1 minute",
                "Add 4 cups of all purpose flour to the milk mixture and mix with a wooden spoon until just combined",
                "Cover with towel or plastic wrap and set in warm place to rise for 1 hour",
                "Preheat oven to 350°F",
                "After 1 hour the dough should have nearly doubled in size. Remove the towel & add 3/4 cup of flour, the teaspoon of baking powder and 2 teaspoons of salt. Stir well, then turn out onto a well floured surface",
                "Knead the dough lightly, adding additional flour as necessary, until the dough loses its stickiness and does not stick to the surface",
                "Roll the dough out into a large rectangle, about ½ inch thick. (If corners crumble, ensure they are shaped even)",
                "Spread the soft butter evenly over the dough",
                "Sprinkle evenly with brown sugar and generous sprinkling of cinnamon. Press mixture into the butter",
                "Roll the dough, forming a log, and pinch the seam closed. Place seam side down",
                "Trim off any unevenness on the ends",
                "Cut the log into 1½\" thick pieces",
                "Place the cinnamon rolls on buttered baking pan, cover with plastic wrap and place in warm place to rise for 30 minutes",
                "Remove the plastic wrap, bake in preheated oven for 25–30 minutes until golden brown",
                "Prepare the frosting and after removing the cinnamon rolls from oven, drizzle the frosting over the warm rolls"
            ],
            notes: "Note: Frosting recipe not included in original instructions"
        },
        {
            slug: "lemon-frosting",
            name: "Lemon Frosting",
            ingredients: [
                {
                    name: "Powdered Sugar",
                    quantity: 3,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Butter",
                    quantity: 0.33,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "5 TBS + 1 tsp"
                },
                {
                    name: "Lemon Juice",
                    quantity: 3,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Lemon Zest",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                }
            ],
            instructions: [
                "Beat butter, lemon zest, and lemon juice in medium bowl with mixer on medium speed for 30 seconds",
                "Gradually beat in powdered sugar",
                "Beat 2 minutes or longer until light and fluffy"
            ]
        },
        {
            slug: "one-pan-garlic-herb-chicken-and-asparagus",
            name: "One Pan Garlic Herb Chicken and Asparagus",
            ingredients: [
                {
                    name: "Chicken",
                    quantity: 3,
                    extraInstructions: "3-6 chicken thighs or boneless chicken breasts"
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
                    name: "Asparagus",
                    quantity: 1,
                    quantityUnit: Unit.LB,
                    extraInstructions: "Ends trimmed"
                },
                {
                    name: "Butter",
                    quantity: 3,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "Divided"
                },
                {
                    name: "Garlic",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "Minced"
                },
                {
                    name: "Basil",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Oregano",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Thyme",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Onion Powder",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                }
            ],
            instructions: [
                "Season Chicken with salt and pepper on both sides. Melt 2 TBS of butter in a large pan over medium-high heat. Stir in garlic and herbs and cook another minute until the garlic is fragrant",
                "Reduce heat to medium, add chicken to pan and cook for 5-7 minutes, then flip and cook for another 5 minutes (chicken should be nearly, but not completely cooked)",
                "Push chicken over to the side of pan, add remaining 1 TBS of butter. Once butter is melted, add the asparagus. Season asparagus with salt and pepper. Cook, rotating throughout, for 4-6 minutes until asparagus is tender and chicken is cooked through",
                "Serve immediately"
            ]
        },
        {
            slug: "homemade-oatmeal-cream-pies",
            name: "Homemade Oatmeal Cream Pies",
            ingredients: [
                {
                    name: "Light Brown Sugar",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Butter",
                    quantity: 1,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Melted"
                },
                {
                    name: "Molasses",
                    quantity: 0.33,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Vanilla Extract",
                    quantity: 2,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Eggs",
                    quantity: 2
                },
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
                    name: "Cinnamon",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Salt",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Oats",
                    quantity: 2,
                    quantityUnit: Unit.CUP
                }
            ],
            additionalIngredientGroups: [
                {
                    name: "Filling",
                    ingredients: [
                        {
                            name: "Butter",
                            quantity: 0.5,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Milk",
                            quantity: 1,
                            quantityUnit: Unit.TABLESPOON
                        },
                        {
                            name: "Vanilla Extract",
                            quantity: 1,
                            quantityUnit: Unit.TEASPOON
                        },
                        {
                            name: "Marshmallow Fluff",
                            quantity: 1,
                            quantityUnit: Unit.CUP
                        }
                    ]
                }
            ],
            instructions: [
                "Preheat oven to 350°F",
                "Mix butter and brown sugar",
                "Add molasses, vanilla, and eggs",
                "Sift in flour, baking soda, salt, and cinnamon, mix until just combined",
                "Add the oats and mix until incorporated. Be careful not to overmix the batter as it might result in tougher cookies",
                "Using a ice cream scoop (or about 2 TBS) scoop out cookie onto a baking sheet lined with parchment paper, leaving about 3 inches between each one",
                "Bake 7-9 minutes",
                "Make the filling by beating all filling ingredients until well combined",
                "Once the cookies are cooled, put a spoonful of filling on one cookie, and sandwich it with another"
            ]
        },
        {
            slug: "microwave-peanut-brittle",
            name: "Microwave Peanut Brittle",
            ingredients: [
                {
                    name: "Peanuts",
                    quantity: 1.5,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Roasted"
                },
                {
                    name: "Sugar",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Corn Syrup",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Salt",
                    quantity: 0.125,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Vanilla Extract",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Butter",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Baking Soda",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                }
            ],
            instructions: [
                "Stir peanuts, sugar, corn syrup, and salt together in 1½ quart casserole dish",
                "Cook 8 minutes on high, stirring after 4 minutes",
                "Add butter and vanilla. Cook on high for 2 more minutes",
                "Add baking soda and stir until light",
                "Pour into a greased baking sheet and let set until it hardens",
                "Break into pieces and store in an air tight container"
            ],
            notes: "Pecans can be used instead of peanuts."
        },
        {
            slug: "garlic-chicken-stir-fry",
            name: "Garlic Chicken Stir Fry",
            ingredients: [
                {
                    name: "Oil",
                    quantity: 1.33,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "1 TBS + 1 tsp"
                },
                {
                    name: "Broccoli",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Mushrooms",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Yellow Bell Pepper",
                    quantity: 1
                },
                {
                    name: "Boneless Skinless Chicken Breast",
                    quantity: 1,
                    quantityUnit: Unit.LB
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
                    name: "Garlic",
                    quantity: 4,
                    extraInstructions: "Cloves, minced"
                },
                {
                    name: "Chicken Broth",
                    quantity: 0.75,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Sugar",
                    quantity: 1.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Soy Sauce",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Sesame Oil",
                    quantity: 2,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Cornstarch",
                    quantity: 2,
                    quantityUnit: Unit.TEASPOON
                }
            ],
            instructions: [
                "Heat 1 tsp of oil in a large pan or wok over medium high heat",
                "Add broccoli, mushrooms, and bell pepper. Cook for 5-6 minutes and transfer it back to the pan",
                "Wipe the pan clean, then heat 1 TBS of oil over high heat",
                "Add the chicken to the pan. Season with salt and pepper",
                "Cook for 3-4 minutes per side, or until chicken is browned and cooked through",
                "Lower heat to low. Add the garlic and cook for 30 seconds",
                "Add the vegetables to the pan",
                "In a small bowl whisk together the chicken broth, sugar, soy sauce, sesame oil, and cornstarch",
                "Pour the sauce over the chicken mixture and bring to a simmer",
                "Simmer for 1 to 2 minutes until sauce has just thickened",
                "Serve with rice"
            ]
        },
        {
            slug: "chex-mix",
            name: "Chex Mix (Mom's Recipe)",
            ingredients: [
                {
                    name: "Small Stick Pretzels",
                    quantity: 2,
                    quantityUnit: Unit.PACKAGE,
                    extraInstructions: "Small packages"
                },
                {
                    name: "Rice Chex",
                    quantity: 1,
                    extraInstructions: "Large box"
                },
                {
                    name: "Wheat Chex",
                    quantity: 1,
                    extraInstructions: "Large box"
                },
                {
                    name: "Cheerios",
                    quantity: 1,
                    quantityUnit: Unit.PACKAGE
                },
                {
                    name: "Dry Roasted Peanuts",
                    quantity: 1,
                    quantityUnit: Unit.LB
                },
                {
                    name: "Onion Salt",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Celery Salt",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Garlic Salt",
                    quantity: 2.33,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Worcestershire Sauce",
                    quantity: 0.67,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Butter",
                    quantity: 1,
                    quantityUnit: Unit.LB,
                    extraInstructions: "Melted"
                }
            ],
            instructions: [
                "Combine Worcestershire sauce, salts and butter. Mix well",
                "Combine cereals, pretzels, and nuts in large roasting pan. Pour wet mixture over dry mix and mix gently",
                "Heat in a 200 degree oven for 3 hours, stirring gently every 15 minutes",
                "Store in zip lock bags or a coffee can to keep fresh"
            ]
        },
        {
            slug: "crock-pot-smoked-sausage-and-cabbage",
            name: "Crock Pot Smoked Sausage and Cabbage",
            ingredients: [
                {
                    name: "Potato",
                    quantity: 1.5,
                    extraInstructions: "Peeled and cubed"
                },
                {
                    name: "Onion",
                    quantity: 1,
                    extraInstructions: "Chopped"
                },
                {
                    name: "Smoked Sausage",
                    quantity: 1,
                    quantityUnit: Unit.PACKAGE,
                    extraInstructions: "Sliced"
                },
                {
                    name: "Baby Carrots",
                    extraInstructions: "About a handful"
                },
                {
                    name: "Chicken Broth",
                    quantity: 3,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Worcestershire Sauce",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Ground Cumin",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
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
                "Put all ingredients in a 6 quart slow cooker",
                "Cook on low 5 to 6 hours"
            ]
        },
        {
            slug: "cabbage-and-sausage-foil-packs",
            name: "Cabbage and Sausage Foil Packs",
            ingredients: [
                {
                    name: "Polish Sausage",
                    quantity: 1,
                    quantityUnit: Unit.LB,
                    extraInstructions: "Cut into 1 1/2\" pieces"
                },
                {
                    name: "Cabbage",
                    quantity: 0.5,
                    extraInstructions: "Head, cut into 1/2\" wedges"
                },
                {
                    name: "Red Potatoes",
                    quantity: 20,
                    extraInstructions: "Small, quartered"
                },
                {
                    name: "Onion",
                    quantity: 1,
                    extraInstructions: "Small, sliced"
                },
                {
                    name: "Garlic Butter",
                    quantity: 8,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "Store bought or home made, 2 TBS per packet"
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
                    name: "Ice Cubes",
                    quantity: 4
                }
            ],
            instructions: [
                "Preheat your grill to 400 degrees",
                "Cut 4 foil sheets 18 x 12 inches. Spray with non-stick spray",
                "Divide the cabbage, potatoes, and onion over the foil sheets",
                "Add 1 ice cube to each mound",
                "Evenly divide the sausage between the packets and top with garlic butter (2 TBS per packet). Salt and pepper",
                "Seal each packet well and place on grill",
                "Grill for 50 minutes, flipping the packet every 15 minutes",
                "Allow to rest 10 minutes before serving",
                "Serve with sour cream if desired",
                "These can be baked in a 425° oven for 35 to 40 minutes or until potatoes are fork tender"
            ]
        },
        {
            slug: "old-fashion-homemade-eggnog",
            name: "Old Fashion Homemade Eggnog",
            ingredients: [
                {
                    name: "Sugar",
                    quantity: 1.33,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Eggs",
                    quantity: 8,
                    extraInstructions: "Separated"
                },
                {
                    name: "Salt",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Milk",
                    quantity: 16,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "1 gallon"
                },
                {
                    name: "Nutmeg",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Cinnamon",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Sugar",
                    quantity: 12,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Vanilla",
                    quantity: 4,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Whipped Cream",
                    extraInstructions: "For topping"
                }
            ],
            instructions: [
                "Beat 1⅓ cup sugar into egg yolks, place in sauce pan",
                "Add salt and stir in milk",
                "Cook over medium heat, stirring constantly until milk is scalded",
                "Cool",
                "Beat egg whites until foamy",
                "Combine 12 TBS sugar, nutmeg, cinnamon, add to egg whites gradually, beating to soft peaks",
                "Fold into milk mixture & mix thoroughly",
                "Add vanilla",
                "Chill for 3-5 days to develop flavor",
                "Pour into punch bowl",
                "Set top of each cup with whipped cream"
            ]
        },
        {
            slug: "vanilla-fudge",
            name: "Vanilla Fudge",
            ingredients: [
                {
                    name: "Evaporated Milk",
                    quantity: 6,
                    quantityUnit: Unit.OZ
                },
                {
                    name: "Sugar",
                    quantity: 3,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Butter",
                    quantity: 1.5,
                    quantityUnit: Unit.STICK
                },
                {
                    name: "Marshmallow Cream",
                    quantity: 7,
                    quantityUnit: Unit.OZ,
                    extraInstructions: "Jar"
                }
            ]
        },
        {
            slug: "southwest-egg-bake",
            name: "Southwest Egg Bake",
            ingredients: [
                {
                    name: "Sausage",
                    quantity: 24,
                    quantityUnit: Unit.OZ,
                    extraInstructions: "Crumbled"
                },
                {
                    name: "Bacon",
                    quantity: 8,
                    quantityUnit: Unit.SLICE,
                    extraInstructions: "Cooked until crispy, crumbled"
                },
                {
                    name: "Eggs",
                    quantity: 15
                },
                {
                    name: "Milk",
                    quantity: 0.75,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "2%"
                },
                {
                    name: "Sour Cream",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Cheddar Cheese",
                    quantity: 2,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Shredded"
                },
                {
                    name: "Green Chilies",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Diced"
                },
                {
                    name: "Green Onions",
                    quantity: 0.75,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Sliced"
                },
                {
                    name: "Garlic Powder",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Salt",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Black Pepper",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                }
            ],
            instructions: [
                "Preheat oven to 325°",
                "In a large skillet crumble sausage, and cook until done. Drain grease and set aside",
                "In another skillet cook bacon until crispy, place on paper towel. Crumble after bacon has cooled",
                "In a large mixing bowl, add eggs, milk, sour cream, and seasonings. Whisk until well blended",
                "Add cheddar cheese, diced green chilies, green onions, and mix until well combined",
                "Add sausage and bacon to egg mixture",
                "Pour into a greased 9X13 baking dish",
                "Bake uncovered for approximately 55-60 minutes or until eggs are done!",
                "Serve with fresh avocados"
            ]
        },
        {
            slug: "garlic-roasted-potatoes",
            name: "Garlic Roasted Potatoes",
            ingredients: [
                {
                    name: "Small Red or White Potatoes",
                    quantity: 3,
                    quantityUnit: Unit.LB,
                    extraInstructions: "Cut in ½ or quarters"
                },
                {
                    name: "Olive Oil",
                    quantity: 0.25,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Kosher Salt",
                    quantity: 1.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Black Pepper",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON,
                    extraInstructions: "Fresh"
                },
                {
                    name: "Garlic",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "Minced"
                },
                {
                    name: "Parsley",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "Minced"
                }
            ],
            instructions: [
                "Preheat oven to 400°",
                "Cut the potatoes in ½ or quarters and place in a bowl with the olive oil, salt, pepper, and garlic; toss until the potatoes are well coated",
                "Transfer the potatoes to a sheet pan and spread out into 1 layer",
                "Roast in the oven for 45 minutes to 1 hour until browned and crisp",
                "Flip twice with spatula during cooking in order to ensure even browning",
                "Remove the potatoes from the oven, toss with parsley, season to taste, and serve hot"
            ]
        },
        {
            slug: "cheesy-au-gratin-potatoes",
            name: "Cheesy au Gratin Potatoes",
            ingredients: [
                {
                    name: "Potatoes",
                    quantity: 6,
                    extraInstructions: "Medium, peeled and cut into ⅛\" slices"
                },
                {
                    name: "Butter",
                    quantity: 0.25,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Onion",
                    quantity: 1,
                    extraInstructions: "Medium"
                },
                {
                    name: "Flour",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Salt",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Black Pepper",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Milk",
                    quantity: 2,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Shredded Cheese",
                    quantity: 2,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Bread Crumbs",
                    quantity: 0.25,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Paprika",
                    extraInstructions: "To taste"
                }
            ],
            instructions: [
                "Heat oven to 375°",
                "Peel and cut potatoes into ⅛\" slices",
                "Melt butter in a 2 qt. saucepan over medium heat",
                "Cook onions in butter about 2 minutes, stirring occasionally, until tender",
                "Stir in flour, salt, and pepper",
                "Cook stirring constantly, until boiling; remove from heat",
                "Stir in milk and 1½ cups cheese",
                "Heat to boiling stirring constantly",
                "Boil and stir 1 minute",
                "Spread potatoes in ungreased Casserole (1½ qt dish)",
                "Pour cheese over potatoes",
                "Bake uncovered, 1 hour",
                "Mix remaining cheese and bread crumbs; spread over potatoes"
            ]
        },
        {
            slug: "brown-sugar-muffins",
            name: "Brown Sugar Muffins",
            ingredients: [
                {
                    name: "Light Brown Sugar",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Butter",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Melted"
                },
                {
                    name: "Milk",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Vanilla",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
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
                    name: "Salt",
                    quantity: 0.25,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Chopped Nuts",
                    quantity: 0.25,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Optional"
                }
            ],
            instructions: [
                "Preheat oven to 375°",
                "In large bowl stir the brown sugar and the butter together",
                "Add the milk, eggs, vanilla; stir to combine",
                "Add the flour, baking soda, salt; mix until incorporated",
                "Nuts can be added, if using",
                "Fill muffin cups 2/3 full",
                "Bake in preheated oven for 15-20 minutes or until tester comes out clean"
            ]
        },
        {
            slug: "broccoli-cheddar-soup",
            name: "Broccoli Cheddar Soup",
            ingredients: [
                {
                    name: "Chicken Broth",
                    quantity: 4,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Frozen Broccoli",
                    quantity: 10,
                    quantityUnit: Unit.OZ,
                    extraInstructions: "Bag"
                },
                {
                    name: "Evaporated Milk",
                    quantity: 15,
                    quantityUnit: Unit.OZ,
                    extraInstructions: "Can"
                },
                {
                    name: "Onion",
                    quantity: 1,
                    extraInstructions: "Chopped"
                },
                {
                    name: "Cheddar Cheese",
                    quantity: 3,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Shredded"
                },
                {
                    name: "Heavy Cream",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Optional, can use milk instead"
                },
                {
                    name: "Rosemary",
                    quantity: 2,
                    quantityUnit: Unit.TEASPOON,
                    extraInstructions: "Chopped, optional"
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
                "Combine onions, broth, and broccoli in a large pot over medium-high heat",
                "Cook 15 minutes or until veggies have softened",
                "Season with salt and pepper, then reduce heat to medium-low, stir in evaporated milk and cheese",
                "Cook for another 10 minutes, stirring occasionally, then transfer to bowls"
            ]
        },
        {
            slug: "flank-steak-stir-fry",
            name: "Flank Steak Stir Fry",
            ingredients: [
                {
                    name: "Flank Steak",
                    quantity: 1,
                    quantityUnit: Unit.LB
                },
                {
                    name: "Salt",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Black Pepper",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Broccoli",
                    quantity: 2,
                    quantityUnit: Unit.CUP
                }
            ],
            additionalIngredientGroups: [
                {
                    name: "Stir Fry Sauce",
                    ingredients: [
                        {
                            name: "Soy Sauce",
                            quantity: 0.5,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Honey",
                            quantity: 0.25,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Garlic",
                            quantity: 2,
                            extraInstructions: "Cloves"
                        },
                        {
                            name: "Ginger",
                            quantity: 1,
                            quantityUnit: Unit.TEASPOON
                        },
                        {
                            name: "Sesame Seeds",
                            quantity: 1,
                            quantityUnit: Unit.TABLESPOON
                        }
                    ]
                }
            ],
            instructions: [
                "Mix together all sauce ingredients in a small bowl",
                "Heat oil in a non-stick pan and add beef stirring until brown",
                "Pour sauce into pan and stir to coat meat",
                "Once the sauce is bubbling, add the veggies to the pan and stir again to coat",
                "Cook until meat is cooked through and veggies are soft",
                "Serve over rice or alone"
            ],
            notes: "Makes 2 servings"
        },
        {
            slug: "chicken-mushroom-stir-fry",
            name: "Chicken and Mushroom Stir Fry",
            ingredients: [
                {
                    name: "Chicken Breast",
                    quantity: 1,
                    quantityUnit: Unit.LB,
                    extraInstructions: "Cubed"
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
                    name: "Muscatel Leaves",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Dried Mushrooms",
                    quantity: 8,
                    quantityUnit: Unit.OZ
                },
                {
                    name: "Oil",
                    quantity: 3,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "For frying"
                }
            ],
            additionalIngredientGroups: [
                {
                    name: "Stir Fry Sauce",
                    ingredients: [
                        {
                            name: "Garlic",
                            quantity: 3,
                            extraInstructions: "Cloves, minced"
                        },
                        {
                            name: "Ginger",
                            quantity: 1,
                            quantityUnit: Unit.TABLESPOON,
                            extraInstructions: "Minced"
                        },
                        {
                            name: "Sesame Oil",
                            quantity: 2,
                            quantityUnit: Unit.TEASPOON
                        },
                        {
                            name: "Soy Sauce",
                            quantity: 0.33,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Brown Sugar",
                            quantity: 1,
                            quantityUnit: Unit.TABLESPOON
                        },
                        {
                            name: "Chicken Broth",
                            quantity: 1,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Flour",
                            quantity: 0.25,
                            quantityUnit: Unit.CUP
                        }
                    ]
                }
            ],
            instructions: [
                "In a large pan on medium high heat, add 1 tablespoon of oil",
                "Once the oil is hot, add chicken, season with salt and pepper, sauté chicken until cooked through and browned",
                "Remove from pan, and set aside",
                "In the same pan, heat 1 tablespoon and add mushrooms",
                "When the mushrooms start to soften, add Muscatel and stir-fry until the Muscatel is tender",
                "Remove cooked mushrooms and Muscatel from the pan and set aside",
                "Add 1 tablespoon of oil to the pan and sauté garlic and ginger until fragrant",
                "Add the remaining sauce ingredients and stir until smooth",
                "Return the chicken and veggies to the sauce, and stir until heated thoroughly",
                "Serve with rice or noodles"
            ],
            notes: "Makes 6 servings"
        },
        {
            slug: "pork-asparagus-stir-fry",
            name: "Pork and Asparagus Stir Fry",
            ingredients: [
                {
                    name: "Pork Loin",
                    quantity: 1,
                    quantityUnit: Unit.LB
                },
                {
                    name: "Salt",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Black Pepper",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Asparagus",
                    quantity: 1,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Trimmed and cut"
                },
                {
                    name: "Red Pepper",
                    quantity: 1,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Diced"
                }
            ],
            additionalIngredientGroups: [
                {
                    name: "Stir Fry Sauce",
                    ingredients: [
                        {
                            name: "Soy Sauce",
                            quantity: 0.5,
                            quantityUnit: Unit.CUP
                        },
                        {
                            name: "Honey",
                            quantity: 1,
                            quantityUnit: Unit.TABLESPOON
                        },
                        {
                            name: "Garlic",
                            quantity: 2,
                            extraInstructions: "Cloves, minced"
                        },
                        {
                            name: "Ginger",
                            quantity: 1,
                            quantityUnit: Unit.TEASPOON
                        },
                        {
                            name: "Sesame Seeds",
                            quantity: 1,
                            quantityUnit: Unit.TABLESPOON
                        }
                    ]
                }
            ],
            instructions: [
                "Mix together all sauce ingredients",
                "Heat oil in a nonstick pan, add pork, stirring until cooked",
                "Pour sauce into pan and stir until meat is coated",
                "Once the sauce is bubbling, add the veggies to the pan and stir again to coat",
                "Cook until veggies are soft and meat is cooked through"
            ],
            notes: "Makes 2 servings"
        },
        {
            slug: "sheet-pan-lemon-parmesan-garlic-chicken",
            name: "Sheet Pan Lemon Parmesan Garlic Chicken",
            ingredients: [
                {
                    name: "Egg",
                    quantity: 1,
                    extraInstructions: "Large"
                },
                {
                    name: "Lemon Juice",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Garlic",
                    quantity: 2,
                    quantityUnit: Unit.TEASPOON,
                    extraInstructions: "Minced"
                },
                {
                    name: "Parsley",
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
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Breadcrumbs",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Parmesan Cheese",
                    quantity: 0.75,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Grated"
                },
                {
                    name: "Chicken Breasts",
                    quantity: 4,
                    extraInstructions: "Boneless, or thighs"
                }
            ],
            additionalIngredientGroups: [
                {
                    name: "For the Veggies",
                    ingredients: [
                        {
                            name: "Baby Potatoes",
                            quantity: 9,
                            extraInstructions: "Quartered (8-10 potatoes)"
                        },
                        {
                            name: "Butter",
                            quantity: 2,
                            quantityUnit: Unit.CUP,
                            extraInstructions: "Melted"
                        },
                        {
                            name: "Garlic",
                            quantity: 2,
                            quantityUnit: Unit.TEASPOON,
                            extraInstructions: "Minced"
                        },
                        {
                            name: "Salt",
                            extraInstructions: "To taste"
                        },
                        {
                            name: "Green Beans",
                            quantity: 1,
                            quantityUnit: Unit.LB,
                            extraInstructions: "Cut into thirds"
                        }
                    ]
                }
            ],
            instructions: [
                "Preheat oven to 350°",
                "Lightly grease a baking tray with cooking spray",
                "In a large bowl, whisk together the egg, lemon juice, 2 tsp. garlic, parsley, salt, and pepper",
                "Dip the Chicken into egg mixture, cover and allow to marinade in refrigerator for 30 minutes to an hour",
                "In another bowl, combine the breadcrumbs with the parmesan cheese",
                "Dredge the egg coated chicken in the bread crumbs / parmesan mixture. Lightly press to evenly coat",
                "Place chicken on baking sheet and spray lightly with cooking spray",
                "Arrange the potatoes around the chicken in a single layer",
                "Mix together the butter, 2 tsp garlic and salt to taste",
                "Pour half of the butter mixture over the potatoes. Toss to evenly coat",
                "Bake in preheated oven for 15 minutes",
                "Remove the pan from oven, carefully flip each chicken breast",
                "Move the potatoes to one side and place the green beans around the chicken on the other side of the pan",
                "Pour remaining butter, garlic mixture over the beans and return the pan to the oven",
                "Cook until chicken is cooked through and potatoes are cooked"
            ]
        },
        {
            slug: "favorite-peach-cobbler",
            name: "Favorite Peach Cobbler",
            ingredients: [
                {
                    name: "Butter",
                    quantity: 1,
                    quantityUnit: Unit.STICK
                },
                {
                    name: "Sugar",
                    quantity: 1.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Flour",
                    quantity: 1,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Baking Powder",
                    quantity: 1.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Milk",
                    quantity: 0.75,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Sliced Peaches",
                    quantity: 30,
                    quantityUnit: Unit.OZ,
                    extraInstructions: "Can"
                },
                {
                    name: "Cinnamon",
                    quantity: 0.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Nutmeg",
                    quantity: 0.33,
                    quantityUnit: Unit.TEASPOON
                }
            ],
            instructions: [
                "Preheat oven to 350°",
                "Melt butter in a 9x13 casserole dish",
                "Separate ½ cup sugar, also cinnamon and nutmeg",
                "Separate syrup from peaches",
                "Put the peaches in the casserole dish with the melted butter",
                "Pour the batter over the top of the peaches",
                "Mix the cinnamon, nutmeg, and ½ cup sugar and sprinkle over top of the batter",
                "Bake for 45 minutes to 1 hour or until top crust is golden brown"
            ]
        },
        {
            slug: "garlic-roasted-potatoes-ii",
            name: "Garlic Roasted Potatoes",
            ingredients: [
                {
                    name: "Small Red or White Potatoes",
                    quantity: 3,
                    quantityUnit: Unit.LB,
                    extraInstructions: "Cut in half or quarters"
                },
                {
                    name: "Olive Oil",
                    quantity: 0.25,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Salt",
                    quantity: 1.5,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Black Pepper",
                    quantity: 1,
                    quantityUnit: Unit.TEASPOON
                },
                {
                    name: "Minced Garlic",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "6 cloves"
                },
                {
                    name: "Fresh Parsley",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON,
                    extraInstructions: "Minced"
                }
            ],
            instructions: [
                "Cut the potatoes in half or quarters and place in a bowl with the olive oil, salt, pepper, and garlic",
                "Toss until the potatoes are well coated",
                "Transfer the potatoes to a sheet pan and spread out into 1 layer",
                "Roast in the oven for 45 minutes to 1 hour or until browned and crisp",
                "Flip twice with a spatula during cooking in order to ensure even browning",
                "Remove the potatoes from the oven, toss with parsley, season to taste, and serve hot"
            ]
        },
        {
            slug: "oven-fried-chicken",
            name: "Oven Fried Chicken",
            ingredients: [
                {
                    name: "Chicken",
                    quantity: 3,
                    quantityUnit: Unit.LB,
                    extraInstructions: "Approximate weight"
                },
                {
                    name: "Buttermilk",
                    quantity: 1,
                    quantityUnit: Unit.QUART
                },
                {
                    name: "Flour",
                    quantity: 2,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Salt",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Black Pepper",
                    quantity: 0.5,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Vegetable Oil",
                    extraInstructions: "Enough to fill pan to 1 inch depth"
                }
            ],
            instructions: [
                "Place the Chicken pieces in a large bowl and pour the buttermilk over them",
                "Cover and refrigerate overnight",
                "Preheat oven to 350°",
                "Combine the flour, salt, and pepper in a large bowl",
                "Take the chicken out of the buttermilk and coat each piece thoroughly with the flour mixture",
                "Pour the oil into a heavy bottom pan to a depth of 1 inch and heat to 360° on a thermometer",
                "Working in batches, carefully place several pieces of chicken in the oil and fry for about 3 minutes on each side or until the coating is a light golden brown (it will continue to brown in the oven)",
                "Don't crowd the pieces",
                "Remove the Chicken from the oil and place each piece on a metal baking rack set on a sheet pan",
                "Allow the oil to return to 360° before frying the next batch",
                "Bake all fried pieces for 35/40 minutes"
            ]
        },
        {
            slug: "mediterranean-pork-loin-marinade",
            name: "Mediterranean Pork Loin Marinade",
            ingredients: [
                {
                    name: "Olive Oil",
                    quantity: 0.33,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Lemon Juice",
                    quantity: 0.25,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Parsley",
                    quantity: 2,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Oregano",
                    quantity: 1,
                    quantityUnit: Unit.TABLESPOON
                },
                {
                    name: "Garlic",
                    quantity: 2,
                    quantityUnit: Unit.PIECE,
                    extraInstructions: "Cloves, minced"
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
            ]
        },
        {
            slug: "chocolate-brownie-cake",
            name: "Chocolate Brownie Cake",
            ingredients: [
                {
                    name: "Chocolate Cake Mix",
                    quantity: 1,
                    quantityUnit: Unit.PACKAGE
                },
                {
                    name: "Chocolate Fudge Brownie Mix",
                    quantity: 1,
                    quantityUnit: Unit.PACKAGE
                },
                {
                    name: "Eggs",
                    quantity: 4,
                    quantityUnit: Unit.PIECE
                },
                {
                    name: "Oil or Butter",
                    quantity: 1,
                    quantityUnit: Unit.CUP,
                    extraInstructions: "Or 1/2 stick melted butter"
                },
                {
                    name: "Water",
                    quantity: 0.25,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Chocolate Fudge Frosting",
                    quantity: 1,
                    quantityUnit: Unit.CAN,
                    extraInstructions: "For glaze"
                }
            ],
            instructions: [
                "Mix all ingredients together",
                "Preheat oven to 350°",
                "Spray a 9X13 or a Bundt cake pan with non-stick spray",
                "Put mix in pan",
                "Bake at 50-55 minutes",
                "Let rest in pan for 10 minutes, flip out on a rack to cool fully",
                "For the glaze, open a can of chocolate fudge frosting, place in a bowl and heat in microwave oven for 45 seconds",
                "Drizzle over cake"
            ]
        },
        {
            slug: "israeli-salad",
            name: "Israeli Salad",
            ingredients: [
                {
                    name: "English Cucumber",
                    quantity: 1,
                    // quantityUnit: Unit.PIECE
                },
                {
                    name: "Purple Onion",
                    quantity: 1,
                    // quantityUnit: Unit.PIECE
                },
                {
                    name: "Tomato",
                    quantity: 1,
                    // quantityUnit: Unit.PIECE
                },
                {
                    name: "Lemon Juice",
                    extraInstructions: "To taste"
                },
                {
                    name: "Olive Oil",
                    extraInstructions: "To taste"
                },
                {
                    name: "Salt",
                    extraInstructions: "To taste"
                },
                {
                    name: "Parsley",
                    extraInstructions: "Chopped, to taste"
                }
            ]
        },
        {
            slug: "cheese-and-beef-pasta-shells",
            name: "Cheese and Beef Pasta Shells",
            ingredients: [
                {
                    name: "Jumbo Shells",
                    quantity: 24,
                    quantityUnit: Unit.PIECE,
                    extraInstructions: "Uncooked"
                },
                {
                    name: "Ground Beef",
                    quantity: 1,
                    quantityUnit: Unit.LB
                },
                {
                    name: "Tomato Paste",
                    quantity: 1,
                    quantityUnit: Unit.CAN
                },
                {
                    name: "Water",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Chive and Onion Cream Cheese",
                    quantity: 8,
                    quantityUnit: Unit.OZ
                },
                {
                    name: "Italian Cheese Blend",
                    quantity: 1.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Parmesan Cheese",
                    quantity: 0.5,
                    quantityUnit: Unit.CUP
                },
                {
                    name: "Egg",
                    quantity: 1,
                    quantityUnit: Unit.PIECE
                }
            ],
            instructions: [
                "Heat oven to 350°. Cook and drain shells",
                "Cook meat 5 to 7 minutes, drain and cool for 5 minutes",
                "In bowl mix pasta, sauce and water. Cover and rinse water. One cup in the bottom of a 9x13 unglazed pan",
                "In another bowl mix 1 cup of cheese, parmesan cheese, egg, and meat",
                "Spoon heaping TBS in each shell, place in pan, pour sauce over shell. Cover with foil",
                "Bake 40 to 45 minutes, or until bubbly around sides and filling is set",
                "Uncover, sprinkle remaining cheese over shells and return to oven for 10 minutes",
                "Let rest for 10-15 minutes. Enjoy"
            ]
        }
    ]
}

export default RECIPES;