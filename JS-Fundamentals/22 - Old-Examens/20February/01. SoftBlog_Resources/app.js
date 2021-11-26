function solve() {
  let autorEl = document.getElementById('creator');
  let titleEl = document.getElementById('title');
  let categoryEl = document.getElementById('category');
  let contentEl = document.getElementById('content');
  let createButton = document.getElementsByClassName('btn create')[0];
  createButton.addEventListener('click', getInfo);
  let sectionEl = document.querySelector('.site-content section')
  let archiveSection = document.querySelector('.archive-section ol')
  let allLiArray = []

  function getInfo(e) {
    e.preventDefault()
    let articleEl = document.createElement('article');
    let h1El = document.createElement('h1');
    h1El.textContent = titleEl.value.trim();
    articleEl.appendChild(h1El);

    let categoryPar = document.createElement('p');
    categoryPar.textContent = 'Category:';
    let categoryInfo = document.createElement('strong');
    categoryInfo.textContent = categoryEl.value.trim();
    categoryPar.appendChild(categoryInfo);
    articleEl.appendChild(categoryPar);

    let creatorPar = document.createElement('p');
    creatorPar.textContent = 'Creator:';
    let creatorInfo = document.createElement('strong');
    creatorInfo.textContent = autorEl.value.trim();
    creatorPar.appendChild(creatorInfo);
    articleEl.appendChild(creatorPar);

    let contentPar = document.createElement('p');
    contentPar.textContent = contentEl.value.trim();
    articleEl.appendChild(contentPar);

    let divEl = document.createElement('div');
    divEl.setAttribute('class', 'buttons');

    let buttonDelete = document.createElement('button');
    buttonDelete.setAttribute('class', 'btn delete');
    buttonDelete.textContent = 'Delete';
    buttonDelete.addEventListener('click', deleteArticle);
    divEl.appendChild(buttonDelete);

    let buttonArchive = document.createElement('button');
    buttonArchive.setAttribute('class', 'btn archive');
    buttonArchive.textContent = 'Archive';
    buttonArchive.addEventListener('click', archive)
    divEl.appendChild(buttonArchive);

    articleEl.appendChild(divEl);


    sectionEl.appendChild(articleEl)
  }

  function archive(e) {
    //move only title!!!  other info ????
    let titleToMove = e.target.parentNode.parentNode.querySelector('h1')
    allLiArray.push(titleToMove.textContent)
    let allListItem = archiveSection.querySelectorAll('li')

    for (let el of allListItem) {
      el.remove()
    }
    let sorted = allLiArray.sort((a, b) => a.localeCompare(b))
    for (let addEl of sorted) {
      let liItem = document.createElement('li')
      liItem.textContent = `${addEl}`
      archiveSection.appendChild(liItem)
      let delArticle = e.target.parentNode.parentNode;
    delArticle.remove()
    }
  }

  function deleteArticle(e){
    let delArticle = e.target.parentNode.parentNode;
    delArticle.remove()
  }
}



