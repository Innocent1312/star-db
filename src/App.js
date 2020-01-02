import React from 'react';
import './styles/bootstrap.min.css'
import './styles/main.scss'
import SwapiService from './api/SwapiService';
import Header from './components/Header';
import ItemList from './components/ItemList';
import PersonDetails from './components/PersonDetails';
import RandomPlanet from './components/RandomPlanet';

const swapi = new SwapiService();

swapi.getPerson(3).then(p => {console.log(p.name)});

const App = () => {
  return (
    <div>
      <Header />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
