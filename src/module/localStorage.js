const storeTasks = (tasks) => {
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
};
const getTasks = () => JSON.parse(window.localStorage.getItem('tasks'));

export { storeTasks, getTasks };