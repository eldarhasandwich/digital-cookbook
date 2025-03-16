
export enum Unit {
    SLICE = "Slice",
    MILLILITER = "mL",
    LITER = "L",
    GRAM = "g",
    KILOGRAM = "kg",
    TEASPOON = "tsp",
    TABLESPOON = "tbsp",
    PIECE = "Piece",
    CUP = "Cup",
    PINCH = "Pinch",
    LB = "lb",
    STICK = "Stick",
    OZ = "oz",
}

export interface RecipeT {
    slug: string;
    name: string;
    description?: string;
    ingredients: RecipeIngredientT[];
    instructions: string[];
    notes?: string;
}

interface RecipeIngredientT {
    name: string;
    quantityUnit?: Unit;
    quantity?: number;
    extraInstructions?: string;
}

export interface RecipeBookT {
    recipes: RecipeT[];
}

