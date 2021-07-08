/*
const User = (props) => {
    return(
        <div>
            <h1>{props.name}</h1> 
            <h4>{props.description}</h4>   
        </div>
    );
};
export default User;
*/

// props- A data that is being passed from one component to another
// state- A set of data that is individual component value

import React from "react";

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            planet: "Earth",
        };
        console.log("Hey! I am from constructor");
    }

    componentDidMount()
    {
        this.setState({ planet: "Mars"});
    }

    render() {
        console.log("Hey! I am from render()");
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.description}</p>
                <h4>{this.state.planet}</h4>
            </div>
        );
    }
}
export default User;