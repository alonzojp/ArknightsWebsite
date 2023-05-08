import React from "react";

const Pokemon = () => {
  const [pokemon, setPokemon] = React.useState([]);

  React.useEffect(() => {
    fetch(
      `https://api.pokemontcg.io/v2/cards?q=name:lugia`
    )
      .then((res) => res.json())
      .then((json) => {
        setPokemon(json.data);
      });
  }, []);

  return (
    <div className="pokemon">
      {pokemon?.map((item) => (
        <div>
          <img src= {item.images.small}></img>
        </div>
      ))}
    </div>
  );
};

export default Pokemon;