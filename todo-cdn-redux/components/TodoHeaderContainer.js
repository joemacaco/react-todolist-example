const { connect } = ReactRedux;

const { TodoHeader } = window.App;

class TodoHeaderContainer extends React.Component {
  render() {
    return (
      <TodoHeader
        title="我的待辦清單"
        username="Joe"
        todoCount={this.props.todos.filter((todo) => !todo.completed).size}
      />
    );
  }
}

window.App.TodoHeaderContainer = connect(
  (state) => ({ todos: state.todos })
)(TodoHeaderContainer);