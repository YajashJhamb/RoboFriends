import React, { Component } from "react";
import Header from "./Components/Header";
import CardList from "./Components/CardList";
import SearchBox from "./Components/SearchBox";
import { connect } from "react-redux";
import { getRobots } from "./actions/RobotActions";
import AddRobots from "./Components/AddRobot";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "tachyons";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: ""
    };
  }
  componentDidMount() {
    this.props.getRobots();
  }

  onSearchChange = e => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const filteredRobots = this.props.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });

    return (
      <Router>
        <div className="tc">
          <Header />
          <SearchBox searchChange={this.onSearchChange} />
          <Switch>
            <Route
              exact
              path="/"
              component={() => <CardList robots={filteredRobots} />}
            />
            <Route exact path="/add-robot" component={AddRobots} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  robots: state.robots.robots
});

export default connect(
  mapStateToProps,
  { getRobots }
)(App);
