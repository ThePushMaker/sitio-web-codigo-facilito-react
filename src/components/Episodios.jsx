import { useState, useEffect } from 'react';
const Episodios = () => {
  const [episode, setEpisode] = useState(null);
  useEffect(function getEpisodes () {
    fetch('https://theofficeapi.dev/api/episodes')
    .then(response => response.json())
    // .then(data => console.log(data))
    .then(data => setEpisode(data.results[Math.floor(Math.random() * 10)+1]))
  }, [])

  if(!episode){
    return null;
  }
  return(
    <div>
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