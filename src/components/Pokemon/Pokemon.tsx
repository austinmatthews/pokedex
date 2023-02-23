import PropTypes from 'prop-types';

function Pokemon({ pokemonName }) {
  return (
    <>
      <li className="Pokemon">{pokemonName}</li>
    </>
  );
}

Pokemon.propTypes = {
  pokemonName: PropTypes.string,
};

export default Pokemon;
