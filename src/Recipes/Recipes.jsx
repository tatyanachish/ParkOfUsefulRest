import { useEffect } from 'react';
import './recipe.css';
import { useState } from 'react';
import MyRecipeComponent from './MyRecipeComponent';
import photo from './photo.jpg';
import recipe from './recipe.png';


function Recipes() {
  const MY_ID = "c9a0bd65";
  const MY_KEY = "0c67e4f8cff35c7077388f3d7763a31a";
  const [mySearch,setMySearch] = useState('');
  const [myRecipes,setMyrecipes] = useState([]);
  const [wordSubmit, setWordSubmit] = useState("");
  // `https://api.edamam.com/api/recipes/v2?type=public&q=avocado&app_id=${MY_ID}&app_key=${MY_KEY}`
  
  useEffect (() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmit}&app_id=${MY_ID}&app_key=${MY_KEY}`)
      const data = await response.json();
      console.log(data.hits)
      setMyrecipes(data.hits)
    }
    getRecipe()
  },[wordSubmit])
  const myRecipeSearch = (e) => {
    setMySearch (e.target.value)
  }
  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmit(mySearch)
  }
    
  return (
    <div>  
     <img className='photoRecipe' src={photo} alt='photo'/>
     <div className='container-recipe'>       
       <div className='headline-food'> 
          <h1 className='find'><img className='icon-recipe' src={recipe}/>Find a Recipe</h1>  
          <h3>Easily find great recipes from around the world</h3> 
        </div>
      <form onSubmit={finalSearch} className='click-recipe'>
        <input onChange={myRecipeSearch} value={mySearch} className='search-recipe'/>      
      </form>    
      <button className='btn-recipe' onClick={finalSearch}>Find recipes</button>  
      </div>
      {myRecipes.map((element,index) => (
        <MyRecipeComponent key = {index}
        label = {element.recipe.label}
        image = {element.recipe.image}
        cusine = {element.recipe.cuisineType}
        ingredient = {element.recipe.ingredientLines}
        calories = {element.recipe.calories}
        />   
      ))}
      
    </div>
  );
}

export default Recipes;