import React from 'react';
import ReactDOM from 'react-dom';

import TodoList from './components/TodoComponents/TodoList.js';
import TodoForm from './components/TodoComponents/TodoForm.js';


const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  //remember "c" "c" "r"
  constructor(props) {
    super(props);
    this.state = {
      todos: todoData,
    };
  }

  filterCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo =>{
        return !todo.completed;
      })
    });
  }

  toggleCompleted = (id) => {
    this.setState({
      todos:  this.state.todos.map(todo => {
      if(id === todo.id){
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
        <h2>Welcome To The Todo App!</h2>
        <TodoList 
        todos={this.state.todos}
        toggleCompleted={this.toggleCompleted}
        />
        <TodoForm  
        addTodo={this.addTodo} 
        filterTodos={this.filterCompleted}/>
      </div>
    );
  }
}

export default App;
