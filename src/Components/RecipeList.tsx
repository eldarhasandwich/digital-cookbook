import Link from "next/link";
import Recipe from "./Recipe";
import { RecipeT } from "../types";


interface RecipeListProps {
    recipes: RecipeT[];
}   

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {

    return (
        <>
            <div className="recipe-grid">
                {
                    recipes.map((recipe) => (
                        <div key={recipe.name} className="recipe-item">
                            <Link href={`/recipe/${recipe.slug}`}>
                                <Recipe recipe={recipe} />
                            </Link>
                        </div>
                    ))
                }
            </div>
            <style jsx>{`
                .recipe-grid {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }
                .recipe-item:last-child {
                    border-bottom: none;
                }
                .recipe-item a {
                    text-decoration: none !important;
                    color: inherit !important;
                }
                .recipe-item a * {
                    text-decoration: none !important;
                    color: inherit !important;
                }
                /* This targets Next.js specific styling */
                :global(.recipe-item a) {
                    text-decoration: none !important;
                    color: inherit !important;
                }
                :global(.recipe-item a *) {
                    color: inherit !important;
                }
            `}</style>
        </>
    )

}

export default RecipeList;