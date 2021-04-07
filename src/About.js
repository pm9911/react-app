import React from 'react';
class About extends React.Component{

    constructor()
    {
        super();   
    }

    componentDidMount()
    {
        console.log('props', this.props.name)
        // console.log('did mount');
    }
    componentDidUpdate()
    {
        console.log('props', this.props.name)
        // alert('name is updated');
    }
    render(){
        return(<div>
            <h1>About us Component</h1>
            <h2>{this.props.name}</h2>
        </div>)
    }
}

export default About;

