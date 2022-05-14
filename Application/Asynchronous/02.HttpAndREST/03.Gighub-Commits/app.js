function loadCommits() {
    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    let result = document.getElementById('commits')
    result.innerHTML = ''
    request()
    async function request() {
        try {
            const response = await fetch(`https://api.github.com/repos/${username}/${repo}/commits`)
            if (response.ok == false) {
                throw new Error(`${response.status} (Not Found)`)
            }
            const data = await response.json();
            for (let el of data) {
                let name = el.commit.author.name;
                let message = el.commit.message;
                let elElement = document.createElement('li')
                elElement.textContent = `${name}: ${message}`
                result.appendChild(elElement)
            }

        } catch (error) {
            let elElement = document.createElement('li')
            elElement.textContent = error
            result.appendChild(elElement)
            console.log(error);
        }
    }
    // Try it with Fetch API

}