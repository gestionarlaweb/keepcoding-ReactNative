import {connect} from 'react-redux';
import View from './view';

// Trae las propiedades del estado de Redux y inyectalas como propiedades en mi componente
const mapStateToProps = state => {
  return {};
};
// Trae todos los dispatch que yo quiero desde la vista y inyectalos por Props
const mapDispatchToProps = (dispatch, props) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
