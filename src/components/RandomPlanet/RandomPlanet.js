import React, { Component } from 'react';
import './RandomPlanet.scss';

import SwapiService from '../../api/SwapiService';
import Spinner from '../Spiner';
import PlanetView from './PlanetView';
import ErrorIndicator from '../ErrorIndicator';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();

  state = {
    planet: {},
  };

  componentDidMount() {
    this.updatePlanet();
  }

  timerId;

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.timerId = setTimeout(this.updatePlanet, 1500)
  }

  componentWillUnmount() {
    clearTimeout(this.timerId)
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
      error: false
    });
  };

  onError = (err) => {
    this.setState({
      error: true,
      loading: false,
    })
  };

  updatePlanet = () =>  {
    const id = Math.floor(Math.random() * 17) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError)
  };

  render() {

    const { planet, loading, error } = this.state;

    const errorMessage = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? <PlanetView planet={planet} /> : null;

    return (
      <div className="random-planet jumbotron rounded align-self-center">
        {errorMessage}
        {spinner}
        {content}
      </div>
    );
  }
};