import React, {Component} from "react";
import './AddItem.css';

class AddItem extends Component {
    state = {
        name : '',
        time : '',
        unite : ''
    } 
    
    handelChange = (e) => {
       this.setState({
        [e.target.id] : e.target.value
    
       })
       console.log(e.target.value);
    }
    
    handelSubmit = (e) => {
        e.preventDefault();
        this.props.AddItem(this.state)
        this.setState({
            name : '',
            time : '' ,
            unite : ''
        })
    }
    render () {
        return (
            <div className="form">
                <form onSubmit={this.handelSubmit}>
                    <input type = "text" placeholder="nom de la tache" id="name" onChange = {this.handelChange} value = {this.state.name} />
                    <input type = "number" placeholder="durée " id="time" onChange = {this.handelChange} value = {this.state.time} />
                    <select  id ="unite" onChange = {this.handelChange}>
                        <option>Semaine</option>
                        <option>Jour</option>
                        <option>Heure</option>
                        <option>Minute</option>
                    </select>
                    <input type="submit" value="Ajouter" />
                </form>
            </div>
        )
    }
}
export default AddItem;