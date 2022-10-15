import React from "react";
import './Todo.css';
const TodoItems = (props) => {
    const {items,deleteItem}= props;
    let length = items.length;
    const lisItem = length ? (
        items.map(item => {
            return(
                <div key= {item.id} className='tab'>
                   <span className="name">{item.name}</span>
                   <span className="time">{item.time}</span>
                   <span className="unite">{item.unite}</span>
                   <span className="action icon" onClick={() => deleteItem(item.id)}>&times;</span>
                </div>
            )
        })
    ) : (
        <p> pas de tache à faire !</p>
    )
   
    return(
        <div className="ListItems">
            
            <div className="header">
                <span className="name title">Name</span>
                <span className="time title">Duree</span>
                <span className="unite title">Unite</span>
                <span className="action title">Action</span>
            </div>

            {lisItem}
        </div>
    )
}
export default TodoItems;