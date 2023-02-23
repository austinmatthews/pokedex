import { useEffect, useState } from 'react';
import './App.scss';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
      });
  }, []);

  return (
    <div className="App">
      <SearchBar pokemonList={pokemonList}></SearchBar>
    </div>
  );
}

export default App;
