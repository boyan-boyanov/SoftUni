function lockedProfile() {
    let main = document.getElementById('main')
    getInfo()
    async function getInfo() {
        const request = await fetch('http://localhost:3030/jsonstore/advanced/profiles')

        const data = await request.json()
        console.log(data);
        main.replaceChildren()
        for (let el of Object.entries(data)) {
            createProfile(el[1])
        }
    }
    function createProfile(info) {
        const divProfile = createEl('div', ['class', 'profile'], '')
        const img = createEl('img', ['src', './iconProfile2.png', 'class', 'userIcon'], '')
        const labelLock = createEl('label', '', 'Lock')
        const radioLock = createEl('input', ['type', 'radio', 'name', 'user1Locked', 'value', 'lock', 'checked', 'true'], '')
        const labelUnlock = createEl('label', '', 'Unlock')
        const radioUnlock = createEl('input', ['type', 'radio', 'name', 'user1Locked', 'value', 'unlock',], '')
        const br1 = document.createElement('br')
        const hr1 = document.createElement('hr')
        const labelName = createEl('label', '', 'Username')
        const inputText = createEl('input', ['type', 'text', 'name', 'user1Username', 'value', `${info.username}`, 'disabled', 'true', 'readonly', 'true'], '')
        divProfile.appendChild(img)
        divProfile.appendChild(labelLock)
        divProfile.appendChild(radioLock)
        divProfile.appendChild(labelUnlock)
        divProfile.appendChild(radioUnlock)
        divProfile.appendChild(br1)
        divProfile.appendChild(hr1)
        divProfile.appendChild(labelName)
        divProfile.appendChild(inputText)

        const divId = createEl('div', ['id', 'user1HiddenFields'], '')
        const hr2 = document.createElement('hr')
        const labelEmail = createEl('label', '', 'Email:')
        const inputEmail = createEl('input', ['type', 'email', 'name', 'user1Email', 'value', `${info.email}`, 'disabled', 'true', 'readonly', 'true'], '')
        const age = createEl('lable', '', 'Age:')
        const inputEmailUser = createEl('input', ['type', 'email', 'name', 'user1Age', 'value', `${info.age}`, 'disabled', 'true', 'readonly', 'true'], '')
        divId.appendChild(hr2)
        divId.appendChild(labelEmail)
        divId.appendChild(inputEmail)
        divId.appendChild(age)
        divId.appendChild(inputEmailUser)
        divProfile.appendChild(divId)
        const showMore = createEl('button', '', 'Show more')
        showMore.addEventListener('click', moreInfo)
        divProfile.appendChild(showMore)
        
        main.appendChild(divProfile)
    }

    function moreInfo(e) {
        let parentEl = e.target.parentElement
        let checkedField = parentEl.querySelector("input[value=unlock]");
        if (checkedField.checked === true) {
            let divHide = parentEl.querySelector("div[id=user1HiddenFields]")

            if (divHide.style.display === 'block') {
                divHide.style.display = 'none'
            } else {
                divHide.style.display = 'block'
            }
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
}