const url = 'http://localhost:3030/jsonstore/collections/students'
const myForm = document.getElementById('form')
myForm.addEventListener('submit', getInfo)
const tBodyElement = document.querySelector('tbody')
 
async function getInfo(e) {
    e.preventDefault()
    let formData = new FormData(myForm)
    let allData = [...formData.entries()]
    let firstName = allData[0][1].trim()
    let lastName = allData[1][1].trim()
    let facultyNumber = allData[2][1].trim()
    let grade = allData[3][1].trim()
    const isNumber = Number(grade)
    if (firstName !== "" && lastName !== "" && facultyNumber !== "" && grade != "" && !Number.isNaN(isNumber)) {
        const option = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ firstName, lastName, facultyNumber, grade })
        }
        const request = await fetch(url, option)
        const data = await request.json()
        console.log(data);
        myForm.reset();
        tBodyElement.replaceChildren()
        extract()
    }
 
}
 
async function extract() {
    const request = await fetch(url)
    const data = await request.json()
    Object.values(data).forEach(x => {
 
        let trElement = document.createElement('tr')
        let tdFirstName = document.createElement('td')
        tdFirstName.textContent = x.firstName
        let tdLastName = document.createElement('td')
        tdLastName.textContent = x.lastName
        let tdNumber = document.createElement('td')
        tdNumber.textContent = x.facultyNumber
        let tdGrade = document.createElement('td')
        tdGrade.textContent = Number(x.grade).toFixed(2)
        trElement.appendChild(tdFirstName)
        trElement.appendChild(tdLastName)
        trElement.appendChild(tdNumber)
        trElement.appendChild(tdGrade)
        tBodyElement.appendChild(trElement)
    })
}
 
extract()