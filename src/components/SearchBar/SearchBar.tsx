import PropTypes from 'prop-types';
import { useState } from 'react';

const handleChange = (setSearchQuery, event) => {
  console.log(event);
  setSearchQuery(event.target.value);
};

function SearchBar({ pokemonList }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPokemonList = pokemonList.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(event) => handleChange(pokemonList, setSearchQuery, event)}
      />
      <ul>
        {filteredPokemonList.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

SearchBar.propTypes = {
  pokemonList: PropTypes.array,
  setPokemonList: PropTypes.func,
};

export default SearchBar;
