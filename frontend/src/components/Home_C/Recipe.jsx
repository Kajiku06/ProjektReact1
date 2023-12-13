import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './recipe.css';

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [newRecipe, setNewRecipe] = useState({
    title: '',
    description: '',
    instructions: '',
    user_id: 1,
  });

  useEffect(() => {
    axios.get('http://localhost:8081/recipes')
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => {
        console.error('Błąd pobierania danych:', error);
      });
  }, []);

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe === selectedRecipe ? null : recipe);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRecipe({ ...newRecipe, [name]: value });
  };

  const addNewRecipe = async () => {
    const newRecipeData = {
      title: 'Nowy przepis',
      description: 'Opis nowego przepisu',
      instructions: 'Instrukcje dotyczące nowego przepisu',
      user_id: 1,
    };
  
    try {
      const response = await fetch('http://localhost:8081/add-recipe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRecipeData),
      });
  
      if (!response.ok) {
        throw new Error('Błąd sieci!');
      }
  
      const data = await response.json();
      console.log('Dodano nowy przepis:', data);
    } catch (error) {
      console.error('Błąd dodawania przepisu:', error);
    }
  };
  
  addNewRecipe();
  return (
    <div className="recipe-container">
      <div className="card-list">
        {recipes.map(recipe => (
          <div
            key={recipe.recipe_id}
            className={`card1 ${recipe === selectedRecipe ? 'selected-card' : ''}`}
            onClick={() => handleSelectRecipe(recipe)}
          >
            <h3>{recipe.title}</h3>
            <p>Author: {recipe.user_id}</p>
          </div>
        ))}
      </div>
      <div className="selected-recipe-container">
        {selectedRecipe && (
          <div className="selected-recipe">
            <h3>{selectedRecipe.title}</h3>
            <p>Author: {selectedRecipe.user_id}</p>
            <p>Description: {selectedRecipe.description}</p>
            <p>Instructions: {selectedRecipe.instructions}</p>
          </div>
        )}
      </div>
      <div className="add-recipe-container">
        <form onSubmit={addNewRecipe()}>
          <input type="text" name="title" placeholder="Tytuł" value={newRecipe.title} onChange={handleInputChange} />
          <input type="text" name="description" placeholder="Opis" value={newRecipe.description} onChange={handleInputChange} />
          <textarea name="instructions" placeholder="Instrukcje" value={newRecipe.instructions} onChange={handleInputChange} />
          <button type="submit">Dodaj przepis</button>
        </form>
      </div>
    </div>
  );
};

export default Recipe;