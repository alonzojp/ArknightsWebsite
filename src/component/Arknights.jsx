import React from "react";

const Arknights = () => {
  const [arknights, setArknights] = React.useState([]);

  React.useEffect(() => {
    fetch(
      `https://rhodesapi.up.railway.app/api/operator`
    )
      .then((res) => res.json())
      .then((json) => {
        setArknights(json);
      });
  }, []);

  return (
    <div className = "arknights">
      {arknights?.map((item) => (
        <div>
            <p><a href={item.url}>{item.name} ({item.class[0]})</a></p>
            
          <img height="300px" src= {item.art[0].link} alt="N/A"></img>
        </div>
      ))}

    </div>
  );
}

export default Arknights;