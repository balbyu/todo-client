import axios from "axios";
import { authHeader } from "../helpers/authHeader";

const BASE_URL = "http://localhost:3000";

const fetchTodos = () => {
  return axios.get(`${BASE_URL}/todos`, authHeader());
};

const createTodo = (name) => {
  return axios.post(`${BASE_URL}/todos`, { name }, authHeader());
};

const deleteTodo = (id) => {
  return axios.delete(`${BASE_URL}/todos/${id}`, authHeader());
};

const completeTodo = (payload) => {
  const { id, completed } = { ...payload };
  return axios.put(`${BASE_URL}/todos/${id}`, { completed }, authHeader());
};

const updateTodo = (payload) => {
  const { id, name } = { ...payload };
  return axios.put(`${BASE_URL}/todos/${id}`, { name }, authHeader());
};

export const todoService = {
  fetchTodos,
  createTodo,
  deleteTodo,
  completeTodo,
  updateTodo,
};
