import React from 'react';
import './App.css';
import HomePage from '././pages/homepage/homepage.component'

import { Route } from 'react-router-dom'
import { HatsPage } from "./pages/hatspage/hatsPage.component"
import { Jackets } from "./pages/jacketspage/jacketspage.component"
import { Sneakers } from "./pages/sneakerspage/sneakerspage.component"
import { Womens } from "./pages/womenpage/womenpage.component"
import { Mens } from "./pages/menspage/menspage.component"
function App() {
  return (
    <div >
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
      <Route path="/Jackets" component={Jackets} />
      <Route path="/Sneakers" component={Sneakers} />
      <Route path="/Womens" component={Womens} />
      <Route path="/mens" component={Mens} />

    </div>
  );
}

export default App;
