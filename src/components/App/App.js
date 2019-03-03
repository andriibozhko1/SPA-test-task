import React, { Component } from "react";
import CardList from "../CardList/CardList";
import CardViewer from "../CardViewer/CardViewer";
import { Switch, Route } from "react-router-dom";

export default class App extends Component {
  state = {
    data: [],
    currentPerson: null,
  };

  componentDidMount() {
    fetch("https://next.json-generator.com/api/json/get/E146QiV8U")
      .then(response => response.json())
      .then(result => {
        this.setState({ data: result });
      });
  }

  getPersonById = (id) => {
    const person = this.state.data.find(person => {
      if(person['_id'] === id) {
        return person
      }
    })
    return person || null;
  }

  render() {
    return (           
      <>
        <Switch>
          <Route exact path="/" render={() => <CardList data={this.state.data} getPersonById={this.getPersonById}/>} />
          <Route path="/:id" render={(props) => <CardViewer {...props} getPersonById={this.getPersonById}/>} />        
        </Switch>
      </>
    );
  }
} 