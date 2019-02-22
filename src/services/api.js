import axios from '../providers/axios';

export function get(id) {
  return axios.get(`/todos/${id}`).then(x => x.data);
}

export function list() {
  return axios.get('/todos').then(({ data }) => data);
}

export function post(user) {
  return axios.post('/todos', user).then(x => x.data);
}

export async function put(user, id) {
  const { data } = await axios.put(`/todos/${id}`, user);
  return data;
}
