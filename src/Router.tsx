import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DenseAppBar from './components/AppBar';
import BarPlot from './components/BarPlot';
import BubblePlot from './components/BubblePlot';
import Home from './components/Home';
import LinePlot from './components/LinePlot';
import MaterialUI from './components/MaterialUI';
import PiePlot from './components/PiePlot';
import RadarPlot from './components/RadarPlot';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <DenseAppBar />

      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/materialui' component={MaterialUI} />
        <Route path='/lineplot' component={LinePlot} />
        <Route path='/pieplot' component={PiePlot} />
        <Route path='/barplot' component={BarPlot} />
        <Route path='/radarplot' component={RadarPlot} />
        <Route path='/bubbleplot' component={BubblePlot} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
