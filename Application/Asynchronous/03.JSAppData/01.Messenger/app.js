function attachEvents() {
    const refreshBtn = document.getElementById('refresh')
    refreshBtn.addEventListener('click', refresh)
    const sendBtn = document.getElementById('submit')
    sendBtn.addEventListener('click', sendText)
 
}
async function sendText() {
    const name = document.querySelector('[name=author]').value
    const message = document.querySelector('[name=content]').value
    const newMessage = {
        author: name,
        content: message
    }
    const option = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newMessage)
    }
 
    const request = await fetch('http://localhost:3030/jsonstore/messenger', option)
    let textArea = document.getElementById('messages')
    textArea.value += '\n' + `${name}: ${message}`
 
}
 
async function refresh() {
    let textArea = document.getElementById('messages')
 
    try {
        const request = await fetch('http://localhost:3030/jsonstore/messenger')
        if (request.status != 200) {
            throw new Error('Sorry try again later...')
        }
        const data = await request.json()
        let result = []
        textArea.value = ''
        Object.values(data).forEach(x => {
            result.push(`${x.author}: ${x.content}`);
        })
        textArea.value = result.join('\n')
    } catch (error) {
        alert(error)
    }
 
}
 
attachEvents();