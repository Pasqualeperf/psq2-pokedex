import { useState, useEffect } from "react"
import Pokedex from "./Pokedex";

export default function PokemonSection (props) {

    const [pokemonImg, setPokemonImg] = useState()
    let [pokedex, setPokedex] = useState([]);

    useEffect(() => {
        if (props.pokemon.sprites !== undefined) {
            setPokemonImg(props.pokemon.sprites.front_default)
        }
    }, [props]);

    const setDefaultImg = () => {
        setPokemonImg(props.pokemon.sprites.front_default)
    }

    const setShinyImg = () => {
        setPokemonImg(props.pokemon.sprites.front_shiny)
    }

    const addToPokedex = (pokemon) => {
        setPokedex([...pokedex, pokemon])
    }

    if (props.pokemon.name === undefined) {
        return <h2>{props.pokemon}</h2>
    }
    else if(props.pokemon.sprites === undefined) {
        return null
    } else {
        return (
            <div className="M-top">
                <h2>Ecco i tuoi risultati per [{props.pokemon.name}]</h2>
                <div className="M-top">
                    <div className="container">
                        <div className="row">
                            <div className="column">
                                <span>Nome: <b>{props.pokemon.name}</b></span>
                            </div>
                            <div className="column">
                                <span>Peso: <b>{props.pokemon.weight}</b></span>
                            </div>
                            <div className="column">
                                <span>Altezza: <b>{props.pokemon.height}</b></span>
                            </div>
                        </div>
                        <div className="cont container">
                            <div className="row">
                                <div className="column">
                                    <div className="M-top flex align-center justify-center h-90">
                                        {pokemonImg ? (
                                            <img src={pokemonImg} alt={props.pokemon.name} height="200" width="200"/>
                                        ) : setDefaultImg(props.pokemon.sprites.front_default)}
                                    </div>
                                    <div className="flex justify-center">
                                        <button onClick={() => {addToPokedex(props.pokemon)}} className="button">Aggiungi a Pokedex</button>
                                    </div>
                                </div>
                                <div className="column column-25">
                                    <div className="M-top flex flex-column justify-center h-100">
                                        <div>
                                            <button onClick={setDefaultImg} className="button button-outline">DEFAULT</button>
                                        </div>
                                        <div>
                                            <button onClick={setShinyImg} className="button button-outline">SHINY</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="M-top flex flex-column">
                                        <h3>Statistiche</h3>
                                    </div>
                                    <div className="stat stats-m-top">
                                        <p><b>hp</b></p>
                                        <div className="stat-light-grey">
                                            <div className="stat-container stat-purple stat-center" style={{width:props.pokemon.stats[0].base_stat+"%"}}>{props.pokemon.stats[0].base_stat}</div>
                                        </div>
                                    </div>
                                    <div className="stat stats-m-top">
                                        <p><b>attack</b></p>
                                        <div className="stat-light-grey">
                                            <div className="stat-container stat-purple stat-center" style={{width:props.pokemon.stats[1].base_stat+"%"}}>{props.pokemon.stats[1].base_stat}</div>
                                        </div>
                                    </div>
                                    <div className="stat stats-m-top">
                                        <p><b>defence</b></p>
                                        <div className="stat-light-grey">
                                            <div className="stat-container stat-purple stat-center" style={{width:props.pokemon.stats[2].base_stat+"%"}}>{props.pokemon.stats[2].base_stat}</div>
                                        </div>
                                    </div>
                                    <div className="stat stats-m-top">
                                        <p><b>special-attack</b></p>
                                        <div className="stat-light-grey">
                                            <div className="stat-container stat-purple stat-center" style={{width:props.pokemon.stats[3].base_stat+"%"}}>{props.pokemon.stats[3].base_stat}</div>
                                        </div>
                                    </div>
                                    <div className="stat stats-m-top">
                                        <p><b>special-defence</b></p>
                                        <div className="stat-light-grey">
                                            <div className="stat-container stat-purple stat-center" style={{width:props.pokemon.stats[4].base_stat+"%"}}>{props.pokemon.stats[4].base_stat}</div>
                                        </div>
                                    </div>
                                    <div className="stat stats-m-top">
                                        <p><b>speed</b></p>
                                        <div className="stat-light-grey">
                                            <div className="stat-container stat-purple stat-center" style={{width:props.pokemon.stats[5].base_stat+"%"}}>{props.pokemon.stats[5].base_stat}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="M-top">
                    <Pokedex pokedex={pokedex} />
                </div>
            </div>
        )
    }
}