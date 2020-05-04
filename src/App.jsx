import React from "react";
//
import "./App.scss";
import Contacts from "./components/Contacts";
import TopBar from "./components/TopBar";
import Filters from "./components/Filters";
import { apiUrl } from "./services/api"

class App extends React.Component {
  state = {
    peopleApi: [],
    people: []
  };
  componentDidMount() {
    fetch(apiUrl).then(
      async (result) => {
        const resultJSON = await result.json();
        this.setState({
          peopleApi: resultJSON,
          people: resultJSON
        });
      }
    );
  }
  render() {
    const { people } = this.state;
    return (
      <>
        <TopBar />
        <Filters />        
        <Contacts people={people} />
      </>
    );
  }
}

export default App;
