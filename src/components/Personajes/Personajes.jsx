import { useEffect, useState } from "react";
import styles  from './Personajes.module.css'

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
    <div className={styles.infoContainer}>
      <h1>
        Nombre: {character.name}
      </h1>
      <p className={styles.info}>
        Actor: {character.actor}
      </p>
      <p className={styles.info}>
        Genero: {!character.gender?'Desconocido':character.gender}
      </p>
      <p className={styles.info}>
        Trabajo: {character.job[0]}
      </p>
      <p className={styles.info}>
        Lugar de trabajo: {character.workplace[0]}
      </p>
    </div>
  );
}

export default Personajes;