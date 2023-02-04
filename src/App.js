import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulário";
import Tipo from "./componentes/Tipo";

function App() {
  const tipos = [
    {
      nome: "Aço",
      corPrimaria: "#EBDAED",
      corSecundaria: "#F5F1F5",
    },
    {
      nome: "Água",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Dragão",
      corPrimaria: "#FEBA05",
      corSecundaria: "#FBFFD1",
    },
    {
      nome: "Elétrico",
      corPrimaria: "#FFF700",
      corSecundaria: "#FFFCA0",
    },
    {
      nome: "Fada",
      corPrimaria: "#E06B69",
      corSecundaria: "#FFAEA5",
    },
    {
      nome: "Fogo",
      corPrimaria: "#FF4900",
      corSecundaria: "#FFAA88",
    },
    {
      nome: "Grama",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      nome: "Inseto",
      corPrimaria: "#80A368",
      corSecundaria: "#ABC29B",
    },
    {
      nome: "Normal",
      corPrimaria: "#F4BCA5",
      corSecundaria: "#FFEDE8",
    },
    {
      nome: "Psíquico",
      corPrimaria: "#D62DFF",
      corSecundaria: "#EEAAFF",
    },
    {
      nome: "Sombrio",
      corPrimaria: "#480061",
      corSecundaria: "#6D5775",
    },
    {
      nome: "Terra",
      corPrimaria: "#AB4E33",
      corSecundaria: "#A37568",
    },
    {
      nome: "Veneno",
      corPrimaria: "#8867DF",
      corSecundaria: "#B8A9DF",
    },
  ];

  const [pokemons, setPokemons] = useState([]);

  const novoPokemon = (pokemon) => {
    debugger;
    setPokemons([...pokemons, pokemon]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        tipos={tipos.map((tipo) => tipo.nome)}
        novoPokemon={(pokemon) => novoPokemon(pokemon)}
      />

      {tipos.map((tipo) => (
        <Tipo
          key={tipo.nome}
          nome={tipo.nome}
          corPrimaria={tipo.corPrimaria}
          corSecundaria={tipo.corSecundaria}
          pokemons={pokemons.filter((pokemon) => pokemon.tipo === tipo.nome)}
        />
      ))}
    </div>
  );
}

export default App;
