import React from 'react';

export class Todo extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
      
        return (
            <h2>{this.props.text}</h2>
        );
    }
    
}