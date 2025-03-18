import Link from "next/link";
import Recipe from "./Recipe";
import { RecipeT } from "../types";


interface RecipeListProps {
    recipes: RecipeT[];
}   

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {

    return (
        <>
            <div className="recipe-grid" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {
                    recipes.map((recipe) => (
                        <div key={recipe.slug} className="recipe-item">
                            <Link href={`/recipe/${recipe.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <Recipe recipe={recipe} />
                            </Link>
                        </div>
                    ))
                }
            </div>
        </>
    )

}

export default RecipeList;