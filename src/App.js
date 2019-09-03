import React from 'react';
import ReactDOM from 'react-dom';

// import TodoForm from './components/TodoComponents/TodoForm.js';
import Todo from './components/TodoComponents/Todo.js';
import TodoList from './components/TodoComponents/TodoList.js';
const date = date.now();
const tasks = [        {
  task: 'make list',
  id: `${date}` ,
  completed: 'false'
    }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  //remember "c" "c" "r"
  constructor(props) {
    super(props);
    //state hook => const [str, setStr]=useState('hello');
    //state hook => const [arr, setArr]=useState([1,2,3,4,5]);
    //state hook => const [num, setNum]=useState();
    this.state = {
      tasks
      // userInput: '',
      // list: [
      // //   {
      // // task: 'make list',
      // // id: Date.now() ,
      // // completed: 'false'
      // //   }
      // ]
    };
  }

  // addTodoHandleChange = event => {
  //   this.setState({task: event.target.value, id: Date.now(), completed: 'false'});
  // };



  

toggleItem = id =>{
  // console.log(id);
//update state for tasks
//use this.setState 
//loop through arra
//find which element
this.setState({
  tasks:this.state.tasks.map(item =>{
    if (item.id === id) {
      return {
        ...item,
        completed: !item.completed
      }
    } else {
      return item;
    }
  })
})
};

  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome To The Todo App!</h2>
        {/* <TodoForm /> */}
          <h3>this is the list here below</h3>

        <TodoList />
        {/* // tasks={this.state.tasks}
        // toggleItem={this.toggleItem} /> */}
      </div>
    );
  }
}

export default App;
