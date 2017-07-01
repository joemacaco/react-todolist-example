const { TodoItem } = window.App;

class TodoList extends React.Component {
  render() {
    const { todos, onDeleteTodo } = this.props;
    const { onToggleTodo } = this.props;
    const { onUpdateTodo } = this.props;
    const todoElements = todos.map((todo) => (
      <li key={todo.id}>
        <TodoItem
          title={todo.title}
          completed={todo.completed}
          onDelete={() => onDeleteTodo && onDeleteTodo(todo.id)}
          onToggle={(completed) => onToggleTodo && onToggleTodo(todo.id, completed)}
          onUpdate={(title) => onUpdateTodo && onUpdateTodo(todo.id, title)}
        />
      </li>
    ));
    return (
      <ul>{todoElements}</ul>
    );;
  }
}

TodoList.propTypes = {
  todos: React.PropTypes.object.isRequired,
  onUpdateTodo: React.PropTypes.func,
  onToggleTodo: React.PropTypes.func,
  onDeleteTodo: React.PropTypes.func
};

window.App.TodoList = TodoList;