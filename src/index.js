import './style.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import tasks from './module/taskStore.js';
import dynamicDisplay from './module/readTask.js';
import createTask from './module/createTask.js';
import deleteTask from './module/deleteTask.js';
import { updateTask, completeTask } from './module/updateTask.js';
import { storeTasks, getTasks } from './module/localStorage.js';

const insertButton = document.getElementById('insertbutton');
const inputTask = document.getElementById('inputtask');
const list = document.getElementById('list');
const listItem = document.getElementsByClassName('listitem');
const deleteItem = document.getElementsByClassName('deletebutton');
const moveItem = document.getElementsByClassName('movebutton');
const clearButton = document.getElementById('clearbutton');
// compare local storage and tasks array
window.addEventListener('load', () => {
  if (tasks.length === 0 && getTasks().length !== 0) {
    for (let i = 0; i < getTasks().length; i += 1) {
      if (getTasks()[i] !== null) {
        tasks.push(getTasks()[i]);
      }
    }
  }
  dynamicDisplay();
});

// insert new task  by click
insertButton.addEventListener('click', () => {
  createTask(inputTask.value);
  storeTasks(tasks);
  dynamicDisplay();
  inputTask.value = '';
});
// insert new task  pressing enter button
inputTask.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    createTask(inputTask.value);
    storeTasks(tasks);
    dynamicDisplay();
    inputTask.value = '';
  }
});

// delete and edit implementation
list.addEventListener('click', (e) => {
  if (e.target && e.target.nodeName === 'LI') {
    const selectedlist = document.getElementById(e.target.id);
    const deleteButton = selectedlist.querySelector(`#delete${e.target.id}`);
    const moveButton = selectedlist.querySelector(`#move${e.target.id}`);
    const editText = selectedlist.querySelector(`#text${e.target.id}`);
    const id = Number(e.target.id);
    if (e.target.id) {
      for (let i = 0; i < listItem.length; i += 1) {
        listItem[i].style.backgroundColor = 'white';
        deleteItem[i].style.display = 'none';
        moveItem[i].style.display = 'inline-block';
      }
      selectedlist.style.backgroundColor = '#FFFECE';
      deleteButton.style.display = 'inline-block';
      moveButton.style.display = 'none';
      deleteButton.addEventListener('click', () => {
        deleteTask(id);
        storeTasks(tasks);
        dynamicDisplay();
      });
      selectedlist.addEventListener('input', () => {
        updateTask(id, editText.innerHTML);
      });
    }
    storeTasks(tasks);
  } else if (e.target && e.target.nodeName === 'INPUT') {
    const id = e.target.id.toString();
    const index = Number(id.slice(5));
    const checkCompleted = document.getElementById(e.target.id);
    const editText = document.querySelector(`#text${index}`);
    if (checkCompleted.checked === true) {
      completeTask(index, true);
      editText.innerHTML = editText.innerHTML.strike();
      updateTask(index, editText.innerHTML);
      storeTasks(tasks);
    } else {
      completeTask(index, false);
      editText.innerHTML = editText.innerHTML.replace('<strike>', '');
      updateTask(index, editText.innerHTML);
      storeTasks(tasks);
    }
  }
});

// loop through completed tasks
const clearSelected = () => {
  let counter = 0;
  for (let k = 0; k < tasks.length; k += 1) {
    if (tasks[k].completed === true) {
      counter += 1;
    }
  }
  for (let i = 0; i < counter; i += 1) {
    for (let j = 0; j < tasks.length; j += 1) {
      if (tasks[j].completed === true) {
        deleteTask(tasks[j].index);
        storeTasks(tasks);
      }
    }
  }
};
clearButton.addEventListener('click', () => {
  clearSelected();
  dynamicDisplay();
});
