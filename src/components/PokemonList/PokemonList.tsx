import PropTypes from 'prop-types';
import Pokemon from 'components/Pokemon/Pokemon';
import listStyles from 'scss/PokemonList.module.scss';

function PokemonList({ pokemonList, searchQuery }) {
  const filteredPokemonList = pokemonList.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <ul className={listStyles.ul}>
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
