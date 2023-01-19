import tasks from './taskStore.js';

const updateTask = (index, description) => {
  index = tasks.findIndex((object) => object.index === index);
  if (index !== -1) {
    tasks[index].description = description;
  }
};
export default updateTask;