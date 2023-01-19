import tasks from './taskStore.js';

const deleteTask = (index) => {
  const temp = tasks.filter((task) => task.index !== index);
  tasks.length = 0;
  let counter = 1;
  temp.forEach((element) => {
    element.index = counter;
    tasks.push(element);
    counter += 1;
  });
};

export default deleteTask;