import React from 'react';
import { Router, Stack, Scene } from "react-native-router-flux";
import SplashView from './src/views/splashView';
import ControlView from './src/views/controlView';

const App = () => (
  <Router>
    <Stack key="root" hideNavBar>
      <Scene key="splash" component={SplashView} initial />
      <Scene key='control' component={ControlView} initial />
    </Stack>
  </Router>
)

export default App;