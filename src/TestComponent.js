import React, { Component } from "react"

class TestComponent extends Component {

state = {
        name: "",
        firstName: "",
        lastName: ""
}

onSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target)
    this.setState({name: form.get("input")})
}

changeHandler = (event) => {
    const {target:{value,name}} = event;
    this.setState({[name]:value})
}

    render(){
        return(
<div>
    <form onSubmit={this.onSubmit}>
    <input name="firstName" type="text" value={this.state.firstName} placeholder="what your name" onChange={this.changeHandler} />
    <input name="lastName" type="text" value={this.state.lastName} placeholder="what your name" onChange={this.changeHandler} />
    <button>send</button>
    </form>
    {`${this.state.firstName} ${this.state.lastName}`}
</div>
        )
    }
}

export default TestComponent;