import PropTypes from 'prop-types';
import Pokemon from 'components/Pokemon/Pokemon';

function PokemonList({ pokemonList, searchQuery }) {
  const filteredPokemonList = pokemonList.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <ul className="PokemonList">
        {filteredPokemonList.map((pokemon) => (
          <Pokemon key={pokemon.name} pokemonName={pokemon.name}></Pokemon>
        ))}
      </ul>
    </>
  );
}

PokemonList.propTypes = {
  pokemonList: PropTypes.array,
  searchQuery: PropTypes.string,
};

export default PokemonList;
