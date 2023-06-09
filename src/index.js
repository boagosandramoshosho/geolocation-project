function showTemp(response) {
    let temperature = Math.round(response.data.main.temp);
    console.log(temperature);
    let h1 = document.querySelector("h1");
    h1.innerHTML = `It is ${temperature} degrees in ${response.data.name}`;
    return temperature;
  }
  
  function showPosition(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiKey = "6e4f1a7a1140d6ca523a88618d523748";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(showTemp);
  }
  
  navigator.geolocation.getCurrentPosition(showPosition);