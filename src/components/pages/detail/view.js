import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

class Detail extends React.Component {
    render() {
        //return <View style={styles.container}/>
        return (
            <View style= {styles.container}>
            <Text>Detail</Text>
        </View>
        );
    }
}

export default Detail;