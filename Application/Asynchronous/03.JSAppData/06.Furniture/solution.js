window.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.userData !== undefined) {
    window.location = '/homeLogged.html'
  }
  const catalogBtn = document.getElementById('catalog')
  catalogBtn.addEventListener('click', loadData)

})


async function loadData(e) {
  e.preventDefault()
  try {
    const request = await fetch("http://localhost:3030/data/furniture")
    if (request.ok != true) {
      const err = await request.json()
      throw new Error(err.message)
    }
    const data = await request.json()
    console.log(data);
    const tBody = document.querySelector('tbody')
    tBody.replaceChildren()
    data.map(x => {
      const trElement = createEl('tr', ["ownerId", `${x._ownerId}`, "id", `${x._id}`], "");
      const tdImg = document.createElement('td')
      const imgElement = createEl("img", ["src", `${x.img}`], "")
      tdImg.appendChild(imgElement)
      const tdName = document.createElement('td')
      const pName = createEl("p", "", `${x.name}`)
      tdName.appendChild(pName)
      const tdPrice = document.createElement('td')
      const pPrice = createEl("p", "", `${x.price}`)
      tdPrice.appendChild(pPrice)
      const tdFactor = document.createElement('td')
      const pFactor = createEl("p", "", `${x.decFactor}`)
      tdFactor.appendChild(pFactor)
      trElement.appendChild(tdImg)
      trElement.appendChild(tdName)
      trElement.appendChild(tdPrice)
      trElement.appendChild(tdFactor)
      const tdCheck = document.createElement('td')
      const inputCheck = createEl('input', ["type", "checkbox", "disabled", "true"], "")
      tdCheck.appendChild(inputCheck)
      trElement.appendChild(tdCheck)
      tBody.appendChild(trElement)
    })
  } catch (error) {
    alert(error)
  }

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



