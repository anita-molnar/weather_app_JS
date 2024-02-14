async function weather() {
    const city = 'toronto';
    const apiKey = '2b767bae393ae7e90bc4843aff5ee515'
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
    const jasonData = await response.json();
  
    console.log('Name: ' + jasonData.name);
    console.log('temp: ' + kelvinCelsiusConverter(jasonData.main.temp) + '∘');
    console.log('weather: ' + jasonData.weather[0]['main']);
    console.log('description: ' + jasonData.weather[0]['description']); 
  };
  
weather();

console.log('caricamento in corso....');

function kelvinCelsiusConverter(kelvin) {
  let degrees = -273.15 + kelvin; 
  return Math.round(degrees * 10 ** 2) / 10 ** 2;
};

  