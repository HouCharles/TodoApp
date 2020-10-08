import React from 'react';

class Todo extends React.Component{
    constructor(){
        super();
        this.state = {
            newitem: '',
            list: []
        };
    }

    handleChange = (key, value) => {
        
        
        this.setState({
            [key]: value
        })
        console.log('handleChange executed');
    }

    addItem = () =>{
       
        const list = this.state.list.slice();
        
        const newitem = {
            id : 0 + Math.random(),
            value : this.state.newitem
        }
        
        console.log('newitem: ' + newitem);
        list.push(newitem);

        this.setState({
            newitem : '',
            list
        })
        console.log('updatedlist+: '+ list);
        console.log('additem executed');

    }
     deleteItem = (id) => {
        const list = this.state.list;
        const updatedList = list.filter(item => item.id !== id);
        //for debugging
        console.log(id);

        this.setState({
            list: updatedList
        })
        console.log('deleteitem executed');
    }

    render() {
        return (
            <form>
                <h1>Todo List</h1>
                <input name type='text' placeholder='todo...' onChange={e => this.handleChange('newitem', e.target.value)}/>
                <button type='button' onClick={this.addItem}>Add to list</button>   
                <ul>
                    {
                        this.state.list.map(item =>                         
                            <li key={item.id}>
                                <input type='checkbox'/>
                                {item.value}
                                <button type='button'onClick={this.deleteItem(item.id)}>Delete</button> 
                            </li>                            
                        )              
                    }
                </ul>
                
                
                            
            </form>   
        )   
            
        
    }
}

export default Todo;
