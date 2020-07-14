import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  Text,
  Alert,
  FlatList,
  Dimensions,
  RefreshControl,
} from 'react-native';
import styles from './styles';
import {Actions} from 'react-native-router-flux';
import {getApi} from '../../../api_axios';

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

  componentDidMount() {
    // Lo desabilito porque lo vamos a hacer con REDUX
    //this._initList();

    // REDUX
    this.props.getActors();
  }

  // Init GET Api
  _initList = async () => {
    try {
      this.setState({loading: true});
      const getRes = await getApi();
      //console.log("getRespuesta: ", getRes);
      const list = getRes.data;
      this.setState({list, loading: false});
      // es lo mismo que
      // this.setState({list: list});
    } catch (e) {
      //console.log('getError: ', e);
      this.setState({loading: false});
      Alert.alert('Error', 'Ha ocurrido un error');
    }
  };

  _renderItem = ({item}) => {
    return (
      <TouchableOpacity
        // Al pulsar  Se lo paso todo a través del item y se paso al title solo el name
        onPress={() => Actions.push('Detail', {item, title: item.name})}>
        <View>
          <Text style={styles.nombreActor}>{item.name}</Text>
        </View>
        <View>
          <Image
            style={{width: width / 2, height: height / 3}}
            resizeMode={'cover'}
            source={{uri: item.img}}
          />
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    //const {list, loading} = this.state;
    //console.log('loading', loading);
    const {listadoActores, loading} = this.props;

    console.log('Mis PROPS: ', this.props);

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          style={styles.listado}
          //data={list}
          data={listadoActores} // REDUX
          keyExtractor={(item, index) => `card-${item.char_id}`}
          numColumns={2}
          // Aquí le paso la función _renderItem
          renderItem={this._renderItem}
          refreshControl={
            <RefreshControl
              tintColor={'white'}
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
