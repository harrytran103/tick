import request from 'src/helpers/request';

function getTaskList() {
  return request('/api/task');
}

function createTask(data) {
  return request('/api/task', {
    method: 'POST',
    body: data
  });
}

function updateTask(data) {
  const { id, ...otherData } = data;
  return request(`/api/task/${id}`, {
    method: 'PUT',
    body: otherData
  });
}

export { getTaskList, createTask, updateTask };
