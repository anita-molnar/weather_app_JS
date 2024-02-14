
document.addEventListener('DOMContentLoaded', function(){
  const apiKey = '2b767bae393ae7e90bc4843aff5ee515';
  const btn = document.getElementById('js-button');
  
  btn.addEventListener('click', function() {
    let valueCity = document.getElementById('js-input');
    // console.log(valueCity.value);
    let city = valueCity.value
    fetchData(city);
    }
    )
  
  function fetchData(city='Venice') {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
  
    .then(response => response.json())
    .then(data => {
      // I have provided these variables for you
      const temperature = data.main.temp;
      const description = data.weather[0].description;
  
      document.querySelector('.temp').innerHTML = kelvinCelsiusConverter(temperature);
      document.querySelector('.desc').innerHTML = description;
      document.querySelector('.city').innerHTML = city.toUpperCase();
      // Code goes here
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      weatherInfoElement.innerHTML = '<p>Error fetching weather data</p>';
    }
    );
  }
  fetchData();
  
  function kelvinCelsiusConverter(kelvin) {
    let degrees = -273.15 + kelvin; 
    return Math.round(degrees * 10 ** 2) / 10 ** 2;
  }
})



