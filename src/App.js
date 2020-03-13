import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import { ShopPage } from './pages/shop/shop.component.jsx';
import { Route, Switch } from 'react-router-dom'
import { HatsPage } from "./pages/hatspage/hatsPage.component"
import { Jackets } from "./pages/jacketspage/jacketspage.component"
import { Sneakers } from "./pages/sneakerspage/sneakerspage.component"
import { Womens } from "./pages/womenpage/womenpage.component"
import { Mens } from "./pages/menspage/menspage.component"
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
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
