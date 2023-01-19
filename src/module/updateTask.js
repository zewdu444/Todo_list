import tasks from './taskStore.js';

const updateTask = (index, description) => {
  index = tasks.findIndex((object) => object.index === index);
  if (index !== -1) {
    tasks[index].description = description;
  }
};

const completeTask = (index, completed) => {
  index = tasks.findIndex((object) => object.index === index);
  if (index !== -1) {
    tasks[index].completed = completed;
  }
};
export { updateTask, completeTask };