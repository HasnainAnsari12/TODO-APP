var input = document.getElementById("todoinput");
var parent = document.getElementById("parent");

function addTodo() {
    if (!input.value) {
        alert("ENTER somethings")
        return

    }



    var liElement = document.createElement("li")

    var litxt = document.createTextNode(input.value)


    liElement.appendChild(litxt)

    liElement.className = "list-group-item d-flex align-items-center justify-content-between"


    var div = document.createElement("div")

    var editBtn = document.createElement("button")
    var deleteBtn = document.createElement("button")
    editBtn.innerHTML = "EDIT"

    editBtn.setAttribute("onclick", "editTodo(this)")
    deleteBtn.innerHTML = "DELETE"

    deleteBtn.setAttribute("onclick", "deleteTodo(this)")
    editBtn.className = "btn btn-info"
    deleteBtn.className = "btn btn-danger"

    div.appendChild(editBtn)
    console.log(editBtn)
    div.appendChild(deleteBtn)

    liElement.appendChild(div)

    ulparent.appendChild(liElement)

    input.value = ""
}

function editTodo(el) {
    console.log("editTodo()", el.parentNode.parentNode.
        firstChild.nodeValue)
    var li = el.parentNode.parentNode

    var placeHolder = li.firstChild.nodeValue

    var editValue = prompt("EditValue", placeHolder)

    li.firstChild.nodeValue = editValue
}


function hasnain(el){
    input.style.backgroundColor="hotpink"
}

function remove(el){
    input.style.backgroundcolor="brown"
}

function deleteTodo(elem){
    elem.parentNode.parentNode.remove()
}