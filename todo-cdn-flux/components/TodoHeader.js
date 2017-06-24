class TodoHeader extends React.Component {
  render() {

    let { title, username, todoCount } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        <span>哈囉，{username}：你有 {todoCount} 項未完成待辦事項</span>
      </div>
    );
  }
}

TodoHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
  username: React.PropTypes.string.isRequired,
  todoCount: React.PropTypes.number.isRequired
};


TodoHeader.defaultProps = {
  title: '我的待辦清單',
  username: 'Guest',
  todoCount: 0
};

window.App.TodoHeader = TodoHeader;