import React, { useState } from 'react';
import RecipeDetail from './RecipeDetail';

const RecipeList = ({ recipes }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openRecipeDetails = (recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const closeRecipeDetails = () => {
    setSelectedRecipe(null);
    setIsModalOpen(false);
  };

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="recipe-card"
          onClick={() => openRecipeDetails(recipe)} // Add onClick here
        >
          <div className="recipe-info">
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            <p>Cook Time: {recipe.cookTime} minutes</p>
          </div>
          <img src={recipe.image} alt={recipe.name} />
        </div>
      ))}
      {isModalOpen && (
        <RecipeDetail recipe={selectedRecipe} onClose={closeRecipeDetails} />
      )}
    </div>
  );
};

export default RecipeList;