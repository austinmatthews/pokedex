import PropTypes from 'prop-types';
import { useState } from 'react';
import PokemonList from 'components/PokemonList/PokemonList';

const handleChange = (setSearchQuery, event) => {
  console.log(event);
  setSearchQuery(event.target.value);
};

function SearchBar({ pokemonList }) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <section className="SearchBar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(event) => handleChange(setSearchQuery, event)}
        />
      </section>
      <section>
        <PokemonList pokemonList={pokemonList} searchQuery={searchQuery}></PokemonList>
      </section>
    </>
  );
}

SearchBar.propTypes = {
  pokemonList: PropTypes.array,
  setPokemonList: PropTypes.func,
};

export default SearchBar;
