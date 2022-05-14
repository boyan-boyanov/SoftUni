function solve() {
    let buttonDepart = document.getElementById('depart')
    let buttonArrive = document.getElementById('arrive')
    let nextStopElement = document.querySelector('.info')
    let stopName = ''
    let nextStop = 'depot'

    async function depart() {
        buttonArrive.disabled = false
        buttonDepart.disabled = true
        const request = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${nextStop}`)
        const data = await request.json()
        nextStop = data.next
        nextStopElement.textContent = `Next stop ${data.name}`
        stopName = data.name
    }

    function arrive() {
        buttonArrive.disabled = true
        buttonDepart.disabled = false
        nextStopElement.textContent = `Arriving at ${stopName}`
    }
    return {
        depart,
        arrive
    };
}

let result = solve();