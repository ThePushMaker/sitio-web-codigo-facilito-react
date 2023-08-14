import { useEffect, useState } from "react";

const Citas = () => {
  const [quote, setQuote] = useState(null)
  useEffect(function getQuotes() {
    fetch('https://theofficeapi.dev/api/episodes')
      .then(response => response.json())
      // .then(data => console.log(data))
      .then(data => setQuote(data.results[0]))
  }
  , [])

  return (
    <div>
      {quote?.summary}
    </div>
  );
}

export default Citas;