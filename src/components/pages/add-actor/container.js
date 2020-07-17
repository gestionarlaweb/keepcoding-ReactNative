import {connect} from 'react-redux';
import View from './view';
import {actorsActions} from '../../../redux/actors';

// Trae las propiedades del estado de Redux y inyectalas como propiedades en mi componente
const mapStateToProps = state => {
  return {
    loading: state.actors.loading,
    actor: state.actors.item,
  };
};
// Trae todos los dispatch que yo quiero desde la vista y inyectalos por Props
const mapDispatchToProps = (dispatch, props) => {
  return {
    postActor: data => dispatch(actorsActions.postActor(data)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
