"use client";

import RECIPES from "@/data/book.config";
import Recipe from "@/src/Components/Recipe";
import PageWrapper from "@/src/Components/PageWrapper";
import Link from "next/link";
import Button from "@/src/Components/Button";
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
            `}</style>
        </PageWrapper>
    )
}
