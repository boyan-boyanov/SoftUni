function solve() {
    let wrap = document.querySelectorAll(".wrapper section");
    let openSection = wrap[1].querySelector("div");
    let inProgress = wrap[2].querySelector("div");
    let complete = wrap[3].querySelector("div");

    let task = document.querySelector("#task");
    let description = document.querySelector("#description");
    let date = document.querySelector("#date");
    let btn = document.querySelector("#add");
    btn.addEventListener("click", onClick);
    let dateChekcer = /^(\d{4}\.\d{2}\.\d{2})$/;

    function onClick(event) {
        event.preventDefault();

        if (
            task.value.trim() !== "" &&
            description.value.trim() !== "" &&
            date.value.trim() !== "" &&
            date.value.match(dateChekcer)
        ) {
            let openArticle = document.createElement("article");
            openSection.appendChild(openArticle);
            let openHeading = document.createElement("h3");
            openHeading.textContent = task.value;
            openArticle.appendChild(openHeading);

            let openDesc = document.createElement("p");
            openDesc.textContent = `Description: ${description.value}`;
            openArticle.appendChild(openDesc);

            let openDate = document.createElement("p");
            openDate.textContent = `Due Date: ${date.value}`;
            openArticle.appendChild(openDate);

            //div
            let divBtns = document.createElement("div");
            divBtns.classList.add("flex");
            openArticle.appendChild(divBtns);
            let btnStart = document.createElement("button");
            btnStart.textContent = "Start";
            divBtns.appendChild(btnStart);
            btnStart.classList.add("green");
            btnStart.addEventListener("click", clickStart);

            let btnDel = document.createElement("button");
            btnDel.textContent = "Delete";
            btnDel.classList.add("red");
            btnDel.addEventListener("click", clickDel);
            divBtns.appendChild(btnDel);




            
        }
    }

    function clickStart(event) {
        let btnStart = event.target
        btnStart.remove()
        let finishBtn = document.createElement('button')
        finishBtn.textContent = 'Finish'
        finishBtn.classList.add("orange");
        finishBtn.addEventListener('click', onFinish)
        divBtns.appendChild(finishBtn)


        inProgress.appendChild(openArticle)

    }
    function clickDel(eve) {
        openArticle.remove()
    }
    function onFinish(ev) {
        divBtns.remove()
        complete.appendChild(openArticle)
    }
}
