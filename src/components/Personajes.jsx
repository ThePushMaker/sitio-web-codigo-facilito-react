import { useEffect, useState } from "react";

const Personajes = () => {
  const [character, setCharacter] = useState(null)
  useEffect(function getCharacter () {
    fetch(`https://theofficeapi.dev/api/character/${Math.floor(Math.random() * 9)+1}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setCharacter(data);
    }).catch(error => console.log("Error 400 - BAD REQUEST. Hubo un error al intentar recibir la información desde la api"))
  }, [])

  if(!character){
    return null;
  }
  return (
    <div>
      Nombre: {character.name}
      <br/>
      Actor: {character.actor}
      <br/>
      Genero: {character.gender}
      <br/>
      Trabajo: {character.job[1]}
      <br/>
      Lugar de trabajo: {character.workplace[1]}
    </div>
  );
}

export default Personajes;