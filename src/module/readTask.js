import tasks from './taskStore.js';

const dynamicDisplay = () => {
  const todoList = document.querySelector('.todolist');
  todoList.innerHTML = '';
  tasks.forEach((task) => {
    todoList.innerHTML += `<li id='${task.index}' class='listitem'>
    <input type="checkbox" class="checkcompleted" id='check${task.index}' ${task.completed ? 'checked' : 'unchecked'} />
    <p  class="textvalue" contenteditable="true" id='text${task.index}'>${task.description}</p>
    <button class='deletebutton'hidden id='delete${task.index}'><i class="fa-solid fa-trash" aria-hidden="true"></i></button>
    <button class='movebutton' id='move${task.index}'><i class="fa fa-ellipsis-v todolisticon" aria-hidden="true"></i></button>
    
   </li>
   <hr />`;
  });
};

export default dynamicDisplay;