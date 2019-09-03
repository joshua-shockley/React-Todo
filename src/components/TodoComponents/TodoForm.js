import React from 'react';
// import Todo from './Todo'

const TodoForm = props => { 
  console.log(props);
  return( 
      <div>
<input 
// onChange={props.onSubmit}
type="text" placeholder="...the todo"/>
<button >add the ToDo</button>
<button onClick={props.clearComplete} >clear the to ToDo list</button>  
</div>
); 
}

export default TodoForm;
