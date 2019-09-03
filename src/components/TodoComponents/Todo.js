import React from 'react';
 

const Todo = props => {
console.log(props);
    return (
        <div className={`item${props.item.completed ? 'completed' : ''}`} 
        onClick={() => props.toggleItem(props.item.id)} >
            <p>this propagates the list here</p>
                 <h3>{props.item.task}
                 </h3>
        </div>
    );
}

export default Todo;