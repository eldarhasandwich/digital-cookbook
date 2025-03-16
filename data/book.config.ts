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
        }
    ]
}

export default RECIPES;