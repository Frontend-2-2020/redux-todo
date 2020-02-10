export function toggleTodo(id) {
  return {
    type: "TOGGLE_TODO",
    payload: id
  };
}

export function deleteTodo(id) {
  return {
    type: "DELETE_TODO",
    payload: id
  };
}
