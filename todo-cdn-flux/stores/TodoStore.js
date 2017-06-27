const {
  ActionTypes,
  AppDispatcher
} = window.App;

const { ReduceStore } = FluxUtils;

const _createTodo = (todos, title) => {
  const id = todos.length ? todos[todos.length - 1].id + 1 : 0;
  return [
    ...todos,
    {
      id: id,
      title,
      completed: false
    }
  ];
};

const _updateTodo = (todos, id, title) => {
  const idx = todos.findIndex((todo) => todo.id === id);
  if (idx === -1) return todos;

  const newTodos = [ ...todos ];
  newTodos[idx] = {
    ...todos[idx],
    title
  };
  return newTodos;
};

const _toggleTodo = (todos, id, completed) => {
  const idx = todos.findIndex((todo) => todo.id === id);
  if (idx === -1) return todos;

  const newTodos = [ ...todos ];
  newTodos[idx] = {
    ...todos[idx],
    completed
  };
  return newTodos;
};

const _deleteTodo = (todos, id) => {
  const idx = todos.findIndex((todo) => todo.id === id);
  if (idx === -1) return todos;

  const newTodos = [ ...todos ];
  newTodos.splice(idx, 1);
  return newTodos;
};

class TodoStore extends ReduceStore {
  getInitialState() {
    return [];
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.LOAD_TODOS_SUCCESS:
        return action.todos;
      case ActionTypes.CREATE_TODO:
        return _createTodo(state, action.title);
      case ActionTypes.UPDATE_TODO:
        return _updateTodo(state, action.id, action.title);
      case ActionTypes.TOGGLE_TODO:
        return _toggleTodo(state, action.id, action.completed);
      case ActionTypes.DELETE_TODO:
        return _deleteTodo(state, action.id);
      default:
        return state;
    }
  }
}

window.App.TodoStore = new TodoStore(AppDispatcher);