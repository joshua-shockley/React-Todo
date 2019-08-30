import React from 'react';
import ReactDOM from 'react-dom';

import TodoForm from './components/TodoComponents/TodoForm.js';
import Todo from './components/TodoComponents/Todo.js';


class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      task: '',
      id: '',
      completed: ''
    }
  }



  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm />
          <h3>this is the list here below</h3>

        <Todo />
      </div>
    );
  }
}

export default App;
