import { useEffect, useState } from "react";
import { ReactComponent as Loading } from './../assets/loading.svg'

const Citas = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [quote, setQuote] = useState(null)
  useEffect(function getQuotes() {
    setIsLoading(true);
    fetch(`https://theofficeapi.dev/api/episodes`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setQuote(data.results[Math.floor(Math.random() * 9)+1]);
        setIsLoading(false);
      }).catch(error => console.log("Error 400 - BAD REQUEST. Hubo un error al intentar recibir la información desde la api"))
  }
  , [])

  if(isLoading){
    return <div className='loading-wrapper'>
      <Loading />
      <span>Loading...</span>
    </div>
  }
  return (
    <div>
      <br />
      <h1>Cita: </h1>
      <p>
        "{quote?.summary}"
      </p>
    </div>
  );
}

export default Citas;