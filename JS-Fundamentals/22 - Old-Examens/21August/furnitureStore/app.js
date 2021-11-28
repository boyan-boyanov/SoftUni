
window.addEventListener('load', solve);

function solve() {
    let buttonElement = document.getElementById('add')
    buttonElement.addEventListener('click', getInfo)
    let model = document.getElementById('model')
    let year = document.getElementById('year')
    let description = document.getElementById('description')
    let price = document.getElementById('price')

    let tBody = document.getElementById('furniture-list')
    let totalPrice = document.querySelector('.total-price')



    function isValid() {
        if (model.value !== "" && description.value !== "" && year.value > 0 && price.value > 0) {
            return true
        } else {
            return false
        }
    }
    function showMore(e) {
        let infoClass = e.target.parentNode.parentNode
        let hideClass = infoClass.nextElementSibling
        if (e.target.textContent == "More Info") {
            e.target.textContent = "Less info"
            hideClass.style.display = 'contents'
            console.log(hideClass);
        } else {
            e.target.textContent = "More Info"
            hideClass.style.display = 'none'
            console.log(hideClass);
        }



    }

    function buyIt(e) {
        let firstRoll = e.target.parentNode.parentNode
        let secondRoll = firstRoll.nextElementSibling
        let sum = firstRoll.querySelector('td:nth-child(2)');
        let result = Number(totalPrice.textContent) + Number(sum.textContent)
        result = result.toFixed(2)
        totalPrice.textContent = result
        secondRoll.remove()
        firstRoll.remove()
    }

    function getInfo(e) {
        e.preventDefault()
        console.log(isValid());
        if (isValid() === true) {
            let trElement = document.createElement('tr')
            trElement.classList.add('info')
            let tdModel = document.createElement('td');
            tdModel.textContent = model.value;
            let tdPrice = document.createElement('td')
            let priceNum = Number(price.value).toFixed(2)
            tdPrice.textContent = priceNum
            let tdButtons = document.createElement('td')
            let buttonInfo = document.createElement('button')
            buttonInfo.textContent = 'More Info'
            buttonInfo.classList.add('moreBtn')
            buttonInfo.addEventListener('click', showMore)
            tdButtons.appendChild(buttonInfo)
            let buttonBuy = document.createElement("button");
            buttonBuy.addEventListener('click', buyIt)
            buttonBuy.textContent = "Buy it";
            buttonBuy.classList.add("buyBtn")
            tdButtons.appendChild(buttonBuy)


            trElement.appendChild(tdModel);
            trElement.appendChild(tdPrice)
            trElement.appendChild(tdButtons)

            let trMore = document.createElement('tr')
            trMore.classList.add('hide')
            trMore.style.display = 'none'
            let tdYear = document.createElement('td')
            tdYear.textContent = `Year: ${year.value}`
            trMore.appendChild(tdYear)
            let tdDescript = document.createElement('td')
            tdDescript.textContent = `Description: ${description.value}`
            tdDescript.setAttribute('colspan', '3')
            trMore.appendChild(tdDescript)


            tBody.appendChild(trElement)
            tBody.appendChild(trMore)
            model.value = ""
            year.value = ""
            description.value = ""
            price.value = ""
        }
        
    }
}



