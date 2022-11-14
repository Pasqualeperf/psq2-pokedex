export default function Pokedex(props) {
    console.log(props.pokedex)
    return (
        <div className="M-top">
            <h2>Il tuo Pokedex</h2>
            <div>
                <div className="row">
                {props.pokedex.map(pokemon => (
                    <div className="column" key={pokemon.id}>
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