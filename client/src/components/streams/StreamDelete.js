import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions/index';

class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    renderActions() {
        return (
            <React.Fragment>
                <button
                    onClick={() =>
                        this.props.deleteStream(this.props.match.params.id)
                    }
                    className="button is-danger mr-3 is-medium"
                >
                    Delete
                </button>
                <Link to="/" className="button is-info is-medium is-outlined">
                    Cancel
                </Link>
            </React.Fragment>
        );
    }

    renderContent() {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream?';
        }

        return `Are you sure you want to delete stream ${this.props.stream.title}?`;
    }

    render() {
        return (
            <Modal
                title="Delete Stream"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
    StreamDelete
);
