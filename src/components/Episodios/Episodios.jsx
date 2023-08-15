import { useState, useEffect } from 'react';
import { ReactComponent as Loading } from '../../assets/loading.svg'
import './Episodios.css'

const Episodios = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [episode, setEpisode] = useState(null);
  const [shouldRefresh, setShouldRefresh] = useState(true);

  useEffect(function getEpisodes () {
    // si shouldEffect está en falso esta condición va a dar verdadero y ya no va a ejecutar lo demás del codigo, va a cortar la ejecución de la función
    if (!shouldRefresh) {
      return
    }

    setIsLoading(true);

    fetch('https://theofficeapi.dev/api/episodes')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setShouldRefresh(false);
      setEpisode(data.results[Math.floor(Math.random() * 9)+1]);
      setIsLoading(false);
    }).catch(error => console.log("Error 400 - BAD REQUEST. Hubo un error al intentar recibir la información desde la api"))
  }, [shouldRefresh])
  
  function onRefresh() {  
    console.log('ejecuta el on refresh')
    setShouldRefresh(true);
  }

  if(isLoading){
    return <div className='loading-wrapper'>
      <Loading />
      <span>Loading...</span>
    </div>
  }
  return(
    <div>
      <button onClick={(onRefresh)} className='refresh-button'>Refresh</button>
      <h1>
        Titulo: {episode.title}
      </h1>
      <p>
        Resumen: {episode.summary}
      </p>
      <br />
      Episodio: {episode.episode}
    </div>
  );
}

export default Episodios;