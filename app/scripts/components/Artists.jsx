import React from 'react';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';
import shouldComponentUpdate from '../utils/PureRender';

import { fetchArtists, showAlert } from '../actions';
import Loader from './elements/Loader';

export class Artists extends React.Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired
  };

  shouldComponentUpdate = shouldComponentUpdate;

  componentDidMount() {
    if (!this.props.data.error && this.props.data.count === 0) {
      this.props.dispatch(fetchArtists());
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.data.error && this.props.data.error) {
      this.props.dispatch(showAlert('error', this.props.data.message, true));
    }
  }

  loadMore() {
    this.props.dispatch(fetchArtists(`count=${(this.props.data.count + 10)}`));
  }

  @autobind
  onClickLoadMore(e) {
    e.preventDefault();

    this.loadMore();
  }

  render() {
    const data = this.props.data;
    const output = {};

    if (data.ready) {
      output.html = data.items.map((d, i) => {
        return (
          <div key={i} className="artists__item col-xs-12 col-is-6 col-lg-4">
            <div className="artists__image">
              <a
                href={`http://hypem.com/artist/${d.artist.replace(' ', '+')}`}
                target="_blank">
                <img src={d.thumb_url_artist} />
              </a>
            </div>
            <div className="artists__info">
              <a
                href={`http://hypem.com/artist/${d.artist.replace(' ', '+')}`}
                target="_blank">
                {d.artist}
              </a>
              {d.description}
            </div>
          </div>
        );
      });

      if (!data.error && data.count < 50) {
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
function mapStateToProps(state) {
  return { data: state.artists };
}

export default connect(mapStateToProps)(Artists);
