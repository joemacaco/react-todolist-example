const {
  TodoActions,
  TodoStore,
  TodoList
} = window.App;

const { Container } = FluxUtils;

class TodoListContainer extends React.Component {
  static getStores() {
    return [ TodoStore ];
  }

  static calculateState(prevState) {
    return {
      todos: TodoStore.getState(),
    };
  }

  render() {
    return (
      <TodoList
        todos={this.state.todos}
        onUpdateTodo={TodoActions.updateTodo}
        onToggleTodo={TodoActions.toggleTodo}
        onDeleteTodo={TodoActions.deleteTodo}
      />
    );
  }
}

window.App.TodoListContainer = Container.create(TodoListContainer);