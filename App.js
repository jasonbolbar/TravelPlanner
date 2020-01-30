import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import {scenes} from './scenes';
import Index from './components/index/Index';

const App = () => (
  <Router>
    <Scene key="root">
      <Scene
        key="index"
        component={Index}
        title={'Indice'}
        initial={true}
        hideNavBar={true}
      />
      {Object.keys(scenes).map(key => (
        <Scene
          key={key}
          component={scenes[key].component}
          title={scenes[key].label}
          hideNavBar={true}
        />
      ))}
    </Scene>
  </Router>
);

export default App;
