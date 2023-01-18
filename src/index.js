import './style.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import '../node_modules/@fortawesome/fontawesome-free/js/all.js';

const todoList = document.querySelector('.todolist');

const tasks = [{
  description: 'Wash clothes',
  completed: false,
  index: 1,
},
{
  description: 'Complete project',
  completed: false,
  index: 2,
},

{
  description: 'Read books',
  completed: false,
  index: 3,
},
];

const dynamicDisplay = () => {
  tasks.forEach((task) => {
    todoList.innerHTML += `<li>
    <input type="checkbox" ${task.index.completed ? 'checked' : 'unchecked'} />
    <p>${task.description}</p>
    <i class="fa fa-ellipsis-v todolisticon" aria-hidden="true"></i>
   </li>
   <hr />`;
  });
};
dynamicDisplay();