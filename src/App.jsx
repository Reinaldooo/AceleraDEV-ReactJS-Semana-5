import React from "react";
//
import "./App.scss";
import Contacts from "./components/Contacts";
import TopBar from "./components/TopBar";
import Filters from "./components/Filters";
import { apiUrl } from "./services/api"
import { searchFilter } from "./services/utils"

class App extends React.Component {
  state = {
    people: [],
    peopleToShow: []
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
    e.preventDefault()
    let value = e.target.value
    this.setState(oldState => ({
      peopleToShow: searchFilter(oldState.peopleApi, value)
    }))
  }
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
