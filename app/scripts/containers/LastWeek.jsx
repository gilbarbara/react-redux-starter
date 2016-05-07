import React from 'react';
import { connect } from 'react-redux';
import { autobind } from 'core-decorators';
import shouldComponentUpdate from '../utils/PureRender';

import { fetchLastWeek, showAlert } from '../actions';
import Loader from './../components/Loader';

export class LastWeek extends React.Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired
  };

  shouldComponentUpdate = shouldComponentUpdate;

  componentDidMount() {
    if (!this.props.data.error && this.props.data.page === 1) {
      this.props.dispatch(fetchLastWeek());
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.data.error && this.props.data.error) {
      this.props.dispatch(showAlert('error', this.props.data.message, true));
    }
  }

  @autobind
  loadMore() {
    this.props.dispatch(fetchLastWeek(`page=${this.state.page}`));
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
      output.html = data.items.map((d, i) =>
        (
          <div key={i} className="tracks">
            <div className="tracks__image">
              <img src={d.thumb_url_large} />
            </div>
            <div className="tracks__info">
              <h2>
                <a
                  href={`http://hypem.com/track/${d.itemid}`}
                  target="_blank">
                  {d.artist} - {d.title}
                </a>
              </h2>
              {d.description}
            </div>
          </div>
        )
      );

      if (!data.error) {
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
        <h1>Hype Machine - Last Week</h1>

        <div className="tracks__wrapper">{output.html}</div>
        {output.actions}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { data: state.lastweek };
}

export default connect(mapStateToProps)(LastWeek);
