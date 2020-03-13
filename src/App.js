import React from 'react';
import './App.css';
import HomePage from '././pages/homepage/homepage.component'

import { Route, Switch } from 'react-router-dom'
import { HatsPage } from "./pages/hatspage/hatsPage.component"
import { Jackets } from "./pages/jacketspage/jacketspage.component"
import { Sneakers } from "./pages/sneakerspage/sneakerspage.component"
import { Womens } from "./pages/womenpage/womenpage.component"
import { Mens } from "./pages/menspage/menspage.component"
import { SHOPPAGE } from './pages/shop/shop.component'
function App() {
  return (
    <div >
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
        <Route path="/Jackets" component={Jackets} />
        <Route path="/Sneakers" component={Sneakers} />
        <Route path="/Womens" component={Womens} />
        <Route path="/mens" component={Mens} />
        <Route path="/shop" component={SHOPPAGE} />
      </Switch>
    </div>
  );
}

export default App;
