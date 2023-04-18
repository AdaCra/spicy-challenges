import { useEffect, useState } from "react";

export default function PokemonList() {
  const [pokemon, setPokemon] = useState();
  const [nextUrl, setUrl] = useState(
    `https://pokeapi.co/api/v2/pokemon?offset=0`
  );

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(nextUrl);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [nextUrl]);

  const handleNextPage = () => setUrl(pokemon.next);
  const handleLastPage = () => setUrl(pokemon.previous);

  return (
    <main>
      {pokemon?.previous && (
        <button type="button" onClick={handleLastPage}>
          Previous Page
        </button>
      )}
      {pokemon?.next && (
        <button type="button" onClick={handleNextPage}>
          Next Page
        </button>
      )}
      <ul>
        {pokemon?.results?.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
