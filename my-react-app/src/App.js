import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/Weather';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar';

function App() {
  
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState([true]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching data")
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
        console.log(lat, long);
      });

      await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`)
      .then(res => res.json())
      .then(res => {
        {(res.cod == 400) ? (
          console.log(res)
        ) : (
          setData(res)
        
        )}
      });
    }
    fetchData();
  }, [lat,long])
  console.log(data)
  return (
    <div className="App">
      {(typeof data.main != 'undefined') ? (
        <NavBar weatherData={data} />
      ): (
        <div></div>
      )}
      {(typeof data.main != 'undefined') ? (
        <Weather weatherData={data} />
      ): (
        <div></div>
      )}

      
    </div>
  );
}

export default App;