import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoData,
    };
  }

  filterCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed;
      })
    });
  }

  toggleCompleted = (id) => {
    console.log('toggleCompleted', id);
    this.setState({
      todos: this.state.todos.map(todo => {
        if (id === todo.id) {
          return {...todo, completed: !todo.completed};
        } else {
          return todo;
        }
      })
    });
  }

  addTodo = task => {
    this.setState({
      todos: [...this.state.todos, {
        task: task,
        id: Date.now(),
        completed: false
      }]
    });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos}
                  toggleCompleted={this.toggleCompleted}
        />
        <TodoForm addTodo={this.addTodo} filterTodos={this.filterCompleted} />
      </div>
    );
  }
}
export default App;
