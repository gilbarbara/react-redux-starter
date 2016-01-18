import React from 'react';
import { autobind } from 'core-decorators';
import shouldComponentUpdate from '../utils/PureRender';

import { fetchPopular, showAlert } from '../actions';
import Loader from './elements/Loader';

class Popular extends React.Component {
  constructor(props) {
    super(props);
  }

  static contextTypes = {
    store: React.PropTypes.object
  };

  shouldComponentUpdate = shouldComponentUpdate;

  componentWillMount() {
    this.setState(this.context.store.getState().hypeMachine.popular);
  }

  componentDidMount() {
    this.storeUnsubscribe = this.context.store.subscribe(this.handleStoreChange);
    if (!this.state.error && this.state.page === 1) {
      this.context.store.dispatch(fetchPopular());
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.error && this.state.error) {
      this.context.store.dispatch(showAlert('error', this.state.message, true));
    }
  }

  componentWillUnmount() {
    this.storeUnsubscribe();
  }

  @autobind
  handleStoreChange() {
    const state = this.context.store.getState();

    if (this.state.items.length !== state.hypeMachine.popular.items.length || state.hypeMachine.popular.error && !this.state.error) {
      this.setState(state.hypeMachine.popular);
    }
  }

  loadMore() {
    this.context.store.dispatch(fetchPopular('page=' + this.state.page));
  }

  @autobind
  onClickLoadMore(e) {
    e.preventDefault();

    this.loadMore();
  }

  render() {
    const STATE = this.state;
    const output = {};

    if (STATE.ready) {
      output.html = STATE.items.map((d, i) => {
        return (
          <div key={i} className="tracks">
            <div className="tracks__image">
              <img src={d.thumb_url_large} />
            </div>
            <div className="tracks__info">
              <h2>
                <a
                  href={'http://hypem.com/track/' + d.itemid}
                  target="_blank">
                  {d.artist} - {d.title}
                </a>
              </h2>
              {d.description}
            </div>
          </div>
        );
      });

      if (!STATE.error) {
        output.actions = (
          <div className="app__actions">
            <a
              href="#" className="load-more btn btn-primary btn-lg"
              onClick={this.onClickLoadMore}>
              Load More
            </a>
          </div>
        );
      }
    }
    else {
      output.html = <Loader />;
    }

    return (
      <div key="Tracks" className="tracks-app">
        <h1>Hype Machine - Popular</h1>

        <div className="tracks__wrapper">{output.html}</div>
        {output.actions}
      </div>
    );
  }
}

export default Popular;
