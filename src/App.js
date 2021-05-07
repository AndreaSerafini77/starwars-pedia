import './App.css';
import background from './assets/images/main-background.png';
import logo from './assets/images/Star_wars2.png';
import React, { Component } from 'react';
import List from './components/list/list';
import Detail from './components/detail/detail';
import Filters from './components/filters/filters'
import * as api from './services/api';

class App extends Component {

  limit = 6;
  filterList = [
    {
      id: 1,
      label: 'People',
      type: 'people',
      checked: false
    },
    {
      id: 2,
      label: 'Species',
      type: 'species',
      checked: false
    }
  ]
  state = {
    species: null,
    people: null,
    entity: null,
    loading: true,
    list: 'people'
  }

  componentDidMount() {
    this.getPeople(this.limit);
  }

  getSpecies(limit) {
    this.setState({ loading: true });
    api.getSpecies(limit).then(response => {
      this.setState({ species: response });
      this.setState({ people: null });
      this.setState({ loading: false });
    })
    .catch(err => {
      console.log(err);
    });
  }

  getPeople(limit) {
    this.setState({ loading: true });
    api.getPeople(limit).then(response => {
      this.setState({ people: response });
      this.setState({ species: null });
      this.setState({ loading: false });
    }).catch(err => {
      console.log(err);
    });
  }

  getPeopleById = (id) => {
    this.setState({ loading: true });
    api.getPeopleById(id).then(response => {
      this.setState({ entity: response });
      this.setState({ loading: false });
    });
  }

  getSpeciesById = (id) => {
    this.setState({ loading: true });
    api.getSpeciesById(id).then(response => {
      this.setState({ entity: response });
      this.setState({ loading: false });
    });
  }

  selectList = (id) => {
    this.setState({ entity: null });
    switch (id) {
      default:
      case 1:
        this.setState({ list: 'people' });
        this.getPeople(this.limit);
        break;
      case 2:
        this.setState({ list: 'species' });
        this.getSpecies(this.limit);
        break;
    }
  }

  render() {
    return (
      <div className="container h-100 full-content">
        <div className="row">
          <div className="col-12 text-center px-0">
            <div className="header">
              <img alt="star wars" className="w-100" src={background}></img>
              <div className="main-logo">
                <img alt={logo} className="w-100" src={logo}></img>
              </div>
            </div>
            <div className="main-content">
              <Filters
                filters={this.filterList}
                onCheck={this.selectList}
              ></Filters>
              <div className="container">
                <div className="row">
                  <div className="col-6 col-sm-6 col-md-8 col-lg-8 col-xl-8 p-0 scrollable">
                    <List onSelect={(this.state.list === 'people') ? this.getPeopleById : this.getSpeciesById}
                      type={this.state.list}
                      loading={this.state.loading}
                      items={(this.state.list === 'people') ? this.state.people : this.state.species} />
                  </div>
                  <div className="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-4 p-0">
                    <Detail loading={this.state.loading} type={this.state.list} item={this.state.entity} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App