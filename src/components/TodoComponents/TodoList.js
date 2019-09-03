import React, {Component} from 'react';
// import TodoForm from './components/TodoComponents/TodoForm.js';
import Todo from './components/TodoComponents/Todo.js';


// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {

    return(
        <div className="todo-list">
            {props.tasks.map(item=> (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem}/>
            ))}
            <button className="clear-button" onClick={props.clearCompleted}>Clear Completed</button>
        </div>

    );
}
export default TodoList;

// class TodoList extends Component {
// constructor(props){
//     super(props);

//     this.state={
//         userInput: '',
//         list: []
//     }
// }

// changeUserInput(input){
//     this.setState({
//         userInput: input
//     }, ()=> console.log(input));
// }

// addToList(input){
//     let listArray = this.state.list;

//     listArray.push(input);

//     this.setState({list: listArray,
//         userInput: ''
//     })
//     console.log(listArray);
// }

// render(){
//         return(
//         <div>
//             <input 
//             onChange={ (e) => this.changeUserInput(e.target.value)}
//             value={this.state.userInput} 
//             type="text"/>
//             <button onClick={ ()=> this.addToList(this.state.userInput) }> press me</button>
//             <button onClick={ ()=> this.deleteEvent(this.state)}>clear list</button>
//             <ul>
//                 {this.state.list.map((val)=><li>{val}<input type="checkbox" name="done/not done" /></li>)}
//             </ul>

//         </div>
//         );
//         }
//     }
