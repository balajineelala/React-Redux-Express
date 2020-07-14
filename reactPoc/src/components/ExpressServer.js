import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { connect } from "react-redux";
import { getMockUsers } from "../actions/Users";

class ExpressServer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      articles: [],
    };
  }
  componentDidMount() {
    this.props.getMockUsers();
    axios.get("./api/articles").then((res) => {
      const articles = res.data;
      this.setState({ articles });
    });
  }
  render() {
    const { mockUsers } = this.props.mockUsers;
    return (
      <div className="usersList">
        <h1>Setup Mock Data using Express Server</h1>
        <div className="users">
          <h2>Users</h2>
          {mockUsers.map((user) => {
            return (
              <li key={user.id}>
                {user.name} - {user.email}
              </li>
            );
          })}
        </div>
        <div className="articles">
          <h2>Articles</h2>
          {this.state.articles.map((article) => {
            return <li key={article.id}>{article.title} </li>;
          })}
        </div>
      </div>
    );
  }
}

ExpressServer.propTypes = {
  userTitle: PropTypes.string,
};

const mapStateToProps = (state) => ({
  mockUsers: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  getMockUsers: () => dispatch(getMockUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpressServer);
