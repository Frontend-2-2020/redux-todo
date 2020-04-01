import Axios from "axios";

export function toggleTodo(id, done) {
  return function(dispatch) {
    Axios.put("https://5de80f759578cb001487adea.mockapi.io/Todo/" + id, {
      done: !done
    }).then(response => {
      dispatch({
        type: "TOGGLE_TODO",
        payload: id
      });
    });
  }
}

export function deleteTodo(id) {
  return {
    type: "DELETE_TODO",
    payload: id
  };
}
