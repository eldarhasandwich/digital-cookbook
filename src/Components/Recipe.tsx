"use client";

import { RecipeT, Unit } from "../types";
import { formatQuantity } from "../utils/fractionUtils";
import React, { useState, useEffect } from "react";

interface RecipeProps {
    recipe: RecipeT;
}

const Recipe: React.FC<RecipeProps> = ({ recipe }) => {
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        // Function to check if window width is mobile size
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        // Initial check
        checkIsMobile();
        
        // Add event listener for window resize
        window.addEventListener('resize', checkIsMobile);
        
        // Cleanup event listener
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    const styles = {
        recipeContainer: {
            maxWidth: "800px",
            margin: "0 auto",
            padding: isMobile ? "1rem" : "2rem",
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
            fontFamily: "'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        },
        recipeTitle: {
            fontSize: isMobile ? "1.75rem" : "2.5rem",
            color: "#2c3e50",
            marginBottom: "1.5rem",
            fontWeight: "700",
            borderBottom: "3px solid #f1c40f",
            paddingBottom: "0.75rem",
            fontFamily: "'Playfair Display', 'Times New Roman', serif",
            fontStyle: "italic",
        },
        recipeDescription: {
            fontSize: "1.1rem",
            lineHeight: "1.6",
            color: "#34495e",
            backgroundColor: "#f8f9fa",
            padding: "1rem",
            borderRadius: "8px",
            marginBottom: "2rem",
            fontStyle: "italic",
        },
        recipeContent: {
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1.5fr",
            gap: isMobile ? "1rem" : "2rem",
        },
        sectionTitle: {
            fontSize: isMobile ? "1.25rem" : "1.5rem",
            color: "#2c3e50",
            marginBottom: "1rem",
            fontWeight: "600",
            borderLeft: "4px solid #f1c40f",
            paddingLeft: "10px",
            fontFamily: "'Playfair Display', 'Times New Roman', serif",
        },
        ingredientsList: {
            listStyle: "none",
            padding: "0",
        },
        ingredientItem: {
            margin: "0.5rem 0",
            padding: "0.5rem 0",
            borderBottom: "1px dashed #ecf0f1",
        },
        ingredientQuantity: {
            fontWeight: "600",
            color: "#e67e22",
        },
        ingredientName: {
            color: "#2c3e50",
        },
        ingredientInstructions: {
            fontStyle: "italic",
            color: "#7f8c8d",
            fontSize: "0.9rem",
        },
        instructionsList: {
            paddingLeft: isMobile ? "2rem" : "2.5rem",
            listStyleType: "none",
        },
        instructionItem: {
            margin: "1rem 0",
            position: "relative" as const,
            paddingLeft: "0.25rem",
        },
        instructionNumber: {
            display: "inline-block",
            position: "absolute" as const,
            left: isMobile ? "-1.8rem" : "-2.2rem",
            fontSize: isMobile ? "1.25rem" : "1.5rem",
            fontFamily: "'Georgia', serif",
            color: "#e74c3c",
            fontWeight: "bold",
        }
    };

    return (
        <div style={styles.recipeContainer}>
            <h1 style={styles.recipeTitle}>{recipe.name}</h1>
            
            {recipe.description && (
                <div style={styles.recipeDescription}>
                    <p>{recipe.description}</p>
                </div>
            )}
            
            <div style={styles.recipeContent}>
                <div>
                    <h2 style={styles.sectionTitle}>Ingredients</h2>
                    <ul style={styles.ingredientsList}>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index} style={styles.ingredientItem}>
                                {
                                    ingredient.quantity && (
                                        <span style={styles.ingredientQuantity}>
                                            {formatQuantity(ingredient.quantity, ingredient.quantityUnit)}
                                        </span>
                                    )
                                }
                                <span> </span>
                                <span style={styles.ingredientName}>{ingredient.name}</span>
                                {ingredient.extraInstructions && (
                                    <>
                                        <span> </span>
                                        <span style={styles.ingredientInstructions}>
                                            ({ingredient.extraInstructions})
                                        </span>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div>
                    <h2 style={styles.sectionTitle}>Instructions</h2>
                    <ol style={styles.instructionsList}>
                        {recipe.instructions.map((instruction, index) => (
                            <li key={index} style={styles.instructionItem}>
                                <span style={styles.instructionNumber}>{index + 1}</span>
                                {instruction}
                            </li>
                        ))}
                    </ol>
                </div>

                {
                    recipe.notes && (
                        <div>
                            <h2 style={styles.sectionTitle}>Notes</h2>
                            <p style={{}}>{recipe.notes}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Recipe;