import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
    componentDidMount() {
        // OAuth process should be in a Redux Action Creator for good practices.
        // Process is in one file to have documentation how to use OAuth.

        window.gapi.load('client:auth2', () => {
            window.gapi.client
                .init({
                    clientId:
                        '965543228460-j1kac46pestqhu7d5h79lvm2s2fn07f2.apps.googleusercontent.com',
                    scope: 'email',
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.onAuthChange(this.auth.isSignedIn.get());
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button
                    onClick={this.onSignOutClick}
                    className="button is-danger"
                >
                    <i className="mdi mdi-google mr-3" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={this.onSignInClick} className="button is-link">
                    <i className="mdi mdi-google  mr-3" />
                    Sign In
                </button>
            );
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
