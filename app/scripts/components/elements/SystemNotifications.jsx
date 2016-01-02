import React from 'react';
import shouldComponentUpdate from '../../utils/PureRender';
import { autobind } from 'core-decorators';

import { hideAlert } from '../../actions';

let hideTimeout;

class SystemNotifications extends React.Component {
	constructor (props) {
		super(props);
	}

	static contextTypes = {
		store: React.PropTypes.object
	};

	shouldComponentUpdate = shouldComponentUpdate;

	componentWillMount () {
		this.setState(this.context.store.getState().Browser);
	}

	componentDidMount () {
		this.storeUnsubscribe = this.context.store.subscribe(this.handleStoreChange);
	}

	componentDidUpdate () {
		if (this.state.visible && this.state.withTimeout) {
			window.clearTimeout(hideTimeout);

			hideTimeout = setTimeout(() => {
				this.hideNotification();
			}, 3500);
		}
	}

	componentWillUnmount () {
		this.storeUnsubscribe();
	}

	@autobind
	handleStoreChange () {
		let state = this.context.store.getState();

		if (state.Browser.message !== this.state.message) {
			this.setState(state.Browser);
		}
	}

	hideNotification () {
		this.context.store.dispatch(hideAlert(this.state.status));
	}

	@autobind
	onClick () {
		window.clearTimeout(hideTimeout);
		this.hideNotification();
	}

	render () {
		const STATE = this.state;

/*		 state.visible = true;
		 state.status = 'info';
		 state.message = 'O seu resgate foi efetuado com sucesso';*/

		let classes = 'system-notifications' + (STATE.visible ? ' active' : '') + (STATE.status ? ' ' + STATE.status : '');

		return (
			<div ref="systemNotification" className={classes} onClick={this.onClick}>
				<i className={'fa fa-' + ( STATE.status === 'success' ? 'thumbs-up' : (STATE.status === 'warning' ? 'exclamation-circle' : (STATE.status === 'info' ? 'info-circle' : 'thumbs-down')))} />

				<div>{STATE.message}</div>
			</div>
		);
	}
}

export default SystemNotifications;
