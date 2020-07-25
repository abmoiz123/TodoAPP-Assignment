var inputValue = document.getElementById("valueinput");
var todoList = document.getElementById("todolist");
var span = document.createElement("SPAN");
var txt = document.createTextNode("\u00D7");
span.className = "close";
function getvalue() {
    var li = document.createElement('li');
    li.setAttribute('onclick', 'checked(this)');
    if (inputValue.value === '') {
        alert("You Must Write SomeThing")
    } else {
        todoList.appendChild(li);
    }
    li.innerText += inputValue.value;
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.setAttribute('class', 'close')
    span.setAttribute('onclick', 'closeli(this)')
    span.appendChild(txt);
    li.appendChild(span);
    inputValue.value = "";
}
function closeli(e) {
    var disnone = e.parentNode;
    disnone.style.display = "none";
}

function checked(j) {
    j.setAttribute('class', 'checked');
}