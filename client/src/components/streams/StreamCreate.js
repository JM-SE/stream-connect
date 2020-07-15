import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    };

    render() {
        return (
            <div className="container">
                <h3 className="title is-2 mb-6">Create a Stream</h3>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null, { createStream })(StreamCreate);
