import React, { useState } from "react";
import { useCity } from "./Components/CostumHook/useCity";

function App() {
  const [inputName, setinputName] = useState("");
  const [weather, setCity, isLoading] = useCity(inputName);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setinputName(event.target.value);
  };

  return (
    <div className="App">
      <form>
        <label>
          Inserisci il nome della città:<br/>
          <input type="text" value={inputName} onChange={handleChange} />
        </label>
      </form>

      {isLoading ? (
        <p>Caricamento...</p>
      ) : (
        weather && (
          <div>
            <h2>{weather.name}</h2>
            <p>Temperatura: {weather.main.temp}</p>
            <p>Descrizione: {weather.weather[0].description}</p>
            <p>Vento: {weather.wind.speed} km/h</p>
            <p>lat: {weather.coord.lat}</p>
            <p>long: {weather.coord.lon}</p>
          </div>
        )
      )}
    </div>
  );
}

export default App;