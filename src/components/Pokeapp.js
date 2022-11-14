import PokemonSection from "./PokemonSection";

import { useState } from 'react';

export default function Pokeapp() {
    const [search, setSearch] = useState('');
    let [pokemon, setPokemon] = useState(''); 

    const call = async () => {
        try {
            const res = await fetch("https://pokeapi.co/api/v2/pokemon/"+search.toLowerCase());
            const json = await res.json();
            return json;
        } catch {
            return "Pokemon not found";
        }
    }

    const searchPokemon = async (event) => {
        event.preventDefault();
        if (search !== "" && search !== null) {
            pokemon = await call();
            setPokemon(pokemon);
        }
    }

    return (
        <div className="Search-form M-top" onSubmit={searchPokemon}>
            <form id="PokemonForm">
                <fieldset>
                    <input type="text" placeholder="Pikachu" id="pokemonField" value={search} onChange={(e) => { setSearch(e.target.value) }} />
                    <input className="button-primary" type="submit" value="Cerca"/>
                </fieldset>
            </form>
            <div className="M-top">
                <PokemonSection pokemon={pokemon} />
            </div>
        </div>
    )
}