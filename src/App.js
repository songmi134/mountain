import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './pages/Main';
import List from './pages/List';
import Community from './pages/Community';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/" exact component={Main} />
      <Route path="/list" exact component={List} />
      <Route path="/community" exact component={Community} />
    </BrowserRouter>
  );
};

export default App;
