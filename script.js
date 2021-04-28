function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add() {
    var task = document.getElementById('task').value; // retreives value from html id="tasks"

    var todos = get_todos(); // calls get_todos 
    todos.push(task); // get_todos get appended to the list using .push, adds to the list
    localStorage.setItem('todo', JSON.stringify(todos)); // once list is appended, its added to localStorage, using .setItem &    .stringify method

    show(); // calls function 
    
    return false;
}

function clearDefault(a) {
    if (a.defaultValue==a.value) {a.value=""} // this clears the input box after adding a task

}; 

function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1); // after retrieving the list, we use .splice to remove an element from the list that is stored in localStorage
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}

function show() {
    var todos = get_todos(); // calls get_todos to get the list 

    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id ="' + i + '">Delete</button> </li><hr></hr>';
    };
    html += '</ul>'; // ^ gave a button to each of the list items to remove the task once done

    document.getElementById('todos').innerHTML = html; // insert the newly generated html snippet into the original document

    var buttons = document.getElementsByClassName('remove'); //used to fetch all the buttons in the list 
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove); //addEventListener used to trigger the function and remove the item from the list
        // 'click' is the event, remove is the function
    };
}

document.getElementById('add').addEventListener('click', add); // same premise as the remove button, but for adding to the list
show();