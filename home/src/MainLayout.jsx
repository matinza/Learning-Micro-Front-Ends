import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import 'remixicon/fonts/remixicon.css';
import './index.scss';

import CartContent from 'cart/CartContent';
import Footer from 'home/Footer';
import Header from 'home/Header';
import HomeContent from 'home/HomeContent';
import PDPContent from 'pdp/PDPContent';

export default function MainLayout() {
  return (
    <Router>
      <div className="text-3xl mx-auto max-w-6xl">
        <Header />
        <div className="my-10">
          <Switch>
            <Route exact path="/" component={HomeContent} />
            <Route path="/product/:id" component={PDPContent} />
            <Route path="/cart" component={CartContent} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
