import { useEffect, useState } from "react";

const Citas = () => {
  const [quote, setQuote] = useState(null)
  useEffect(function getQuotes() {
    fetch(`https://theofficeapi.dev/api/episodes`)
      .then(response => response.json())
      // .then(data => console.log(data))
      .then(data => setQuote(data.results[Math.floor(Math.random() * 10)+1]))
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