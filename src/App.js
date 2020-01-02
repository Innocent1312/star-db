import React from 'react';
import './styles/bootstrap.min.css'
import './styles/main.scss'
import SwapiService from './api/SwapiService';
import Header from './components/Header';
import ItemList from './components/ItemList';
import PersonDetails from './components/PersonDetails';
import PlanetDetails from './components/PlanetDetails';
import RandomPlanet from './components/RandomPlanet';
import StarshipDetails from './components/StarshipDetails';

const swapi = new SwapiService();

swapi.getPerson(3).then(p => {console.log(p.name)});

const App = () => {
  return (
    <>
      <h1 className="hello">Hello</h1>
      <Header/>
      <ItemList/>
      <PersonDetails/>
      <PlanetDetails/>
      <RandomPlanet/>
      <StarshipDetails/>
    </>
  );
};

export default App;
