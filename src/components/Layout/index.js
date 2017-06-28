import React from 'react';
import { connect } from 'react-redux';

import actions from '../../actions';

class Layout extends React.Component {
  render() {
    return <div>
      <button
        type="button"
        className="btn btn-success"
        onClick={this.props.getUsers}
      >
        Get users!
      </button>
    </div>
  }
}

Layout.propTypes = {
  getUsers: React.PropTypes.func.isRequired,
};

const mapStateToProps = store => ({

});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(actions.getUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
