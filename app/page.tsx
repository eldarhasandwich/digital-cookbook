'use client'

import PageWrapper from "@/src/Components/PageWrapper";
import { useState, useEffect } from 'react';
import RecipeList from "@/src/Components/RecipeList";
import RECIPES from "@/data/book.config";

const styles = {
    hint: {
        marginTop: '1rem',
        color: '#000',
        fontSize: '0.9rem',
        textAlign: 'center' as const,
        fontFamily: 'Arial, Helvetica, sans-serif',
        height: '1rem',
    },
    bigHint: {
        marginTop: '1rem',
        color: '#666',
        fontSize: '1.5rem',
        textAlign: 'center' as const,
        fontFamily: 'Arial, Helvetica, sans-serif',
    }
}

interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

// Search bar component with modern styling
const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
    const [randomRecipes, setRandomRecipes] = useState<Array<{ name: string }>>([]);

    useEffect(() => {
        // Generate random recipes only on the client side
        const recipe1 = RECIPES.recipes[Math.floor(Math.random() * RECIPES.recipes.length)];
        const recipe2 = RECIPES.recipes[Math.floor(Math.random() * RECIPES.recipes.length)];
        const recipe3 = RECIPES.recipes[Math.floor(Math.random() * RECIPES.recipes.length)];
        setRandomRecipes([recipe1, recipe2, recipe3]);
    }, []);

    const searchBarStyles = {
        container: {
            maxWidth: '800px',
            margin: 'auto',
            padding: '1rem',
        },
        form: {
            display: 'flex',
            flexDirection: 'column' as const,
            width: '100%',
            
        },
        heading: {
            textAlign: 'center' as const,
            fontSize: '2.5rem',
            margin: '0 0 1.5rem 0',
            paddingTop: '2rem',
            color: "#2c3e50",
            marginBottom: "1.5rem",
            fontWeight: "900",
            // paddingBottom: "0.75rem",
            fontFamily: "'Playfair Display', 'Times New Roman', serif",
            fontStyle: "italic",
        },
        inputContainer: {
            display: 'flex',
            position: 'relative' as const,
            width: '100%',
            boxShadow: "0 5px 5px rgba(0, 0, 0, 0.3)",
            borderRadius: '12px',
            overflow: 'hidden',
        },
        input: {
            flex: '1',
            padding: '1rem 1.5rem',
            fontSize: '1rem',
            border: 'none',
            outline: 'none',
            backgroundColor: 'white',
            color: '#333',
            fontFamily: 'Arial, Helvetica, sans-serif',
        },
        button: {
            background: '#0088cc',
            color: 'white',
            border: 'none',
            padding: '0 1.5rem',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold',
            transition: 'background-color 0.2s ease',
            fontFamily: 'Arial, Helvetica, sans-serif',
        }
    };

    return (
        <div style={searchBarStyles.container}>
            <form style={searchBarStyles.form}>
                <h2 style={searchBarStyles.heading}>Jennifer Mahan Cookbook</h2>
                <div style={searchBarStyles.inputContainer}>
                    <input
                        style={searchBarStyles.input}
                        type="text"
                        placeholder="Search for recipes, ingredients, or cuisines..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                {
                    (searchQuery.length == 0 && randomRecipes.length > 0) ? (
                        <p style={styles.hint}>
                            Try searching for {randomRecipes[0].name}, {randomRecipes[1].name}, or {randomRecipes[2].name}
                        </p>
                    ) : (
                        <p style={styles.hint}>
                            
                        </p>
                    )
                }
            </form>
        </div>
    );
};

export default function HomePage() {

    const [searchQuery, setSearchQuery] = useState('');

    const recipes = RECIPES.recipes.filter((recipe) => {
        return recipe.name.toLowerCase().includes(searchQuery.toLowerCase());
    });

    return (
        <PageWrapper>
                <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                
                <RecipeList recipes={recipes} />

                {
                    recipes.length == 0 && (
                        <p style={styles.bigHint}>
                            No recipes found.
                        </p>
                    )   
                }

                <div style={{ height: '100px' }} />

        </PageWrapper>
    );
}
