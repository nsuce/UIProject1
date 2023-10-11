import React, { useState } from 'react';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import SearchBar from './components/SearchBar';
import TimerPopup from './components/TimerPopup';
import './App.css';

import recipes from './recipes';

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortMethod, setSortMethod] = useState('default');
  const [isTimerPopupVisible, setTimerPopupVisible] = useState(false);

  const showRecipeDetail = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeRecipeDetail = () => {
    setSelectedRecipe(null);
  };

  const handleTimerButtonClick = () => {
    setTimerPopupVisible(true);
  };

  let filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (sortMethod === 'cookTimeAsc') {
    filteredRecipes = filteredRecipes.slice().sort((a, b) => a.cookTime - b.cookTime);
  } else if (sortMethod === 'cookTimeDesc') {
    filteredRecipes = filteredRecipes.slice().sort((a, b) => b.cookTime - a.cookTime);
  } else if (sortMethod === 'nameAsc') {
    filteredRecipes = filteredRecipes.slice().sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortMethod === 'nameDesc') {
    filteredRecipes = filteredRecipes.slice().sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <div className="App">
      <div className="header">
        <h1>Smart Cookbook</h1>
        <div className="search-and-sort">
          <div className="timer-button">
            <button onClick={handleTimerButtonClick}>Set Timer</button>
          </div>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <div className="sort-options">
            <label htmlFor="sortMethod">Sort By:</label>
            <select
              id="sortMethod"
              value={sortMethod}
              onChange={(e) => setSortMethod(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="cookTimeAsc">Cook Time (Ascending)</option>
              <option value="cookTimeDesc">Cook Time (Descending)</option>
              <option value="nameAsc">Name (Ascending)</option>
              <option value="nameDesc">Name (Descending)</option>
            </select>
          </div>
        </div>
      </div>
      <div className="recipe-wrapper">
        <RecipeList recipes={filteredRecipes} showRecipeDetail={showRecipeDetail} />
      </div>
      {selectedRecipe && (
        <RecipeDetail recipe={selectedRecipe} onClose={closeRecipeDetail} />
      )}
      {isTimerPopupVisible && (
        <TimerPopup onClose={() => setTimerPopupVisible(false)} />
      )}
    </div>
  );
};

export default App;