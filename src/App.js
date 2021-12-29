import React,{useEffect,useState} from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {

  const APP_ID = '5bbe5786';
  const APP_KEY = 'd97d3928c9e43a904a19650ac3257c99';

  

  const getRecipes = async ()=>{
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const [search,setSearch] = useState("");
  const [query,setQuery] = useState('banana');

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };
  const updateSearch  = e =>{
    setSearch(e.target.value);
  };

  const [recipes,setRecipes] = useState([]);
  useEffect(()=>{
    getRecipes();
  },[query]);
  return (
    <div className='App'>
      <form className='search-form' onSubmit={getSearch}>
        <input type="text" className='search-box' value={search} onChange={updateSearch}/>
        <button className='btn' type='submit'>Search</button>
      </form>

      <div className='recipesList'>
      {recipes.map(recipe=>(
        <Recipe 
        key={recipe.recipe.label}
        title ={recipe.recipe.label} 
        calories={recipe.recipe.calories}  
        img={recipe.recipe.image} 
        ingredients = {recipe.recipe.ingredients}/>
      ))};
      </div>
      

    </div>  
  );
}

export default App;
