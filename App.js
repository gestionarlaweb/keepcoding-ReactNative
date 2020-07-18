import React, {Component} from 'react';
import {Router, Scene, Stack, Actions} from 'react-native-router-flux';
import {Splash, Home, Detail, AddActor} from './src/components/pages';
// Para el STATUS BAR
import {StatusBar} from 'react-native';
// Para REDUX
import {Provider} from 'react-redux';
import store from './src/config/redux';
import colors from './src/assets/colors';

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
              navigationBarStyle={{backgroundColor: colors.navBar}}
              titleStyle={{color: colors.white}}
              title={'Home'}
              hideNavBar={false}
            />
            <Scene
              key={'Detail'}
              component={Detail}
              navigationBarStyle={{backgroundColor: colors.navBar}}
              onRight={() => Actions.push('AddActor')}
              titleStyle={{color: colors.white}}
              backButtonTextStyle={{color: colors.white}}
              backButtonTintColor={colors.white}
              rightButtonTextStyle={{color: colors.white}}
              rightTitle={'Crear'}
            />
            <Scene
              key={'AddActor'}
              component={AddActor}
              navigationBarStyle={{backgroundColor: colors.navBar}}
              titleStyle={{color: colors.white}}
              backButtonTextStyle={{color: colors.white}}
              backButtonTintColor={colors.white}
              title={'Crear actor'}
            />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

export default App;

// Stack -> Monton de cartas
