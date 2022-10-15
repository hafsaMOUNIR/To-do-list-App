import './App.css';
import React , {Component} from 'react';
import TodoItems  from './Components/TodoItem/Todo';
import AddItem from './Components/AddItem/AddItem';

class App extends Component {
  state = {
    items : [
      {id: 1 , name : "hafsa" , time : "22" , unite : 'jour' },
      {id: 2 , name : "mounir" , time : "21", unite : 'jour' }
    ]
  } 
  deleteItem = (id) =>{
    let items =  this.state.items;
    let i = items.findIndex(item => item.id === id);
    items.splice(i,1); 
    this.setState({items:items})    
  }
  AddItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({items :items})
  }
  render(){
    return (
      <div className="App container">
        <h1 className='text-center'>To do list</h1> 
        <TodoItems deleteItem={this.deleteItem} items={this.state.items}/>
        <AddItem AddItem = {this.AddItem} />
      </div>
    );
  }
  
}

export default App;
