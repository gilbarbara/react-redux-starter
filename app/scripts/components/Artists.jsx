import React from 'react';
import { autobind } from 'core-decorators';
import shouldComponentUpdate from '../utils/PureRender';

import { fetchArtists, showAlert } from '../actions';
import Loader from './elements/Loader';

class Artists extends React.Component {
  constructor(props) {
    super(props);
  }

  static contextTypes = {
    store: React.PropTypes.object
  };

  shouldComponentUpdate = shouldComponentUpdate;

  componentWillMount() {
    this.setState(this.context.store.getState().hypeMachine.artists);
  }

  componentDidMount() {
    this.storeUnsubscribe = this.context.store.subscribe(this.handleStoreChange);
    if (!this.state.error && this.state.count === 0) {
      this.context.store.dispatch(fetchArtists());
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

    if (this.state.items.length !== state.hypeMachine.artists.items.length
      || state.hypeMachine.artists.error && !this.state.error) {
      this.setState(state.hypeMachine.artists);
    }
  }

  loadMore() {
    this.context.store.dispatch(fetchArtists('count=' + (this.state.count + 10)));
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
          <div key={i} className="artists__item col-xs-12 col-is-6 col-lg-4">
            <div className="artists__image">
              <a
                href={'http://hypem.com/artist/' + d.artist.replace(' ', '+')}
                target="_blank">
                <img src={d.thumb_url_artist} />
              </a>
            </div>
            <div className="artists__info">
              <a
                href={'http://hypem.com/artist/' + d.artist.replace(' ', '+')}
                target="_blank">
                {d.artist}
              </a>
              {d.description}
            </div>
          </div>
        );
      });

      if (!STATE.error && STATE.count < 50) {
        output.actions = (
          <div className="app__actions">
            <a
              href="#" className="load-more btn btn-primary btn-lg"
              onClick={this.onClickLoadMore}>Load More
            </a>
          </div>
        );
      }
    }
    else {
      output.html = <Loader />;
    }

    return (
      <div key="Artists" className="artists-app">
        <h1>Hype Machine - Artists</h1>

        <div className="artists row">{output.html}</div>
        {output.actions}
      </div>
    );
  }
}

export default Artists;
