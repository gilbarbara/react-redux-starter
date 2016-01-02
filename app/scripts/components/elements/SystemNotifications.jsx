import React from 'react';
import shouldComponentUpdate from '../../utils/PureRender';
import { autobind } from 'core-decorators';

let defaultState = {
		visible: false,
		message: '',
		status: '',
		withTimeout: false
	},
	hideTimeout;

class SystemNotifications extends React.Component {
	constructor (props) {
		super(props);

		this.state = defaultState;
	}

	static contextTypes = {
		store: React.PropTypes.object
	};

	shouldComponentUpdate = shouldComponentUpdate;

	componentDidMount () {
		this.storeUnsubscribe = this.context.store.subscribe(this.handleStoreChange);
	}

	componentDidUpdate () {
		if (this.state.withTimeout) {
			window.clearTimeout(hideTimeout);

			hideTimeout = setTimeout(() => {
				this.hideNotification();
			}, 2000);
		}
	}

	componentWillUnmount () {
		this.storeUnsubscribe();
	}

	@autobind
	handleStoreChange () {
		let state = this.context.store.getState();

		if (state.BS) {
			this.setState(state.BS);
		}
	}

	hideNotification () {
		if (this.state.visible) {
			this.setState({
				visible: false
			});

			setTimeout(() => {
				this.setState(defaultState);
			}, 1000);
		}
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
				<i className={'fa fa-' + ( STATE.status === 'success' ? 'thumbs-up' : (STATE.status === 'warning' ? 'exclamation-circle' : (STATE.status === 'info' ? 'info-circle' : 'times-circle')))} />

				<div>{STATE.message}</div>
			</div>
		);
	}
}

export default SystemNotifications;
