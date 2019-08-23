import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        const todoList = this.props.todoList.map((list,i)=>
            <Todo key={i} text={list.text} />
        );
        return (
            <ul>{todoList}</ul>
        );
    }
}