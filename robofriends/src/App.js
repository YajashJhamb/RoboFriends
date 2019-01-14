import React, { Component } from "react";
import Header from "./Components/Header";
// import { robots } from "./Robots.js";
import axios from "axios";
import CardList from "./Components/CardList";
import SearchBox from "./Components/SearchBox";
import Scroll from "./Components/Scroll";

import "tachyons";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: ""
    };
  }
  async componentDidMount() {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => this.setState({ robots: res.data }));
  }

  onSearchChange = e => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
