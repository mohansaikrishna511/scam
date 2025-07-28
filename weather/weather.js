const apiKey = "862eb746112063acee8d6458a8459453"; 

async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const resultDiv = document.getElementById('weatherResult');

  if (!city) {
    resultDiv.innerHTML = "❗ Please enter a city name.";
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    
    if (!response.ok) {
      resultDiv.innerHTML = "🚫 City not found!";
      return;
    }

    const data = await response.json();

    resultDiv.innerHTML = `
      <h2>📍 ${data.name}, ${data.sys.country}</h2>
      <p>🌡️ Temperature: ${data.main.temp} °C</p>
      <p>🌤️ Weather: ${data.weather[0].main}</p>
      <p>💧 Humidity: ${data.main.humidity}%</p>
      <p>🌬️ Wind Speed: ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    console.error("Error:", error); 
    resultDiv.innerHTML = "⚠️ Error fetching weather data!";
  }
}