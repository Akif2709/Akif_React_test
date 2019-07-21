import React, { Component } from 'react';
import Button from './button';
import fetchApi from './fetch';
import Names from './names';
import DetailedList from './detailedList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      getUser: false,
      isFetching: true,
      index: null,
      persons: [],
    };
  }

  componentDidMount() {
    fetchApi()
      .then(data => this.setState({ persons: data, isFetching: false }))
      .catch(e => console.log('something wrong'));
  }

  ShowDetail = index => {
    this.setState({ index: index });
    // console.log(index);
  };

  getUsers = () => {
    this.setState({
      getUser: true,
    });
  };

  render() {
    const { persons, index, isFetching, getUser } = this.state;
    console.log(this.state);
    return !isFetching ? (
      <div className="App">
        <Button getUsers={this.getUsers} />
        {getUser ? <Names data={persons} showDetail={this.ShowDetail} /> : null}
        {index === 0 || index ? <DetailedList data={persons[index]} /> : null}
      </div>
    ) : (
      <p>Loading</p>
    );
  }
}

export default App;
