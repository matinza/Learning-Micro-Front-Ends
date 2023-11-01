import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import Footer from './Footer';
import Header from './Header';

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    <Header />
    <div>Home Page Content</div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
