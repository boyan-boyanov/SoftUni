function loadRepos() {
	let repos = document.getElementById('repos')
	let name = document.getElementById('username').value;

	repos.innerHTML = ""

	request()
	async function request() {
		try {
			const response = await fetch(`https://api.github.com/users/${name}/repos`);
			if (response.ok == false) {
				throw new Error(`${response.status} ${response.statusText}`)
			}
			let data = await response.json()
			console.log(data);
			for (let el of data) {
				let liElement = document.createElement('li')
				let aElement = document.createElement('a')
				aElement.setAttribute('href', `${el.html_url}`)
				aElement.textContent = `${name}/${el.name}`
				liElement.appendChild(aElement)
				repos.appendChild(liElement)
			}

		} catch (error) {
			let liElement = document.createElement('li')
			let aElement = document.createElement('a')
			aElement.textContent = error
			liElement.appendChild(aElement)
			repos.appendChild(liElement)

		}
	}

}