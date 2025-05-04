
    let citiesData = [];
    let activeCity = null;

    function toggleMenu() {
      const sideMenu = document.getElementById('sideMenu');
      sideMenu.classList.toggle('active');
    }
    
    function addNewCity() {
      const input = document.getElementById('cidade');
      input.value = '';
      input.focus();
      document.getElementById('suggestions').classList.remove('visible');
    }
    
    function criarBackground(tipoClima, isNightTime) {
      const background = document.getElementById('weather-background');
      background.innerHTML = '';
      background.className = 'background';
      
      let timePrefix = isNightTime ? 'night' : 'day';
      const isSmallScreen = window.innerWidth <= 480;
      
      switch(tipoClima) {
        case 'Clear':
          if (isNightTime) {
            background.classList.add('night-clear');
            const moon = document.createElement('div');
            moon.className = 'moon';
            background.appendChild(moon);
            const starContainer = document.createElement('div');
            starContainer.className = 'star-container';
            background.appendChild(starContainer);
            const starCount = isSmallScreen ? 100 : 200;
            for (let i = 0; i < starCount; i++) {
              const star = document.createElement('div');
              star.className = 'star';
              const size = Math.random() * 4 + 1;
              star.style.width = `${size}px`;
              star.style.height = `${size}px`;
              star.style.left = `${Math.random() * 100}%`;
              star.style.top = `${Math.random() * 100}%`;
              star.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
              star.style.animationDelay = `0s`;
              starContainer.appendChild(star);
            }
            const cloudContainer = document.createElement('div');
            cloudContainer.className = 'cloud-container';
            background.appendChild(cloudContainer);
            for (let i = 0; i < (isSmallScreen ? 2 : 3); i++) {
              const cloud = document.createElement('div');
              cloud.className = i % 2 === 0 ? 'cloud cloud-large' : 'cloud cloud-small';
              cloud.style.top = `${Math.random() * 40 + 10}%`;
              cloud.style.opacity = `${Math.random() * 0.3 + 0.5}`;
              cloud.style.animationDuration = `${Math.random() * 20 + 20}s`;
              cloud.style.animationDelay = `0s`;
              cloudContainer.appendChild(cloud);
            }
          } else {
            background.classList.add('day-clear');
            const sun = document.createElement('div');
            sun.className = 'sun';
            background.appendChild(sun);
            const sunRays = document.createElement('div');
            sunRays.className = 'sun-rays';
            background.appendChild(sunRays);
            for (let i = 0; i < 8; i++) {
              const ray = document.createElement('div');
              ray.className = 'ray';
              ray.style.animationDelay = `${i * 0.2}s`;
              sunRays.appendChild(ray);
            }
          }
          break;
          
        case 'Clouds':
          background.classList.add(`${timePrefix}-cloudy`);
          const cloudContainer = document.createElement('div');
          cloudContainer.className = 'cloud-container';
          background.appendChild(cloudContainer);
          for (let i = 0; i < (isSmallScreen ? 3 : 5); i++) {
            const cloud = document.createElement('div');
            cloud.className = i % 2 === 0 ? 'cloud cloud-large' : 'cloud cloud-small';
            cloud.style.top = `${Math.random() * 60 + 5}%`;
            cloud.style.opacity = `${Math.random() * 0.4 + 0.4}`;
            cloud.style.animationDuration = `${Math.random() * 20 + 20}s`;
            cloud.style.animationDelay = `0s`;
            cloudContainer.appendChild(cloud);
          }
          if (isNightTime) {
            const starContainer = document.createElement('div');
            starContainer.className = 'star-container';
            background.appendChild(starContainer);
            for (let i = 0; i < (isSmallScreen ? 80 : 150); i++) {
              const star = document.createElement('div');
              star.className = 'star';
              const size = Math.random() * 3 + 1;
              star.style.width = `${size}px`;
              star.style.height = `${size}px`;
              star.style.left = `${Math.random() * 100}%`;
              star.style.top = `${Math.random() * 100}%`;
              star.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
              star.style.animationDelay = `0s`;
              starContainer.appendChild(star);
            }
          }
          break;
          
        case 'Rain':
        case 'Drizzle':
          background.classList.add(`${timePrefix}-rainy`);
          const rainContainer = document.createElement('div');
          rainContainer.className = 'rain-container';
          background.appendChild(rainContainer);
          const rainyClouds = document.createElement('div');
          rainyClouds.className = 'cloud-container';
          background.appendChild(rainyClouds);
          for (let i = 0; i < (isSmallScreen ? 2 : 3); i++) {
            const cloud = document.createElement('div');
            cloud.className = 'cloud cloud-large';
            cloud.style.top = `${Math.random() * 30 + 5}%`;
            cloud.style.opacity = isNightTime ? '0.8' : '0.7';
            cloud.style.filter = isNightTime ? 'brightness(0.7) drop-shadow(0 0 5px rgba(255, 255, 255, 0.3))' : 'brightness(0.7)';
            cloud.style.animationDuration = `${Math.random() * 20 + 20}s`;
            cloud.style.animationDelay = `0s`;
            rainyClouds.appendChild(cloud);
          }
          for (let i = 0; i < (isSmallScreen ? 100 : 200); i++) {
            const raindrop = document.createElement('div');
            raindrop.className = 'raindrop';
            raindrop.style.left = `${Math.random() * 100}%`;
            raindrop.style.height = `${Math.random() * 15 + 10}px`;
            raindrop.style.opacity = `${Math.random() * 0.4 + 0.3}`;
            raindrop.style.animationDuration = `${Math.random() * 0.5 + 0.7}s`;
            raindrop.style.animationDelay = `${Math.random() * 2}s`;
            rainContainer.appendChild(raindrop);
          }
          if (isNightTime) {
            const starContainer = document.createElement('div');
            starContainer.className = 'star-container';
            background.appendChild(starContainer);
            for (let i = 0; i < (isSmallScreen ? 50 : 100); i++) {
              const star = document.createElement('div');
              star.className = 'star';
              const size = Math.random() * 3 + 1;
              star.style.width = `${size}px`;
              star.style.height = `${size}px`;
              star.style.left = `${Math.random() * 100}%`;
              star.style.top = `${Math.random() * 100}%`;
              star.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
              star.style.animationDelay = `0s`;
              starContainer.appendChild(star);
            }
          }
          break;
          
        case 'Thunderstorm':
          background.classList.add('thunderstorm');
          const stormRainContainer = document.createElement('div');
          stormRainContainer.className = 'rain-container';
          background.appendChild(stormRainContainer);
          const stormClouds = document.createElement('div');
          stormClouds.className = 'cloud-container';
          background.appendChild(stormClouds);
          for (let i = 0; i < (isSmallScreen ? 2 : 4); i++) {
            const cloud = document.createElement('div');
            cloud.className = 'cloud cloud-large';
            cloud.style.top = `${Math.random() * 20 + 5}%`;
            cloud.style.opacity = '0.8';
            cloud.style.filter = 'brightness(0.4)';
            cloud.style.animationDuration = `${Math.random() * 20 + 20}s`;
            cloud.style.animationDelay = `0s`;
            stormClouds.appendChild(cloud);
          }
          for (let i = 0; i < (isSmallScreen ? 150 : 300); i++) {
            const raindrop = document.createElement('div');
            raindrop.className = 'raindrop';
            raindrop.style.left = `${Math.random() * 100}%`;
            raindrop.style.height = `${Math.random() * 20 + 15}px`;
            raindrop.style.width = '3px';
            raindrop.style.opacity = `${Math.random() * 0.5 + 0.4}`;
            raindrop.style.animationDuration = `${Math.random() * 0.3 + 0.5}s`;
            raindrop.style.animationDelay = `${Math.random() * 2}s`;
            stormRainContainer.appendChild(raindrop);
          }
          const lightningContainer = document.createElement('div');
          lightningContainer.className = 'lightning-container';
          background.appendChild(lightningContainer);
          function createLightning() {
            const lightning = document.createElement('div');
            lightning.className = 'lightning';
            const startX = Math.random() * 80 + 10;
            const height = Math.random() * 30 + 15;
            lightning.style.left = `${startX}%`;
            lightning.style.top = '20%';
            lightning.style.height = `${height}vh`;
            lightning.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
            lightning.style.animationDuration = '0.5s';
            lightningContainer.appendChild(lightning);
            setTimeout(() => {
              lightning.remove();
            }, 500);
          }
          setInterval(() => {
            if (Math.random() > 0.7) {
              createLightning();
            }
          }, 3000);
          if (isNightTime) {
            const starContainer = document.createElement('div');
            starContainer.className = 'star-container';
            background.appendChild(starContainer);
            for (let i = 0; i < (isSmallScreen ? 50 : 100); i++) {
              const star = document.createElement('div');
              star.className = 'star';
              const size = Math.random() * 3 + 1;
              star.style.width = `${size}px`;
              star.style.height = `${size}px`;
              star.style.left = `${Math.random() * 100}%`;
              star.style.top = `${Math.random() * 100}%`;
              star.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
              star.style.animationDelay = `0s`;
              starContainer.appendChild(star);
            }
          }
          break;
          
        case 'Snow':
          background.classList.add('snow-background');
          const snowContainer = document.createElement('div');
          snowContainer.className = 'snow-container';
          background.appendChild(snowContainer);
          const snowClouds = document.createElement('div');
          snowClouds.className = 'cloud-container';
          background.appendChild(snowClouds);
          for (let i = 0; i < (isSmallScreen ? 2 : 3); i++) {
            const cloud = document.createElement('div');
            cloud.className = 'cloud cloud-large';
            cloud.style.top = `${Math.random() * 25 + 5}%`;
            cloud.style.opacity = '0.9';
            cloud.style.animationDuration = `${Math.random() * 20 + 20}s`;
            cloud.style.animationDelay = `0s`;
            snowClouds.appendChild(cloud);
          }
          for (let i = 0; i < (isSmallScreen ? 50 : 100); i++) {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.innerHTML = '❄';
            snowflake.style.left = `${Math.random() * 100}%`;
            snowflake.style.opacity = `${Math.random() * 0.7 + 0.3}`;
            snowflake.style.fontSize = `${Math.random() * 15 + 10}px`;
            snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
            snowflake.style.animationDelay = `${Math.random() * 5}s`;
            snowContainer.appendChild(snowflake);
          }
          if (isNightTime) {
            const starContainer = document.createElement('div');
            starContainer.className = 'star-container';
            background.appendChild(starContainer);
            for (let i = 0; i < (isSmallScreen ? 50 : 100); i++) {
              const star = document.createElement('div');
              star.className = 'star';
              const size = Math.random() * 3 + 1;
              star.style.width = `${size}px`;
              star.style.height = `${size}px`;
              star.style.left = `${Math.random() * 100}%`;
              star.style.top = `${Math.random() * 100}%`;
              star.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
              star.style.animationDelay = `0s`;
              starContainer.appendChild(star);
            }
          }
          break;
          
        case 'Mist':
        case 'Fog':
        case 'Haze':
          background.classList.add('mist');
          const fogContainer = document.createElement('div');
          fogContainer.className = 'fog-container';
          background.appendChild(fogContainer);
          for (let i = 0; i < (isSmallScreen ? 2 : 4); i++) {
            const fog = document.createElement('div');
            fog.className = 'fog';
            fog.style.top = `${i * 25}%`;
            fog.style.opacity = `${Math.random() * 0.2 + 0.1}`;
            fog.style.animationDuration = `${Math.random() * 10 + 20}s`;
            fog.style.animationDelay = `${i * 2}s`;
            fogContainer.appendChild(fog);
          }
          const mistClouds = document.createElement('div');
          mistClouds.className = 'cloud-container';
          background.appendChild(mistClouds);
          for (let i = 0; i < (isSmallScreen ? 2 : 3); i++) {
            const cloud = document.createElement('div');
            cloud.className = 'cloud cloud-large';
            cloud.style.top = `${Math.random() * 30 + 5}%`;
            cloud.style.opacity = '0.7';
            cloud.style.animationDuration = `${Math.random() * 20 + 20}s`;
            cloud.style.animationDelay = `0s`;
            mistClouds.appendChild(cloud);
          }
          if (isNightTime) {
            const starContainer = document.createElement('div');
            starContainer.className = 'star-container';
            background.appendChild(starContainer);
            for (let i = 0; i < (isSmallScreen ? 50 : 100); i++) {
              const star = document.createElement('div');
              star.className = 'star';
              const size = Math.random() * 3 + 1;
              star.style.width = `${size}px`;
              star.style.height = `${size}px`;
              star.style.left = `${Math.random() * 100}%`;
              star.style.top = `${Math.random() * 100}%`;
              star.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
              star.style.animationDelay = `0s`;
              starContainer.appendChild(star);
            }
          }
          break;
          
        default:
          background.style.background = 'linear-gradient(135deg, #1e3c72, #2a5298)';
      }
    }
    
    function isNight(sunrise, sunset) {
      const now = Math.floor(Date.now() / 1000);
      return (now < sunrise || now > sunset);
    }
    
    function getWeatherIcon(weatherMain, isNightTime) {
      switch(weatherMain) {
        case 'Clear': return isNightTime ? 'fa-moon' : 'fa-sun';
        case 'Clouds': return isNightTime ? 'fa-cloud-moon' : 'fa-cloud-sun';
        case 'Rain': return 'fa-cloud-rain';
        case 'Drizzle': return 'fa-cloud-showers-heavy';
        case 'Thunderstorm': return 'fa-bolt';
        case 'Snow': return 'fa-snowflake';
        case 'Mist':
        case 'Fog':
        case 'Haze': return 'fa-smog';
        default: return 'fa-cloud';
      }
    }
    
    function updateTags() {
      const tagsContainer = document.getElementById('tagsContainer');
      tagsContainer.innerHTML = '';
      
      citiesData.forEach((city, index) => {
        const tag = document.createElement('div');
        tag.className = `tag ${activeCity === index ? 'active' : ''}`;
        tag.innerHTML = `
          <i class="fas ${getWeatherIcon(city.weatherData.weather[0].main, isNight(city.weatherData.sys.sunrise, city.weatherData.sys.sunset))}"></i>
          <span>${city.cityName}</span>
          <span>${Math.round(city.weatherData.main.temp)}°C</span>
          <i class="fas fa-times tag-close" onclick="removeCity(${index})"></i>
        `;
        tag.onclick = (e) => {
          if (e.target.classList.contains('tag-close')) return;
          showCityWeather(index);
        };
        tagsContainer.appendChild(tag);
      });
    }
    
    function showCityWeather(index) {
      if (index < 0 || index >= citiesData.length) return;
      activeCity = index;
      const city = citiesData[index];
      const dados = city.weatherData;
      
      const nomeCidade = city.cityName;
      const pais = dados.sys.country;
      const clima = dados.weather[0].description;
      const climaMain = dados.weather[0].main;
      const temperatura = Math.round(dados.main.temp);
      const sensacaoTermica = Math.round(dados.main.feels_like);
      const umidade = dados.main.humidity;
      const vento = Math.round(dados.wind.speed * 3.6);
      const sunrise = dados.sys.sunrise;
      const sunset = dados.sys.sunset;
      
      const isNightTime = isNight(sunrise, sunset);
      criarBackground(climaMain, isNightTime);
      const weatherIcon = getWeatherIcon(climaMain, isNightTime);
      
      const dataAtual = new Date();
      const opcoesData = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
      const dataFormatada = dataAtual.toLocaleDateString('pt-BR', opcoesData);
      const horaFormatada = dataAtual.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
      
      document.getElementById('resultado').innerHTML = `
        <div class="city-info">
          <i class="fas ${weatherIcon}"></i>
          <span>${nomeCidade}, ${pais}${city.isGeolocation ? ' (Localização Atual)' : ''}</span>
        </div>
        <div class="temp-display">
          ${temperatura}°C
        </div>
        <div class="weather-desc">
          ${clima.charAt(0).toUpperCase() + clima.slice(1)}
        </div>
        <div style="font-size: clamp(0.7rem, 1.5vw, 0.9rem); margin-bottom: clamp(15px, 3vh, 20px);">
          ${dataFormatada} | ${horaFormatada}
        </div>
        <div class="weather-details">
          <div class="detail-item">
            <i class="fas fa-temperature-high"></i>
            <span class="detail-value">${sensacaoTermica}°C</span>
            <span class="detail-label">Sensação</span>
          </div>
          <div class="detail-item">
            <i class="fas fa-tint"></i>
            <span class="detail-value">${umidade}%</span>
            <span class="detail-label">Umidade</span>
          </div>
          <div class="detail-item">
            <i class="fas fa-wind"></i>
            <span class="detail-value">${vento} km/h</span>
            <span class="detail-label">Vento</span>
          </div>
        </div>
      `;
      
      document.getElementById('resultado').classList.add('visible');
      updateTags();
    }
    
    function removeCity(index) {
      citiesData.splice(index, 1);
      if (activeCity === index) {
        activeCity = citiesData.length > 0 ? 0 : null;
        if (activeCity !== null) {
          showCityWeather(activeCity);
        } else {
          document.getElementById('resultado').innerHTML = '';
          document.getElementById('weather-background').innerHTML = '';
          document.getElementById('weather-background').style.background = 'linear-gradient(135deg, #1e3c72, #2a5298)';
        }
      } else if (activeCity > index) {
        activeCity--;
      }
      updateTags();
    }
    
    async function buscarClimaPorCoordenadas(lat, lon, cityName, isGeolocation = false) {
      const apiKey = 'c2f388120bb65bff772ae332b210ac3f';
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=pt_br&units=metric`;
      
      document.getElementById('loading').classList.add('active');
      document.getElementById('resultado').classList.remove('visible');
      document.getElementById('suggestions').classList.remove('visible');
      
      try {
        const resposta = await fetch(url);
        const dados = await resposta.json();
        
        document.getElementById('loading').classList.remove('active');
        
        if (dados.cod === 200) {
          const nomeCidade = cityName || dados.name;
          citiesData.push({
            cityName: nomeCidade,
            lat,
            lon,
            weatherData: dados,
            isGeolocation
          });
          activeCity = citiesData.length - 1;
          showCityWeather(activeCity);
          document.getElementById('cidade').value = '';
        } else {
          document.getElementById('resultado').innerHTML = `
            <div class="city-info" style="color: #ff6b6b;">
              <i class="fas fa-map-marker-alt"></i>
              <span>Não foi possível obter os dados do clima</span>
            </div>
            <div style="margin-top: 10px;">
              Tente digitar uma cidade manualmente.
            </div>
          `;
          document.getElementById('resultado').classList.add('visible');
        }
      } catch (erro) {
        document.getElementById('loading').classList.remove('active');
        document.getElementById('resultado').innerHTML = `
          <div class="city-info" style="color: #ff6b6b;">
            <i class="fas fa-exclamation-triangle"></i>
            <span>Erro ao buscar dados do clima</span>
          </div>
          <div style="margin-top: 10px;">
            Verifique sua conexão e tente novamente.
          </div>
        `;
        document.getElementById('resultado').classList.add('visible');
        console.error('Erro:', erro);
      }
    }
    
    async function buscarCidades(query) {
      if (query.length < 3) {
        document.getElementById('suggestions').classList.remove('visible');
        document.getElementById('suggestions').innerHTML = '';
        return;
      }
      
      const apiKey = 'c2f388120bb65bff772ae332b210ac3f';
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(query)}&limit=5&appid=${apiKey}`;
      
      try {
        const resposta = await fetch(url);
        const dados = await resposta.json();
        
        const suggestions = document.getElementById('suggestions');
        suggestions.innerHTML = '';
        
        if (dados.length > 0) {
          dados.forEach(city => {
            const item = document.createElement('div');
            item.className = 'suggestion-item';
            const cityName = `${city.name}${city.state ? `, ${city.state}` : ''}, ${city.country}`;
            item.textContent = cityName;
            item.onclick = () => {
              document.getElementById('cidade').value = cityName;
              buscarClimaPorCoordenadas(city.lat, city.lon, cityName);
            };
            suggestions.appendChild(item);
          });
          suggestions.classList.add('visible');
        } else {
          suggestions.classList.remove('visible');
        }
      } catch (erro) {
        console.error('Erro ao buscar cidades:', erro);
        document.getElementById('suggestions').classList.remove('visible');
      }
    }
    
    function debounce(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }
    
    async function buscarClima() {
      const cidade = document.getElementById('cidade').value.trim();
      if (!cidade) {
        document.getElementById('resultado').innerHTML = `
          <div class="city-info" style="color: #ff6b6b;">
            <i class="fas fa-exclamation-circle"></i>
            <span>Por favor, digite uma cidade</span>
          </div>
        `;
        document.getElementById('resultado').classList.add('visible');
        document.getElementById('suggestions').classList.remove('visible');
        return;
      }
      
      const apiKey = 'c2f388120bb65bff772ae332b210ac3f';
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(cidade)}&limit=1&appid=${apiKey}`;
      
      try {
        const resposta = await fetch(url);
        const dados = await resposta.json();
        
        if (dados.length > 0) {
          const city = dados[0];
          buscarClimaPorCoordenadas(city.lat, city.lon, `${city.name}${city.state ? `, ${city.state}` : ''}, ${city.country}`);
        } else {
          document.getElementById('loading').classList.remove('active');
          document.getElementById('resultado').innerHTML = `
            <div class="city-info" style="color: #ff6b6b;">
              <i class="fas fa-map-marker-alt"></i>
              <span>Cidade não encontrada</span>
            </div>
            <div style="margin-top: 10px;">
              Verifique se o nome está correto e tente novamente.
            </div>
          `;
          document.getElementById('resultado').classList.add('visible');
          document.getElementById('suggestions').classList.remove('visible');
        }
      } catch (erro) {
        document.getElementById('loading').classList.remove('active');
        document.getElementById('resultado').innerHTML = `
          <div class="city-info" style="color: #ff6b6b;">
            <i class="fas fa-exclamation-triangle"></i>
            <span>Erro ao buscar dados</span>
          </div>
          <div style="margin-top: 10px;">
            Verifique sua conexão e tente novamente.
          </div>
        `;
        document.getElementById('resultado').classList.add('visible');
        document.getElementById('suggestions').classList.remove('visible');
        console.error('Erro:', erro);
      }
    }
    
    function obterLocalizacao() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            buscarClimaPorCoordenadas(lat, lon, null, true);
          },
          (error) => {
            document.getElementById('loading').classList.remove('active');
            document.getElementById('resultado').innerHTML = `
              <div class="city-info" style="color: #ff6b6b;">
                <i class="fas fa-map-marker-alt"></i>
                <span>Não foi possível obter sua localização</span>
              </div>
              <div style="margin-top: 10px;">
                Permita o acesso à localização ou digite uma cidade manualmente.
              </div>
            `;
            document.getElementById('resultado').classList.add('visible');
            criarBackground('Clear', false);
            console.error('Erro de geolocalização:', error);
          }
        );
      } else {
        document.getElementById('loading').classList.remove('active');
        document.getElementById('resultado').innerHTML = `
          <div class="city-info" style="color: #ff6b6b;">
            <i class="fas fa-exclamation-triangle"></i>
            <span>Geolocalização não é suportada pelo navegador</span>
          </div>
          <div style="margin-top: 10px;">
            Digite uma cidade manualmente para ver a previsão do tempo.
          </div>
        `;
        document.getElementById('resultado').classList.add('visible');
        criarBackground('Clear', false);
      }
    }
    
    document.getElementById('cidade').addEventListener('input', debounce((e) => {
      buscarCidades(e.target.value);
    }, 300));
    
    document.getElementById('cidade').addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        buscarClima();
      }
    });
    
    window.onload = function() {
      document.getElementById('loading').classList.add('active');
      obterLocalizacao();
    };
