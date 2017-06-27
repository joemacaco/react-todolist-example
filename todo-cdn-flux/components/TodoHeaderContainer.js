const {
  TodoStore,
  TodoHeader
} = window.App;

const { Container } = FluxUtils;

class TodoHeaderContainer extends React.Component {
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
      <TodoHeader
        title="我的待辦清單"
        username="Joe"
        todoCount={this.state.todos.filter((todo) => !todo.completed).length}
      />
    );
  }
}

window.App.TodoHeaderContainer = Container.create(TodoHeaderContainer);