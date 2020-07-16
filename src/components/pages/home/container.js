import {connect} from 'react-redux';
import View from './view'; // Las clases siempre en Primera letra Mayúscula

import {actorsActions} from '../../../redux/actors';

// Recibo el ESTADO, Leer
const mapStateProps = state => {
  console.log('Estado entero de REDUX conn mapStateProps: ', state);
  return {
    listadoActores: state.actors.list,
    loading: state.actors.loading,
    item: state.actors.item,
  };
};

// Cargo el LOADING, consumir o realizar acciones
const mapDispatchToProps = dispatch => {
  return {
    //setActorsLoading: loading => dispatch(actorsActions.setLoading(loading)),
    // Carga el listado de ACTORES
    getActors: () => dispatch(actorsActions.fetchActors()),
  };
};

export default connect(
  mapStateProps,
  mapDispatchToProps,
)(View);
