
import React, {Component} from 'react';
import {Actions, Router, Scene, Stack} from 'react-native-router-flux';
import {Home, Detail} from './src/components/pages';

class App extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key={'Home'} component={Home} title={'Título Home'}/>
          <Scene key={'Detail'} component={Detail} hideNavBar={false} />
        </Stack>
      </Router>
    );
  } 
}

export default App;

// Stack -> Monton de cartas
