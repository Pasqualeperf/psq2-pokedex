export default function Pokedex(props) {
    return (
        <div className="M-top">
            <h2>Il tuo Pokedex</h2>
            <div className="container">
                <div className="row wrap">
                {props.pokedex.map(pokemon => (
                    <div className="column column-20" key={pokemon.id}>
                        <div>
                            <img src={pokemon.sprites.front_default} alt={pokemon.name} height="200" width="200"/>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}