"use client";

import RECIPES from "@/data/book.config";
import PageWrapper from "@/src/Components/PageWrapper";
import NavigationBar from "@/src/Components/NavigationBar";
import RecipeList from "@/src/Components/RecipeList";

export default function BrowsePage() {
    return (
        <PageWrapper>
            <header className="page-header">
                <NavigationBar
                    links={[
                        {
                            title: "Search",
                            destination: "/",
                            isSelected: false
                        },
                        {
                            title: "Browse",
                            destination: "/browse",
                            isSelected: true
                        }
                    ]}
                />
                <h2>
                    {
                        `Browsing all recipes; ${RECIPES.recipes.length} recipes available.`
                    }
                </h2>
            </header>
            <RecipeList recipes={RECIPES.recipes} />
            <div className="page-footer">
                <h3>
                    {
                        `Browsing all recipes; ${RECIPES.recipes.length} recipes available.`
                    }
                </h3>
            </div>
            <style jsx>{`
                .page-header h1 {
                    margin-top: 0.5rem;
                    font-size: 2rem;
                    font-weight: 600;
                }
                .page-header h2 {
                    font-family: sans-serif;
                    font-weight: 300;
                }
                .page-footer h3 {
                    font-family: sans-serif;
                    font-weight: 300;
                }
            `}</style>
        </PageWrapper>
    )
}
