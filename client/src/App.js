import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    axios.get("./api/users").then((res) => {
      const users = res.data;
      this.setState({ users });
    });
  }
  render() {
    return (
      <div className="usersList">
        <h1>Mock Data</h1>
        {this.state.users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </div>
    );
  }
}

export default App;
