function getInfo() {
    let stopName = document.getElementById("stopName")
    let busId = document.getElementById('stopId').value
    let busesInfo = document.getElementById("buses")


    busInfo(busId)
    async function busInfo(id) {
        stopName.textContent = 'Loading...'
        busesInfo.replaceChildren()
        try {
            const request = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${id}`)
            const data = await request.json()
           
            stopName.textContent = data.name
            Object.entries(data.buses).forEach(e => {
                let liEl = document.createElement('li')
                liEl.textContent = `Bus ${e[0]} arrives in ${e[1]} minutes`
                busesInfo.appendChild(liEl)
                console.log(e);
            })
        } catch (error) {
            stopName.textContent = 'Error'
        }
    }
}