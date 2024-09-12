// Clock function
function updateClock() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');
    document.getElementById('currentTime').textContent = `${hours}:${minutes}:${seconds}`;
    setTimeout(updateClock, 1000);
  }
  
  // Lock screen functionality
  function lockScreen() {
    document.getElementById('homeScreen').classList.add('hidden');
    document.getElementById('lockScreen').classList.remove('hidden');
  }
  
  // Unlock screen functionality
  function unlock() {
    var userInput = document.getElementById('unlockInput').value;
    if (userInput === '1234') { // Replace '1234' with your PIN
      document.getElementById('lockScreen').classList.add('hidden');
      document.getElementById('homeScreen').classList.remove('hidden');
      updateClock(); // Start the clock
    } else {
      alert('Incorrect PIN. Try again.');
    }
  }
  
  // Open app functionality
  function openApp(appName) {
    document.getElementById('homeScreen').classList.add('hidden');
    document.getElementById(`${appName}App`).classList.remove('hidden');
  
    if (appName === 'weather') {
      displayWeather();
    }
  }
  
  // Close app functionality
  function closeApp(appName) {
    document.getElementById(`${appName}App`).classList.add('hidden');
    document.getElementById('homeScreen').classList.remove('hidden');
  }
  
  // Weather app functionality (simulated)
  function displayWeather() {
    // Simulated weather data
    var weatherData = {
      temperature: '25°C',
      condition: 'Sunny',
      location: 'New York'
    };
  
    var weatherInfo = document.getElementById('weatherInfo');
    weatherInfo.innerHTML = `
      <p>Location: ${weatherData.location}</p>
      <p>Temperature: ${weatherData.temperature}</p>
      <p>Condition: ${weatherData.condition}</p>
    `;
  }
  
  // Calculator app functionality
  function appendToDisplay(value) {
    document.getElementById('calcDisplay').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('calcDisplay').value = '';
  }
  
  function calculateResult() {
    var result = eval(document.getElementById('calcDisplay').value);
    document.getElementById('calcDisplay').value = result;
  }
  
  // Notes app functionality
  function saveNotes() {
    var notes = document.getElementById('userNotes').value;
    // Simulate saving notes to local storage or server
    console.log('Notes saved:', notes);
    alert('Notes saved successfully!');
  }
  