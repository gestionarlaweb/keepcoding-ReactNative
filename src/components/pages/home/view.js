import React from 'react';
import { SafeAreaView, TouchableOpacity, View, Image, Button, Text, Alert, FlatList, Dimensions, RefreshControl } from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
import { getApi } from '../../../api_axios';

// Saber el width de la pantalla
//const width = Dimensions.get('window').width;
//console.log('Width: ',width );

// Saber las 4 propiedades
//const window = Dimensions.get('window');
const {width, height} = Dimensions.get('window');


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {list: [], loading: true};
    }

    componentDidMount(){
        this._initList();
    }

    // Init GET Api
    _initList = async () => {
        try {
            this.setState({loading: true});
            const getRes = await getApi();
            //console.log("getRespuesta: ", getRes);
            const list = getRes.data
            this.setState({list, loading: false});
            // es lo mismo que
            // this.setState({list: list});
        }catch (e) {
            //console.log('getError: ', e);
            this.setState({loading:false});
                Alert.alert('Error', 'Ha ocurrido un error');
            }
    };

    // 
    _renderItem = ({item}) => {
        return(
            <TouchableOpacity onPress={()=> Alert.alert(`${item.name} pulsado`)}>  
                <View>
                    <Text>{item.name}</Text>
                </View>
                <View>
                    <Image resizeMode={'cover'}
                    source={{uri: item.img}}
                    style={{width: width/2, height: height/2}}
                    />
                </View>
            </TouchableOpacity>
        );
    };
           
    render() {
        const { list, loading } = this.state;
        console.log('loading', loading);
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={list}
                    keyExtractor={(item, index) => `card-${item.char_id}`} 
                    numColumns={2}
                    // Aquí le paso la función _renderItem
                    renderItem={this._renderItem}
                    refreshControl= {
                        <RefreshControl 
                            colors={['white']}
                            refreshing={loading} 
                            onRefresh={this._initList} 
                        />
                    } 
                />
            </SafeAreaView>
        );
    }
}
export default Home;

/*
<Button title={'Navegar a Detail'} onPress={() => Actions.push('Detail', {title: 'Título'})}/>
 
<TouchableOpacity> Efecto pulsar boton
SafeAreaView Para las imagenes que les da un mejor formato, les da un padding automático
*/
