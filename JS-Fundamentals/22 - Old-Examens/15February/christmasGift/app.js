function solution() {
    //add gift new list item with class gift, sort gift alphabeticaly, clear field
    // appendto list ITEM sendButton and discardButto with this ID
    let allFields = document.querySelectorAll('.card')
    let addGifts = allFields[0]
    let listOfGifts = allFields[1]
    let sendGifts = allFields[2]
    let discardedGifts = allFields[3]
    let giftsArray = []

    let newGiftEl = addGifts.querySelector('input')
    let addGiftButton = addGifts.querySelector('button')
    addGiftButton.addEventListener('click', getInfo)




    function getInfo(e) {
        giftsArray.push(newGiftEl.value)
        let sorted = giftsArray.sort((a, b) => a.localeCompare(b))
        let ulEl = listOfGifts.querySelectorAll('ul li')
        let ulAdd = listOfGifts.querySelector('ul')
        for (let el of ulEl) {
            el.remove()
        }
        for (let el of sorted) {
            let liEl = document.createElement('li')
            liEl.setAttribute('class', 'gift')
            liEl.textContent = el
            let sendButton = document.createElement('button')
            sendButton.setAttribute('id', 'sendButton')
            sendButton.textContent = 'Send'
            sendButton.addEventListener('click', sendGift)
            liEl.appendChild(sendButton)
            let discardButton = document.createElement('button')
            discardButton.setAttribute('id', 'discardButton')
            discardButton.textContent = 'Discard'
            discardButton.addEventListener('click', discardGift)
            liEl.appendChild(discardButton)
            ulAdd.appendChild(liEl)
        }
        newGiftEl.value = ''
    }

    function sendGift(e) {
        let moveElement = e.currentTarget.parentNode;
        let first = moveElement.querySelector('button')
        first.remove()
        let second = moveElement.querySelector('button')
        second.remove()
        let getName = moveElement.textContent;
        moveElement.remove()
        let newLi = document.createElement('li')
        newLi.textContent = getName
        newLi.setAttribute('class', 'gift')

        let pos = sendGifts.querySelector('ul')
        pos.appendChild(newLi)

        let index = giftsArray.indexOf(getName)
        giftsArray.splice(index, 1)

    }

    function discardGift(e) {
        let moveElement = e.currentTarget.parentNode;
        let first = moveElement.querySelector('button')
        first.remove()
        let second = moveElement.querySelector('button')
        second.remove()
        let getName = moveElement.textContent;
        moveElement.remove()
        let newLi = document.createElement('li')
        newLi.textContent = getName
        newLi.setAttribute('class', 'gift')

        let pos = discardedGifts.querySelector('ul')
        pos.appendChild(newLi)
        let index = giftsArray.indexOf(getName)
        giftsArray.splice(index, 1)
    }
}