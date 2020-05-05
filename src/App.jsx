import React from "react";
//
import "./App.scss";
import Contacts from "./components/Contacts.jsx";
import TopBar from "./components/TopBar.jsx";
import Filters from "./components/Filters.jsx";
import { searchFilter, sortBy } from "./services/utils";
import { apiUrl } from "./services/api";

class App extends React.Component {
  state = {
    people: [],
    peopleToShow: [],
    // LastFilter is here to make sure the search list is shown in the 
    // last order the user choose. Default is id
    lastFilter: "id"
  };
  //
  componentDidMount() {
    fetch(apiUrl).then(
      async (result) => {
        const resultJSON = await result.json();
        this.setState({
          peopleApi: resultJSON,
          peopleToShow: resultJSON
        });
      }
    );
  }
  //
  handleSearch = (e) => {
    e.preventDefault();
    let query = e.target.value.trim();
    this.setState((oldState) => ({
      peopleToShow: searchFilter(oldState.peopleApi, query, oldState.lastFilter),
    }));
  };
  //
  handleFilter = (filter, desc) => {
    this.setState((oldState) => ({
      lastFilter: filter,
      peopleToShow: sortBy(oldState.peopleToShow, filter, desc),
    }));
  };
  //
  render() {
    const { peopleToShow } = this.state;
    return (
      <>
        <TopBar />
        <Filters
          handleSearch={this.handleSearch}
          handleFilter={this.handleFilter}
        />
        <Contacts people={peopleToShow} />
      </>
    );
  }
}

export default App;
