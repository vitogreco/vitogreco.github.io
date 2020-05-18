const classNames = {
	TODO_ITEM: 'todo-container',
	TODO_CHECKBOX: 'todo-checkbox',
	TODO_TEXT: 'todo-text',
	TODO_DELETE: 'todo-delete'
};

const list = document.getElementById('todo-list');

const itemCountSpan = document.getElementById('item-count');

const uncheckedCountSpan = document.getElementById('unchecked-count');

var todoList = [];

//"refreshes" todoList into the HTML
function showList() {
	exList = 'To do list:';
	itemCountSpan.innerHTML = 0;
	uncheckedCountSpan.innerHTML = 0;

	this.todoList.forEach((element, i) => {
		exList = exList + '<li> <input type="checkbox" id= box' + (i + 1) + '>' + element + '</li>';
		itemCountSpan.innerHTML++;
		uncheckedCountSpan.innerHTML++;
	});
	list.innerHTML = exList;

	this.todoList.forEach((element, i) => {
		checkbox = document.getElementById('box' + (i + 1));
		checkbox.addEventListener('change', function() {
			if (this.checked) {
				// Checkbox is checked..
				uncheckedCountSpan.innerHTML--;
			} else {
				// Checkbox is not checked..
				uncheckedCountSpan.innerHTML++;
			}
		});
	});
}
//inserts text from textArea into todoList array
function newTodo() {
	this.todoList.push(document.getElementById('todo-text').value);
	showList();
}

//checks for every unchecked checkbox and adds them to newList to then equal todoList to newList and refresh
function deleteTodo() {
	var newList = [];
	var cont = 0;
	this.todoList.forEach((element, i) => {
		checkbox = document.getElementById('box' + (i + 1));

		if (checkbox.checked) {
			// Checkbox is checked..
		} else {
			newList[cont] = this.todoList.slice(i, i + 1).toString();
			cont++;
		}
	});
	console.log(newList);
	this.todoList = newList;
	console.log(this.todoList);

	showList();
}
