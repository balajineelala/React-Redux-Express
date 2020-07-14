import axios from "axios";

export default function fetchUsers() {
  return axios.get("https://jsonplaceholder.typicode.com/users");
}

export function fetchMockUsers() {
  return axios.get("./api/users");
}
