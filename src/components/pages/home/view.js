import React from 'react';
import { View, Button, Text } from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
import { getHouses } from '../../../api';


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {list: []};
    }

    // MONTAJE
    async componentDidMount(){
        try {
            const getHousesRes = await getHouses();
            console.log("getHousesRespuesta: ", getHousesRes);
            // Guardar a una Lista
            const list = getHousesRes.data.records;
            this.setState({list});
            // es lo mismo que
            // this.setState({list: list});
        }catch (e) {
            console.log('getHousesError: ', e);
        }
    }
           
    render() {
        console.log('Mis state: ', this.state.list);
        return (
            <View style={styles.container}>

                {this.state.list.map((v, i) => (
                    <Text key={`cell-${i}`} style={{marginVertical: 20, color: 'green'}}>
                        {v.nombre}
                    </Text>
                ))}
            
        </View>
        )
    }
}
export default Home;

/*
<Button title={'Navegar a Detail'} onPress={() => Actions.push('Detail', {title: 'Título'})}/>
*/
