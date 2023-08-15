import { useEffect, useState } from "react";

const Citas = () => {
  const [quote, setQuote] = useState(null)
  useEffect(function getQuotes() {
    fetch(`https://theofficeapi.dev/api/episodes`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setQuote(data.results[Math.floor(Math.random() * 9)+1]);
      }).catch(error => console.log("Error 400 - BAD REQUEST. Hubo un error al intentar recibir la información desde la api"))
  }
  , [])

  return (
    <div>
      <br />
      "{quote?.summary}"
    </div>
  );
}

export default Citas;