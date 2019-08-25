import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component {

    /*constructor(props){
        super(props);
    }*/

    render(){
        const todoList = this.props.items.map((element,i)=>
            <Todo key={i} text={element.text} />
        );
        return (
            <ul>{todoList}</ul>
        );
    }
}