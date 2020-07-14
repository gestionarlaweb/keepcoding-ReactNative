import React, {Component} from 'react';
import {Router, Scene, Stack} from 'react-native-router-flux';
import {Splash, Home, Detail} from './src/components/pages';
// Para el STATUS BAR
import {StatusBar} from 'react-native';
// Para REDUX
import {Provider} from 'react-redux';
import store from './src/config/redux';

class App extends Component {
  constructor(props) {
    super(props);
    // light-conten o dark-content, no me hace ni puto caso. Ver documentación
    StatusBar.setBarStyle('dark-content', true);
  }

  render() {
    // REDUX !!!!!!
    //console.log('STORE !!!:', store.getState());

    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene
              key={'Splash'}
              component={Splash}
              title={'Splash Page Initial'}
              hideNavBar={true}
            />
            <Scene
              key={'Home'}
              component={Home}
              title={'Home'}
              hideNavBar={false}
            />
            <Scene key={'Detail'} component={Detail} hideNavBar={false} />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

export default App;

// Stack -> Monton de cartas
