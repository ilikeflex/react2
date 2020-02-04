import React from 'react';
export default class ExampleComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {name:"Default"};
    }

    onChange(event){
        this.setState({name: event.target.value});
    }

    render() {
        return <input onChange={this.onChange} value={this.state.name}/>;
    }

};