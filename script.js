showTodo();
function getTodo(){
    let todo=new Array('todo');
    let todo_Str=localStorage.getItem('todo');
    if(todo_Str!==null){
        todo=JSON.parse(todo_Str);
    }
    return todo;
}


function setTodo(){
    let task=document.getElementById('task').value;
    let todo=getTodo();
    todo.push(task);
    localStorage.setItem('todo', JSON.stringify(todo));
    showTodo();
        return false;
}

function removeTask(id){
    let todo=getTodo();
    todo.splice(id,1);
    localStorage.setItem('todo', JSON.stringify(todo));
    showTodo();
    return false;
}

function showTodo(){
    let todo=getTodo();
    let list
    if(todo.length>0){
        todo.forEach((task,i)=>{
         list=` <li> ${task}<button class="remove" onClick="removeTask(${i})">remove</button></li>`
    });

     document.querySelector('ul').innerHTML=list;
}
else{
    document.getElementById('todos').innerHTML='Your list is Empty';
}
}

