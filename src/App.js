import React from 'react';
import './App.css';
import HomePage from '././pages/homepage/homepage.component'

import { Route } from 'react-router-dom'

const HatsPage = () => (
  <div>
    <h1> Hats Page</h1>
  </div>

);



const Jackets = () => (
  <div>
    <h1> Jackets Page</h1>
  </div>

);



const Sneakers = () => (
  <div>
    <h1> Sneakers Page</h1>
  </div>

);

const Womens = () => (
  <div>
    <h1> Womens Page</h1>
  </div>

);
const Mens = () => (
  <div>
    <h1>Mens Page</h1>
  </div>
);
function App() {
  return (
    <div >
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hats" component={HatsPage} />
      <Route exact path="/Jackets" component={Jackets} />
      <Route exact path="/Sneakers" component={Sneakers} />
      <Route exact path="/Womens" component={Womens} />
      <Route exact path="/mens" component={Mens} />

    </div>
  );
}

export default App;
