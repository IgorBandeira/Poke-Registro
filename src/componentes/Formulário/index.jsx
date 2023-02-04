import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [tipo, setTipo] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.novoPokemon({
      nome,
      cargo,
      imagem,
      tipo,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTipo("");
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do pokémon!</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome original do pokémon:"
          placeholder="Digite o nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Apelido:"
          placeholder="Crie um apelido para seu pokémon"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem: https://www.pokemon.com/br/pokedex"
          placeholder="Cole o endereço de imagem do seu pokemón aqui"
          valor={imagem}
          aoAlterado={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          required={true}
          label=" Selecione o tipo do seu pokémon:"
          itens={props.tipos}
          valor={tipo}
          aoAlterado={(valor) => setTipo(valor)}
        />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
