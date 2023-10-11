import React from 'react';

const RecipeDetail = ({ recipe, onClose }) => {
  if (!recipe) {
    return null;
  }

  // Split the instructions into an array of steps
  const instructionSteps = recipe.instructions.split('\n').filter((step) => step.trim() !== '');

  return (
    <div className="recipe-detail-modal">
      <div className="recipe-detail-content">
      <button className="close-button" onClick={onClose}>
        <span>&times;</span>
      </button>
        <div className="recipe-banner">
          <img src={recipe.image} alt={recipe.name} className="recipe-image" />
        </div>
        <h2>{recipe.name}</h2>
        <p>Description: {recipe.description}</p>
        <p>Cook Time: {recipe.cookTime} minutes</p>
        <h3>Tools Needed:</h3>
        <ul>
          {recipe.tools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
        <h3>Ingredients:</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3>Instructions:</h3>
        <div>
          {instructionSteps.map((step, index) => (
            <p key={index}>{step}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;