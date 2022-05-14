//addProperty setAttribute('class', 'demo')
//parentElement.nextElementSibling - sledvashtija element na parenta
//divBtns.classList.add("flex");
// change style in CSS divEl.style.display = 'none'
//change class setAtribute('class', 'Pesho')
// Select DOM elements
let element = document.getElementById('test')
document.querySelector('#test')
document.querySelectorAll('#test li')

//get/set content
element.value
element.textContent

// create element
let newElement = document.createElement('p')
 
// add element in DOM
element.appendChild(newElement);

// delete from DOM
newElement.remove();

// events
element.addEventListener('click', someFunc);

function someFunc(event){
    event.target
    event.currentTarget
}

// other !!!
e.preventDefault(); // button in form send the form when clicked, reload the page
element.removeEventListener('click', someFunc) // exact copy of eventListener
//----------------------------------------------------------------------------


// Selecting DOM elements
const element = document.getElementById('content');
document.querySelector('#content');
document.querySelectorAll('ul li');

// Get/Set content
element.textContent;
element.value;

// Traversing DOM
element.parentElement;
element.children;

// Create element
const para = document.createElement('p');

// Adding to DOM
element.appendChild(para);

// Removing from DOM
para.remove();

// Events
element.addEventListener('click', e => {
    console.log(e.target);
});

/*
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
    */