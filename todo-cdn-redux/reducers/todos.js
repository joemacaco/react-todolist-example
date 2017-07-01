const { List, Record } = Immutable;

const { ActionTypes } = window.App;

const TodoRecord = Record({
  id: undefined,
  title: undefined,
  completed: false
});

const _findIdxById = (todos, id) => todos.findIndex((todo) => todo.id === id);

const _createTodo = (todos, title) => {
  const id = todos.size ? todos.last().id + 1 : 0;
  return todos.push(new TodoRecord({
    id: id,
    title,
    completed: false
  }));
};

const _updateTodo = (todos, id, title) => {
  return todos.setIn([ _findIdxById(todos, id), 'title' ], title);
};

const _toggleTodo = (todos, id, completed) => {
  return todos.setIn([ _findIdxById(todos, id), 'completed' ], completed);
};

const _deleteTodo = (todos, id) => {
  return todos.delete(_findIdxById(todos, id));
};

window.App.reducers.todos = (state = new List(), action) => {
  switch (action.type) {
    case ActionTypes.LOAD_TODOS_SUCCESS:
      return new List(action.todos).map((todo) => new TodoRecord(todo));
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
};
