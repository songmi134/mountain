import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing/Landing';
import Search from './pages/Search/Search';
import Community from './pages/Community/Community';
import WritingForm from './pages/Community/WritingForm';
import CommunityDetail from './pages/Community/Detail';
import My from './pages/My/My';
import './App.less';

const App = () => {
  return (
    <BrowserRouter basename="pages">
      <Navbar />
      <Route path="/" exact component={Landing} />
      <Route path="/mountain/search" exact component={Search} />
      <Route path="/community" exact component={Community} />
      <Route path="/community/new" exact component={WritingForm} />
      <Route path="/community/update/:id" exact component={WritingForm} />
      <Route path="/community/:id" exact component={CommunityDetail} />
      <Route path="/my" component={My} />
    </BrowserRouter>
  );
};

export default App;
