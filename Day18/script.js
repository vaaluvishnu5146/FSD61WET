const taskInput = document.getElementById('taskInput')
const saveButton = document.getElementById('saveButton')
const listItemContainer = document.getElementById("list-item-container")

saveButton.addEventListener('click', () => {
    const value = taskInput.value;
    if (value) {
        saveATodo(taskInput.value)
    } else {
        alert('Enter valid Doo');
    }
})

function fetchAllDoos() {
    fetch("https://doodoo-aabz.onrender.com")
    .then((response) => {
        return response.json()
    }).then((result) => {
        if(result.tasks) {
            refreshList(result.tasks)
        } 
    }).catch((err) => {
        console.log(err)
    })
}

function saveATodo(value = "") {
    fetch("https://doodoo-aabz.onrender.com/create", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            task: value
        })
    }).then((result) => {
        if(result) {
            fetchAllDoos();
        }
    }).catch((err) => {
        console.log(err)
    })
}

function refreshList(datas = []) {
    const nodes = [];
    const ul = document.createElement('ul')
    ul.setAttribute("class", "list-group")
    datas.forEach((data) => {
        nodes.push(createListItem(data))
    })
    ul.append(...nodes)
    listItemContainer.innerHTML = "";
    listItemContainer.appendChild(ul)
}

function createListItem(data = {}) {
    const node = document.createElement('li')
    node.setAttribute("class", "list-group-item")
    node.innerHTML = `
    <div class="row">
       <div class="col-8 align-self-center">
            ${data.task}
       </div>
       <div class="col-4 justify-content-end">
            <div class="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" class="btn btn-outline-primary">Edit</button>
                <button type="button" class="btn btn-outline-primary">Delete</button>
            </div>
        </div>
    </div>
    `
    return node;
}

fetchAllDoos();