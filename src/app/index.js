import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Layout from './components/global/Layout/Layout';

import Top from './routes/top/index';
import New from './routes/new/index';
import User from './routes/user/index';
import Story from './routes/story/index';
import BestStories from './routes/best-stories/index';
import error404 from './routes/404/index';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
          <Route exact path="/" component={Top} />
          <Route exact path="/new" component={New} />
          <Route exact path="/best-stories" component={BestStories} />
          <Route path="/user/:username" component={User} />
          <Route path="/story/:id" component={Story} />
          <Route component={error404} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default App;
