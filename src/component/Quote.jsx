import React from "react";

const Quote = () => {
  const [arknights, setArknights] = React.useState([]);
  const quoteNumber = Math.floor(Math.random() * 287);

  React.useEffect(() => {
    fetch(
      `https://rhodesapi.up.railway.app/api/operator`
    )
      .then((res) => res.json())
      .then((json) => {
        setArknights(json[quoteNumber]);
      });
  }, []);

  return (
    <p>"{arknights.quote}" - {arknights.name}</p>
  );
}

export default Quote;