import React from 'react';
import CLIENT_ID from '../config';
import { signIn, signOut } from '../actions';
import { connect } from 'react-redux';

class GoogleAuth extends React.Component {
	componentDidMount() {
		// gapi is only available in the window scope
		window.gapi.load('client:auth2', () => {
			// When we call init it returns a promise
			window.gapi.client
				.init({
					clientId: CLIENT_ID,
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
		return isSignedIn
			? this.props.signIn(this.auth.currentUser.get().getId())
			: this.props.signOut();
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
				<button className='ui red basic google button' onClick={this.onSignOutClick}>
					<i className='google icon' />
					Sign Out
				</button>
			);
		} else {
			return (
				<button className='ui red google button' onClick={this.onSignInClick}>
					<i className='google icon' />
					Sign In with Google
				</button>
			);
		}
	}

	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}

const mapStateToProps = (state) => {
	return {
		isSignedIn: state.auth.isSignedIn,
	};
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
