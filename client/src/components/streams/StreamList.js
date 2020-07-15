import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin(stream) {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className="level-right">
                    <Link
                        to={`/streams/edit/${stream.id}`}
                        className="button is-dark is-rounded mr-5"
                    >
                        Edit
                    </Link>
                    <Link
                        to={`/streams/delete/${stream.id}`}
                        className="delete is-large"
                    >
                        Delete
                    </Link>
                </div>
            );
        }
    }

    renderList() {
        return this.props.streams.map((stream) => {
            return (
                <div
                    className="box box-color has-background-white-ter mb-5"
                    key={stream.id}
                >
                    <div className="level">
                        <div className="level-left">
                            <div
                                className="icon is-large mr-4"
                                style={{ fontSize: '3em' }}
                            >
                                <i className="mdi mdi-video" />
                            </div>
                            <div className="content">
                                <Link
                                    to={`/streams/${stream.id}`}
                                    className="subtitle is-4"
                                >
                                    {stream.title}
                                </Link>
                                <div className="subtitle is-5">
                                    {stream.description}
                                </div>
                            </div>
                        </div>
                        {this.renderAdmin(stream)}
                    </div>
                </div>
            );
        });
    }

    renderCreate() {
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/streams/new" className="button is-info">
                        Create Channel
                    </Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="container">
                <h2 className="mt-6 title is-3 s-title">Channels</h2>
                {this.renderCreate()}
                <div className="content mt-5 mb-6">{this.renderList()}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn,
    };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
