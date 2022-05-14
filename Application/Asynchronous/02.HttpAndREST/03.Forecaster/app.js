function attachEvents() {
    let submitBtn = document.getElementById('submit')
    submitBtn.addEventListener('click', getInfo)
    let forecastElement = document.getElementById('forecast')
    let current = document.getElementById('current')
    let upcoming = document.getElementById('upcoming')


    async function getInfo(event) {
        let location = document.getElementById('location').value
        forecastElement.style = 'display: visible'
        clearAndLoading()

        try {
            const request = await fetch('http://localhost:3030/jsonstore/forecaster/locations')
            if (request.status != '200') {
                throw new Error('Error')
            }
            const data = await request.json()
            const currentLocation = data.find(x => x.name === location)
            if (currentLocation === undefined) {
                throw new Error('Error')
            }
            const code = currentLocation.code
            const name = currentLocation.name
            let [current, forecast] = await Promise.all([condition(code), forecaster(code)])
            console.log(current);
            console.log(forecast);
            addToDOM(current, forecast)

        } catch (error) {
            let removeElementCurrent = document.querySelector('.forecasts')
        let removeElementForecast = document.querySelector('.forecasts-info')
        if (removeElementCurrent != null) {
            removeElementCurrent.remove()
        }
        if (removeElementForecast != null) {
            removeElementForecast.remove()
        }

        let currentDiv = document.createElement('div')
        currentDiv.setAttribute('class', 'forecasts')
        currentDiv.textContent = "Error"
        current.appendChild(currentDiv)

        let forecastDiv = document.createElement('div')
        forecastDiv.setAttribute('class', 'forecasts-info')
        forecastDiv.textContent = "Error"
        upcoming.appendChild(forecastDiv)
        }
    }

    async function condition(code) {
        const request = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`)

        const data = await request.json();
        return data
    }

    async function forecaster(code) {
        const request = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`)

        const data = await request.json();
        return data
    }  
    function addToDOM(current, forecast) {
        let allSymbol = {
            Sunny: '☀',
            "Partly sunny": '⛅',
            Overcast: '☁',
            Rain: '☂',
            Degrees: '&#176;'
        }
        let currentForecastSymbol = current.forecast.condition
        let divForecast = createEl('div', ['class', 'forecasts'], '')
        let spanSymbol = createEl('span', ['class', 'condition symbol'], `${allSymbol[currentForecastSymbol]}`)
        divForecast.appendChild(spanSymbol)
        let spanElement = createEl('span', ['class', 'condition'], '')
        let spanCity = createEl('span', ['class', 'forecast-data'], `${current.name}`)
        let spanTemp = createEl('span', ['class', 'forecast-data'], `${current.forecast.low}\xB0/${current.forecast.high}\xB0`)
        let spanCondition = createEl('span', ['class', 'forecast-data'], `${current.forecast.condition}`)
        spanElement.appendChild(spanCity)
        spanElement.appendChild(spanTemp)
        spanElement.appendChild(spanCondition)
        divForecast.appendChild(spanElement)
        let removeElementCurrent = document.querySelector('.forecasts')
        if (removeElementCurrent != null) {
            removeElementCurrent.remove()
        }
        let currentDivElement = document.getElementById('current')
        currentDivElement.appendChild(divForecast)

        let divForecastInfo = createEl('div', ['class', 'forecasts-info'], '')
        for (let el of forecast.forecast) {
            console.log(el);
            let spanUpcoming = createEl('span', ['class', 'upcoming'], '')
            let spanSymbolEl = createEl('span', ['class', 'symbol'], `${allSymbol[el.condition]}`)
            let spanForecastTemp = createEl('span', ['class', 'forecast-data'], `${el.low}\xB0/${el.high}\xB0`)
            let spanForecastCondition = createEl('span', ['class', 'forecast-data'], `${el.condition}`)
            spanUpcoming.appendChild(spanSymbolEl)
            spanUpcoming.appendChild(spanForecastTemp)
            spanUpcoming.appendChild(spanForecastCondition)
            divForecastInfo.appendChild(spanUpcoming)
        }
        let removeElementForecast = document.querySelector('.forecasts-info')
        if (removeElementForecast != null) {
            removeElementForecast.remove()
        }
        let upcomingDiv = document.getElementById('upcoming')
        upcomingDiv.appendChild(divForecastInfo)

    }
    function clearAndLoading() {
        let removeElementCurrent = document.querySelector('.forecasts')
        let removeElementForecast = document.querySelector('.forecasts-info')
        if (removeElementCurrent != null) {
            removeElementCurrent.remove()
        }
        if (removeElementForecast != null) {
            removeElementForecast.remove()
        }

        let currentDiv = document.createElement('div')
        currentDiv.setAttribute('class', 'forecasts')
        currentDiv.textContent = "loading..."
        current.appendChild(currentDiv)

        let forecastDiv = document.createElement('div')
        forecastDiv.setAttribute('class', 'forecasts-info')
        forecastDiv.textContent = "loading..."
        upcoming.appendChild(forecastDiv)
    }
    function createEl(type, atrr, content) {
        let result = document.createElement(type)
        if (atrr !== "") {
            for (let i = 0; i < atrr.length; i += 2) {
                result.setAttribute(atrr[i], atrr[i + 1])
            }
        }
        if (content !== '') {
            result.textContent = content
        }
        return result
    }
}

attachEvents();