import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class StreamDelete extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}

	renderActions() {
		return (
			<React.Fragment>
				<button
					onClick={() => this.props.deleteStream(this.props.match.params.id)}
					className='ui button negative'
				>
					Delete
				</button>
				<Link to='/' className='ui button'>
					Cancel
				</Link>
			</React.Fragment>
		);
	}

	render() {
		return (
			<Modal
				title='Delete Stream'
				content={`Are you sure you want to delete the stream "${this.props.stream?.title}"?`}
				actions={this.renderActions()}
				onDismiss={() => history.push('/')}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id],
	};
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
