import React from 'react';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';
import shouldComponentUpdate from 'utils/PureRender';

import { hideAlert } from '../actions';

let hideTimeout;

class SystemNotifications extends React.Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired
  };

  shouldComponentUpdate = shouldComponentUpdate;

  componentDidUpdate() {
    if (this.props.data.visible && this.props.data.withTimeout) {
      window.clearTimeout(hideTimeout);

      hideTimeout = setTimeout(() => {
        this.hideNotification();
      }, 3500);
    }
  }

  hideNotification() {
    this.props.dispatch(hideAlert(this.props.data.status));
  }

  @autobind
  onClick() {
    window.clearTimeout(hideTimeout);
    this.hideNotification();
  }

  render() {
    const data = this.props.data;

    /*		 state.visible = true;
     state.status = 'info';
     state.message = 'O seu resgate foi efetuado com sucesso';*/

    const classes = `system-notifications${(data.visible ? ' active' : '')}${(data.status ? ` ${data.status}` : '')}`;
    const iconClass = {
      sucess: 'fa-thumbs-up',
      warning: 'fa-exclamation-circle',
      info: 'fa-info-circle',
      error: 'fa-thumbs-down'
    };

    return (
      <div ref="systemNotification" className={classes} onClick={this.onClick}>
        <i className={`fa ${iconClass}`} />

        <div>{data.message}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { data: state.browser };
}

export default connect(mapStateToProps)(SystemNotifications);
