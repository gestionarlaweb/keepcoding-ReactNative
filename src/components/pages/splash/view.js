import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { Actions } from 'react-native-router-flux';

class Splash extends React.Component {
    
    // AL MONTAR vete a la página principal HOME
    componentDidMount() {
        setTimeout(() => Actions.replace('Home'), 2000);
    }

    // RENDER
    render() {
        //return <View style={styles.container}/>
        return (
            <View style= {styles.container}>
                <Text>SPLASH !</Text>
            </View>
        );
    }
}

export default Splash;