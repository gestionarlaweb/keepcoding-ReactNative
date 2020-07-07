import React from 'react';
import { SafeAreaView, TouchableOpacity, View, Image, Button, Text, Alert, FlatList, Dimensions } from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
import { getHouses } from '../../../api';

// Saber el width de la pantalla
//const width = Dimensions.get('window').width;
//console.log('Width: ',width );

// Saber las 4 propiedades
const window = Dimensions.get('window');
console.log('window', window);


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
            const list = getHousesRes.data
            this.setState({list});
            // es lo mismo que
            // this.setState({list: list});
        }catch (e) {
            console.log('getHousesError: ', e);
            Alert.alert('Error', 'Ha ocurrido un error');
        }
    }

    _renderItem = ({item}) => {
       
        return (

            
            <TouchableOpacity onPress={()=> Alert.alert(`${item.title} pulsado`)}>  
                <View>
                    <Text>{item.title}</Text>
                </View>
                <Image 
                    source={{uri: item.thumbnail}} style={{width: 200}} 
                    style={{width: '50%', height: '50%'}}
                />
            </TouchableOpacity>

            
        );
            
        
            
        
        
                
                
            
            // Si quisieramos cargar una imagen
            // https://reactnative.dev/docs/image

            // Imagen Fija
            /*

            <View>
                    <Text>{item.thumbnail}</Text>
            </View>


            <Image

            <TouchableOpacity onPress={()=> Alert.alert(`${item.title} pulsado`)}>

                style={styles.tinyLogo}
                source={require('@expo/snack-static/react-native-logo.png')}
            />
            */
           // Image API
           //<Image 
           //      source={{uri: item.thumbnail}} style={{width: 300}} 
           //      style={{width: '50%', height: '50%'}}
           // />;
    };
           
    render() {
        console.log('Mis state: ', this.state.list);

        const { list } = this.state
        return (
            <View style={styles.container}>
                <FlatList
                    data={list}
                    // si hubiese un id le pasaría esta línea, pero esta API no la tiene
                   // keyExtractor={(item, index) => `card-${item.id}`} 
                    // 2 columnas por cada fila
                   //numColumns={2}
                    //renderItem={({ item }) => (
                        // Aquí le paso la función _renderItem
                        renderItem={this._renderItem}
                    //)}
                    
                />
            </View>
        );
    }
}
export default Home;

/*
<Button title={'Navegar a Detail'} onPress={() => Actions.push('Detail', {title: 'Título'})}/>
 
<TouchableOpacity> Efecto pulsar boton
SafeAreaView Para las imagenes que les da un mejor formato, les da un padding automático
*/
