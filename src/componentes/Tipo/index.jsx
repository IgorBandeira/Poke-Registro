import Pokemon from "../Pokemon";
import "./Tipo.css";

const Tipo = (props) => {
  return props.pokemons.length > 0 ? (
    <section className="tipo" style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className="pokemons">
        {props.pokemons.map((pokemon) => (
          <Pokemon
            corDeFundo={props.corPrimaria}
            key={pokemon.nome}
            nome={pokemon.nome}
            cargo={pokemon.cargo}
            imagem={pokemon.imagem}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Tipo;
