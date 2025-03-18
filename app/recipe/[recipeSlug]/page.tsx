'use client'

import React from "react";
import RECIPES from "@/data/book.config";
import Recipe from "@/src/Components/Recipe";
import PageWrapper from "@/src/Components/PageWrapper";
import NavigationBar from "@/src/Components/NavigationBar";

interface PageParams {
    recipeSlug: string;
}

interface RecipePageProps {
    params: Promise<PageParams>;
    searchParams?: Promise<Record<string, string | string[] | undefined>>;
}

export default function RecipePage({ params }: RecipePageProps) {
    const unwrappedParams = React.use(params);
    const { recipeSlug } = unwrappedParams;

    const recipe = RECIPES.recipes.find((recipe) => recipe.slug === recipeSlug);

    if (!recipe) {
        return <div>Recipe not found</div>;
    }

    return (
        <PageWrapper>
            <header className="page-header">
                <NavigationBar
                    links={[
                        {
                            title: "Go Home",
                            destination: "/",
                            isSelected: false
                        }
                    ]}
                />
            </header>
            <div style={{marginBottom: "1.5rem"}} />
            <Recipe recipe={recipe} />
        </PageWrapper>
    );
}