import React from 'react';
import { View, Button } from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';


class Home extends React.Component {
    
    render() {
        return (
            <View style={styles.container}>
            <Button
                title={'Navegar a Detail'}
                onPress={() => Actions.push('Detail', {title: 'Título'})}
            />
        </View>
        )
    }
}
export default Home;

